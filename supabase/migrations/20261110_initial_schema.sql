-- ==============================================================================
-- SCHEMA DATABASE PLATFORM MAGANG & DIGITAL AGENCY
-- Sesuai PRD Platform Program Magang SMK & Mahasiswa + Digital Agency
-- Target: Supabase PostgreSQL (dengan RLS, Trigger, Index, & Seed Data)
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. HELPER FUNCTIONS & TRIGGERS
-- ==============================================================================

-- Trigger function untuk auto update timestamp updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger function untuk auto-generate registration_number unik (Format: REG-YYYYMM-XXXX)
CREATE OR REPLACE FUNCTION generate_application_registration_number()
RETURNS TRIGGER AS $$
DECLARE
    prefix TEXT;
    counter INT;
    new_reg_no TEXT;
BEGIN
    -- Format Prefix: REG-YYYYMM- (contoh: REG-202611-)
    prefix := 'REG-' || TO_CHAR(NOW(), 'YYYYMM') || '-';
    
    -- Hitung jumlah pendaftar di bulan yang sama untuk counter sequential
    SELECT COUNT(*) + 1 INTO counter
    FROM applications
    WHERE registration_number LIKE prefix || '%';

    new_reg_no := prefix || LPAD(counter::TEXT, 4, '0');
    
    -- Pastikan unik (loop jika terjadi benturan jarang)
    WHILE EXISTS (SELECT 1 FROM applications WHERE registration_number = new_reg_no) LOOP
        counter := counter + 1;
        new_reg_no := prefix || LPAD(counter::TEXT, 4, '0');
    END LOOP;

    NEW.registration_number := new_reg_no;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ==============================================================================
-- 3. TABEL PROFIL & PENGATURAN
-- ==============================================================================

-- Tabel Profiles (Terhubung dengan Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('superadmin', 'admin', 'editor')),
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger untuk sync otomatis profil saat admin baru register lewat auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'Admin Staff'),
        COALESCE(NEW.raw_user_meta_data->>'role', 'admin')
    )
    ON CONFLICT (id) DO UPDATE
    SET email = EXCLUDED.email;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Tabel Site Settings (Single-row configuration)
CREATE TABLE IF NOT EXISTS site_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    site_name VARCHAR(255) NOT NULL DEFAULT 'Platform Magang & Digital Agency',
    tagline VARCHAR(255) DEFAULT 'Bangun Skill Digital, Raih Pengalaman Profesional',
    description TEXT,
    logo_url TEXT,
    favicon_url TEXT,
    whatsapp_number VARCHAR(50) DEFAULT '+62 895-6390-68080',
    email VARCHAR(255) DEFAULT 'kontak@agensidigital.com',
    address TEXT,
    google_maps_url TEXT,
    social_links JSONB DEFAULT '{"instagram": "", "linkedin": "", "tiktok": "", "youtube": ""}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel Pages (Konten halaman statis dan CMS Halaman)
CREATE TABLE IF NOT EXISTS pages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content JSONB DEFAULT '{}'::jsonb,
    meta_title VARCHAR(255),
    meta_description TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 4. TABEL JASA AGENCY (SERVICES)
-- ==============================================================================

CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    short_description TEXT,
    full_description TEXT,
    icon VARCHAR(100),
    features JSONB DEFAULT '[]'::jsonb,
    benefits JSONB DEFAULT '[]'::jsonb,
    price_starting_at NUMERIC(15,2),
    status VARCHAR(50) DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
    sort_order INT DEFAULT 0,
    meta_title VARCHAR(255),
    meta_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 5. TABEL PROGRAM MAGANG
-- ==============================================================================

CREATE TABLE IF NOT EXISTS program_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    education_level VARCHAR(50) DEFAULT 'both' CHECK (education_level IN ('smk', 'mahasiswa', 'both')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS programs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES program_categories(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    education_level VARCHAR(50) NOT NULL CHECK (education_level IN ('smk', 'mahasiswa', 'both')),
    major VARCHAR(255) NOT NULL, -- e.g. 'RPL', 'TKJ', 'Multimedia', 'Informatika', 'Digital Marketing'
    description TEXT,
    learning_outcomes JSONB DEFAULT '[]'::jsonb,
    requirements JSONB DEFAULT '[]'::jsonb,
    duration VARCHAR(100) DEFAULT '3 - 6 Bulan',
    internship_mode VARCHAR(50) DEFAULT 'hybrid' CHECK (internship_mode IN ('onsite', 'hybrid', 'remote')),
    thumbnail TEXT,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'draft', 'archived')),
    sort_order INT DEFAULT 0,
    meta_title VARCHAR(255),
    meta_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS program_requirements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    program_id UUID NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
    requirement_text TEXT NOT NULL,
    is_mandatory BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 6. TABEL PENDAFTARAN (APPLICATIONS) & LOGS
-- ==============================================================================

CREATE TABLE IF NOT EXISTS applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    registration_number VARCHAR(100) UNIQUE,
    program_id UUID REFERENCES programs(id) ON DELETE RESTRICT,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    education_level VARCHAR(50) NOT NULL CHECK (education_level IN ('smk', 'mahasiswa')),
    institution VARCHAR(255) NOT NULL,
    major VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    duration VARCHAR(50) NOT NULL,
    internship_mode VARCHAR(50) NOT NULL DEFAULT 'hybrid' CHECK (internship_mode IN ('onsite', 'hybrid', 'remote')),
    domicile TEXT,
    portfolio_url TEXT,
    resume_url TEXT,
    motivation TEXT NOT NULL,
    privacy_consent BOOLEAN NOT NULL DEFAULT false,
    status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interview', 'accepted', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pasang trigger auto-generate registration_number pada pendaftaran baru
DROP TRIGGER IF EXISTS trg_generate_application_registration_number ON applications;
CREATE TRIGGER trg_generate_application_registration_number
    BEFORE INSERT ON applications
    FOR EACH ROW
    WHEN (NEW.registration_number IS NULL OR NEW.registration_number = '')
    EXECUTE FUNCTION generate_application_registration_number();

-- Catatan Internal Admin untuk Setiap Pendaftaran
CREATE TABLE IF NOT EXISTS application_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
    author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    note TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Riwayat Perubahan Status Pendaftaran
CREATE TABLE IF NOT EXISTS application_status_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
    previous_status VARCHAR(50),
    new_status VARCHAR(50) NOT NULL,
    changed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    note TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 7. TABEL PORTOFOLIO & BLOG
-- ==============================================================================

CREATE TABLE IF NOT EXISTS portfolio_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS portfolios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES portfolio_categories(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    client_name VARCHAR(255),
    project_date DATE,
    description TEXT,
    results TEXT,
    thumbnail TEXT,
    gallery JSONB DEFAULT '[]'::jsonb,
    project_url TEXT,
    status VARCHAR(50) DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
    sort_order INT DEFAULT 0,
    meta_title VARCHAR(255),
    meta_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS post_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES post_categories(id) ON DELETE SET NULL,
    author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image TEXT,
    status VARCHAR(50) DEFAULT 'published' CHECK (status IN ('published', 'draft', 'archived')),
    meta_title VARCHAR(255),
    meta_description TEXT,
    canonical_url TEXT,
    og_image TEXT,
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 8. TABEL TESTIMONI, FAQ, KONTAK, MEDIA & SEO REDIRECTS
-- ==============================================================================

CREATE TABLE IF NOT EXISTS testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL, -- e.g. "Alumni Magang SMK RPL" / "Klien SEO Agency"
    institution_or_company VARCHAR(255),
    quote TEXT NOT NULL,
    avatar_url TEXT,
    rating INT DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
    type VARCHAR(50) DEFAULT 'intern' CHECK (type IN ('intern', 'client')),
    is_featured BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'internship' CHECK (category IN ('general', 'internship', 'agency')),
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    replied_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS media (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(100),
    file_size BIGINT,
    uploaded_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS seo_redirects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_path VARCHAR(255) NOT NULL UNIQUE,
    target_path VARCHAR(255) NOT NULL,
    status_code INT DEFAULT 301 CHECK (status_code IN (301, 302)),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- 9. TRIGGERS AUTO-UPDATE UPDATED_AT
-- ==============================================================================

DO $$
DECLARE
    tbl text;
BEGIN
    FOR tbl IN
        SELECT unnest(ARRAY[
            'profiles', 'site_settings', 'pages', 'services', 'program_categories',
            'programs', 'applications', 'portfolios', 'posts', 'testimonials', 'faqs'
        ])
    LOOP
        EXECUTE format('
            DROP TRIGGER IF EXISTS trg_update_%I_timestamp ON %I;
            CREATE TRIGGER trg_update_%I_timestamp
                BEFORE UPDATE ON %I
                FOR EACH ROW
                EXECUTE FUNCTION update_updated_at_column();
        ', tbl, tbl, tbl, tbl);
    END LOOP;
END;
$$;

-- ==============================================================================
-- 10. INDEX OPTIMISASI PERFORMA & PENCARIAN
-- ==============================================================================

CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_status ON services(status);

CREATE INDEX IF NOT EXISTS idx_programs_slug ON programs(slug);
CREATE INDEX IF NOT EXISTS idx_programs_status ON programs(status);
CREATE INDEX IF NOT EXISTS idx_programs_education_level ON programs(education_level);

CREATE INDEX IF NOT EXISTS idx_applications_reg_no ON applications(registration_number);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_program_id ON applications(program_id);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_status_published_at ON posts(status, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_portfolios_slug ON portfolios(slug);
CREATE INDEX IF NOT EXISTS idx_portfolios_status ON portfolios(status);

-- ==============================================================================
-- 11. ROW LEVEL SECURITY (RLS) & ACCESS CONTROL
-- ==============================================================================

-- Aktifkan RLS di semua tabel
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE application_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE application_status_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE seo_redirects ENABLE ROW LEVEL SECURITY;

-- Helper check apakah user adalah authenticated admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN (auth.role() = 'authenticated');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- --- ATURAN PROFILES ---
CREATE POLICY "Public profiles can be viewed by anyone"
    ON profiles FOR SELECT USING (true);
CREATE POLICY "Admin can update own profile"
    ON profiles FOR UPDATE USING (auth.uid() = id);

-- --- ATURAN KONTEN PUBLIK (Read-Only untuk Publik yang statusnya published/active) ---
CREATE POLICY "Public read site_settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Admin full site_settings" ON site_settings FOR ALL USING (is_admin());

CREATE POLICY "Public read published pages" ON pages FOR SELECT USING (is_published = true);
CREATE POLICY "Admin full pages" ON pages FOR ALL USING (is_admin());

CREATE POLICY "Public read published services" ON services FOR SELECT USING (status = 'published');
CREATE POLICY "Admin full services" ON services FOR ALL USING (is_admin());

CREATE POLICY "Public read program_categories" ON program_categories FOR SELECT USING (true);
CREATE POLICY "Admin full program_categories" ON program_categories FOR ALL USING (is_admin());

CREATE POLICY "Public read active programs" ON programs FOR SELECT USING (status = 'active');
CREATE POLICY "Admin full programs" ON programs FOR ALL USING (is_admin());

CREATE POLICY "Public read program_requirements" ON program_requirements FOR SELECT USING (true);
CREATE POLICY "Admin full program_requirements" ON program_requirements FOR ALL USING (is_admin());

CREATE POLICY "Public read portfolio_categories" ON portfolio_categories FOR SELECT USING (true);
CREATE POLICY "Admin full portfolio_categories" ON portfolio_categories FOR ALL USING (is_admin());

CREATE POLICY "Public read published portfolios" ON portfolios FOR SELECT USING (status = 'published');
CREATE POLICY "Admin full portfolios" ON portfolios FOR ALL USING (is_admin());

CREATE POLICY "Public read post_categories" ON post_categories FOR SELECT USING (true);
CREATE POLICY "Admin full post_categories" ON post_categories FOR ALL USING (is_admin());

CREATE POLICY "Public read published posts" ON posts FOR SELECT USING (status = 'published');
CREATE POLICY "Admin full posts" ON posts FOR ALL USING (is_admin());

CREATE POLICY "Public read active testimonials" ON testimonials FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full testimonials" ON testimonials FOR ALL USING (is_admin());

CREATE POLICY "Public read active faqs" ON faqs FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full faqs" ON faqs FOR ALL USING (is_admin());

CREATE POLICY "Public read active seo_redirects" ON seo_redirects FOR SELECT USING (is_active = true);
CREATE POLICY "Admin full seo_redirects" ON seo_redirects FOR ALL USING (is_admin());

-- --- ATURAN PENDAFTARAN & KONTAK (KRUSIAL: Privasi Tinggi) ---
-- 1. Publik / Anon HANYA BISA INSERT pendaftaran baru
CREATE POLICY "Public can insert applications"
    ON applications FOR INSERT
    WITH CHECK (true);

-- 2. Publik TIDAK BISA membaca data pendaftar (Hanya admin)
CREATE POLICY "Only admin can view applications"
    ON applications FOR SELECT
    USING (is_admin());

CREATE POLICY "Only admin can update applications"
    ON applications FOR UPDATE
    USING (is_admin());

CREATE POLICY "Only admin can delete applications"
    ON applications FOR DELETE
    USING (is_admin());

-- Catatan dan Log Pendaftaran hanya untuk admin
CREATE POLICY "Admin manage application notes" ON application_notes FOR ALL USING (is_admin());
CREATE POLICY "Admin manage application status logs" ON application_status_logs FOR ALL USING (is_admin());

-- Kontak: publik bisa insert, admin bisa baca/kelola
CREATE POLICY "Public can insert contact messages" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin manage contact messages" ON contact_messages FOR ALL USING (is_admin());

-- Media: publik bisa view, admin bisa upload/delete
CREATE POLICY "Public can view media" ON media FOR SELECT USING (true);
CREATE POLICY "Admin manage media" ON media FOR ALL USING (is_admin());

-- ==============================================================================
-- 12. SEED DATA AWAL (Pengaturan Default, Jasa, & Program Magang)
-- ==============================================================================

-- Site Settings awal
INSERT INTO site_settings (id, site_name, tagline, description, whatsapp_number)
VALUES (
    'a0000000-0000-0000-0000-000000000001',
    'DigiMagang & Digital Agency',
    'Bangun Skill Digital, Raih Pengalaman Profesional, dan Siapkan Masa Depan Kariermu',
    'Platform program magang siswa SMK dan mahasiswa serta penyedia solusi digital agency profesional berbasis proyek nyata.',
    '+62 895-6390-68080'
) ON CONFLICT (id) DO NOTHING;

-- Program Categories
INSERT INTO program_categories (name, slug, description, education_level)
VALUES 
    ('Teknologi & Rekayasa Perangkat Lunak', 'teknologi-rpl', 'Pengembangan web, software engineering, dan infrastruktur IT', 'both'),
    ('Desain Kreatif & Multimedia', 'desain-multimedia', 'UI/UX design, visual branding, multimedia, dan konten kreatif', 'both'),
    ('Pemasaran & Bisnis Digital', 'bisnis-digital', 'SEO, social media marketing, strategi pertumbuhan, dan manajemen bisnis', 'both')
ON CONFLICT (slug) DO NOTHING;

-- Program Magang Inti (Contoh Seed dari PRD)
INSERT INTO programs (title, slug, education_level, major, description, duration, internship_mode, status, sort_order)
VALUES
    ('Magang Web Development (RPL / Informatika)', 'magang-web-development', 'both', 'RPL & Informatika', 'Membangun aplikasi web interaktif modern menggunakan React, Node.js, dan database PostgreSQL.', '3 - 6 Bulan', 'hybrid', 'active', 1),
    ('Magang UI/UX & Graphic Design', 'magang-ui-ux-design', 'both', 'DKV & Multimedia', 'Merancang antarmuka pengguna responsif, wireframing di Figma, prototyping, dan aset grafis brand digital.', '3 - 6 Bulan', 'hybrid', 'active', 2),
    ('Magang Digital Marketing & SEO Specialist', 'magang-digital-marketing-seo', 'both', 'Bisnis Digital & Manajemen', 'Praktik langsung optimasi mesin pencari (SEO), audit website, content marketing, dan manajemen media sosial bisnis.', '3 - 6 Bulan', 'hybrid', 'active', 3),
    ('Magang Jaringan & IT Support (TKJ)', 'magang-tkj-it-support', 'smk', 'TKJ & Sistem Informasi', 'Instalasi, konfigurasi jaringan, manajemen server hosting, dan pemeliharaan sistem komputer perusahaan.', '3 - 6 Bulan', 'onsite', 'active', 4)
ON CONFLICT (slug) DO NOTHING;

-- Jasa Digital Agency (Contoh Seed dari PRD)
INSERT INTO services (title, slug, short_description, icon, status, sort_order)
VALUES
    ('Digital Marketing', 'digital-marketing', 'Strategi pemasaran online terpadu untuk mendatangkan leads potensial dan penjualan.', 'bi-bullseye', 'published', 1),
    ('SEO Website', 'seo-website', 'Optimasi peringkat mesin pencari Google agar website Anda mudah ditemukan target pasar secara organik.', 'bi-graph-up-arrow', 'published', 2),
    ('Social Media Management', 'social-media-management', 'Pengelolaan konten, penjadwalan, copy writing, dan visual feed Instagram, TikTok, & LinkedIn bisnis.', 'bi-instagram', 'published', 3),
    ('Web Development', 'web-development', 'Pembuatan website profesional cepat, mobile-friendly, dan ramah SEO untuk profil bisnis maupun e-commerce.', 'bi-code-slash', 'published', 4),
    ('UI/UX Design', 'ui-ux-design', 'Desain tampilan antarmuka dan pengalaman pengguna yang intuitif, modern, dan conversion-focused.', 'bi-palette', 'published', 5),
    ('Multimedia & Content Creation', 'multimedia', 'Produksi video promosi, reels, motion graphic, dan materi visual berkualitas tinggi untuk kampanye brand.', 'bi-camera-video', 'published', 6)
ON CONFLICT (slug) DO NOTHING;

-- FAQs Awal
INSERT INTO faqs (question, answer, category, sort_order)
VALUES
    ('Apakah program magang ini terbuka untuk siswa SMK dan mahasiswa?', 'Ya, program ini dirancang secara khusus untuk siswa SMK jurusan RPL, TKJ, DKV, Multimedia serta mahasiswa jurusan Informatika, Sistem Informasi, Bisnis Digital, dan Manajemen Pemasaran.', 'internship', 1),
    ('Bagaimana sistem pelaksanaan magang (Online atau Offline)?', 'Kami menyediakan mode pelaksanaan Hybrid (kombinasi onsite dan remote) serta Onsite penuh sesuai dengan kebutuhan divisi dan kesepakatan sekolah/kampus.', 'internship', 2),
    ('Apakah peserta magang mendapatkan sertifikat resmi?', 'Ya, seluruh peserta yang berhasil menyelesaikan periode magang dengan baik akan mendapatkan sertifikat resmi dan penilaian performa magang.', 'internship', 3),
    ('Bagaimana cara mendaftar program magang?', 'Anda cukup mengisi formulir pada halaman Pendaftaran di website ini, melampirkan informasi asal sekolah/kampus, dan memilih bidang yang diminati.', 'internship', 4)
ON CONFLICT DO NOTHING;

