# PRODUCT REQUIREMENT DOCUMENT (PRD)
# Platform Program Magang SMK & Mahasiswa + Digital Agency

**Versi:** 1.0  
**Tanggal dokumen:** 10 November 2026  
**Bahasa:** Indonesia  
**Status:** Draft kebutuhan produk  
**Stack utama:** React + React Router Framework Mode + Bootstrap + CSS + Supabase  
**Nomor WhatsApp CTA:** +62 895-6390-68080

> **Catatan tanggal dan validasi:** Dokumen ini disusun dengan tanggal acuan 10 November 2026. Detail teknologi, kebijakan Google Search, nilai schema, dan fitur produk pihak ketiga harus diverifikasi kembali terhadap dokumentasi resmi saat implementasi. Jangan menganggap contoh schema sebagai jaminan rich result atau peringkat Google.

---

# 1. Ringkasan Produk

Website ini merupakan platform informasi, promosi, dan pendaftaran program magang bagi siswa SMK dan mahasiswa, sekaligus website pemasaran jasa digital agency.

Platform memiliki tiga fungsi utama:

1. **Internship Platform:** Menyediakan informasi program magang untuk siswa SMK dan mahasiswa, khususnya bidang teknologi, kreatif, dan bisnis.
2. **Digital Agency Website:** Memasarkan jasa Digital Marketing, SEO, Social Media Management, Web Development, UI/UX Design, Graphic Design, Multimedia, dan layanan terkait.
3. **Lead Generation & Semi-CMS:** Mengumpulkan pendaftaran calon peserta magang melalui Supabase serta memungkinkan admin mengelola konten website melalui dashboard.

Prinsip pengembangan:

- SEO-first.
- Performance-first.
- Mobile-first.
- Security-by-design.
- Konten dapat dikelola admin.
- Struktur komponen reusable.
- Pengalaman pendaftaran sederhana.
- Semua CTA kontak diarahkan ke WhatsApp bisnis.

## 1.1 Tujuan bisnis

- Mendapatkan calon peserta magang melalui website.
- Meningkatkan visibilitas organik melalui Google.
- Memperkenalkan jasa digital agency kepada calon klien.
- Membangun kredibilitas melalui portofolio, artikel, dan informasi program.
- Mempermudah pengelolaan konten dan pendaftaran.
- Mengubah pengunjung menjadi leads melalui WhatsApp.

## 1.2 Target pengguna

| Persona | Kebutuhan |
|---|---|
| Siswa SMK | Mencari tempat PKL/magang sesuai jurusan |
| Mahasiswa | Mencari program magang sesuai jurusan kuliah |
| Guru pembimbing | Mencari mitra tempat PKL untuk siswa |
| Dosen/kampus | Mencari mitra magang mahasiswa |
| Perusahaan/UMKM | Mencari jasa digital marketing dan web development |
| Admin | Mengelola konten, program, dan pendaftaran |

## 1.3 Bidang sasaran

### SMK
- Rekayasa Perangkat Lunak (RPL).
- Teknik Komputer dan Jaringan (TKJ).
- Multimedia.
- Desain Komunikasi Visual (DKV).

### Mahasiswa
- Informatika.
- Teknik Informatika.
- Sistem Informasi.
- Bisnis Digital.
- Digital Marketing.
- Manajemen Pemasaran.
- Pemasaran.

---

# 2. Struktur Website dan Sitemap

## 2.1 Navigasi utama

1. Beranda
2. Tentang Kami
3. Jasa
   - Digital Marketing
   - SEO Website
   - Social Media Management
   - Web Development
   - UI/UX Design
   - Graphic Design
   - Multimedia & Content Creation
   - Branding
4. Program Magang
   - Informasi Magang
   - Magang SMK
   - Magang Mahasiswa
   - Magang Informatika
   - Magang Digital Marketing
   - Magang Bisnis Digital
   - Magang RPL
   - Magang TKJ
   - Magang Multimedia
   - Magang DKV
5. Portofolio
6. Blog
   - Daftar Artikel
   - Kategori Artikel
   - Detail Artikel
7. Pendaftaran Magang
8. Kontak Kami

Admin dashboard merupakan area privat dan tidak boleh diindeks mesin pencari.

## 2.2 Rekomendasi URL

| Halaman | URL |
|---|---|
| Beranda | `/` |
| Tentang Kami | `/tentang-kami` |
| Daftar jasa | `/jasa` |
| Digital Marketing | `/jasa/digital-marketing` |
| SEO | `/jasa/seo-website` |
| Social Media | `/jasa/social-media-management` |
| Web Development | `/jasa/web-development` |
| UI/UX Design | `/jasa/ui-ux-design` |
| Graphic Design | `/jasa/graphic-design` |
| Multimedia | `/jasa/multimedia` |
| Program Magang | `/program-magang` |
| Informasi Magang | `/program-magang/informasi` |
| Magang SMK | `/program-magang/smk` |
| Magang Mahasiswa | `/program-magang/mahasiswa` |
| Magang Informatika | `/program-magang/informatika` |
| Magang Digital Marketing | `/program-magang/digital-marketing` |
| Magang Bisnis Digital | `/program-magang/bisnis-digital` |
| Magang RPL | `/program-magang/rpl` |
| Magang TKJ | `/program-magang/tkj` |
| Magang Multimedia | `/program-magang/multimedia` |
| Magang DKV | `/program-magang/dkv` |
| Portofolio | `/portofolio` |
| Detail portofolio | `/portofolio/:slug` |
| Blog | `/blog` |
| Detail artikel | `/blog/:slug` |
| Pendaftaran | `/pendaftaran` |
| Kontak | `/kontak` |
| Login admin | `/admin/login` |
| Dashboard admin | `/admin` |

**Aturan URL dan konten:**
- Gunakan slug lowercase dan tanda hubung.
- Slug harus unik.
- Hindari parameter yang tidak perlu untuk halaman indeks.
- Setiap halaman program wajib mempunyai informasi yang unik dan bermanfaat.
- Jangan membuat banyak halaman tipis yang hanya mengganti nama jurusan.
- Jika slug berubah, buat redirect 301 dari URL lama.
- Halaman draft, privat, dan admin tidak boleh masuk sitemap.

---

# 3. Spesifikasi Halaman Publik

## 3.1 Beranda

**Tujuan:** Memperkenalkan program magang dan jasa digital agency, lalu mengarahkan pengunjung ke pendaftaran atau konsultasi.

Urutan komponen yang direkomendasikan:

1. Navbar dengan dropdown.
2. Hero section.
3. CTA Daftar Magang dan Konsultasi WhatsApp.
4. Ringkasan program magang.
5. Kategori jenjang dan bidang.
6. Keunggulan program.
7. Kompetensi yang dipelajari.
8. Layanan digital agency.
9. Portofolio pilihan.
10. Testimoni peserta/klien yang autentik.
11. Artikel terbaru.
12. FAQ.
13. CTA akhir.
14. Footer.

Contoh headline:

> **Bangun Skill Digital, Raih Pengalaman Profesional, dan Siapkan Masa Depan Kariermu.**

Contoh subheadline:

> Program magang untuk siswa SMK dan mahasiswa di bidang teknologi, digital marketing, bisnis digital, serta industri kreatif melalui pengalaman belajar berbasis proyek.

CTA:
- Daftar Program Magang.
- Konsultasi via WhatsApp.

Jangan menampilkan angka peserta, jumlah klien, tingkat keberhasilan, atau testimoni yang belum dapat dibuktikan.

## 3.2 Tentang Kami

Konten:
- Profil perusahaan.
- Latar belakang.
- Visi dan misi.
- Tujuan program magang.
- Metode pembelajaran.
- Mentor dan tim.
- Dokumentasi kegiatan.
- Kontak dan lokasi.

Seluruh konten yang bersifat rutin diperbarui harus dapat dikelola melalui CMS.

## 3.3 Halaman jasa

Setiap layanan memiliki halaman detail tersendiri.

| Layanan | Isi utama |
|---|---|
| Digital Marketing | Strategi pemasaran digital, campaign, analytics |
| SEO Website | Technical SEO, on-page SEO, riset keyword |
| Social Media Management | Strategi konten, kalender konten, pengelolaan akun |
| Web Development | Company profile, landing page, aplikasi web |
| UI/UX Design | Wireframe, prototyping, user research |
| Graphic Design | Desain visual dan branding |
| Multimedia | Video editing, motion graphic, konten digital |
| Branding | Identitas visual dan strategi brand |

Struktur detail layanan:
1. Hero dan deskripsi.
2. Masalah yang diselesaikan.
3. Ruang lingkup layanan.
4. Proses kerja.
5. Portofolio relevan.
6. FAQ.
7. CTA konsultasi WhatsApp.

Jangan mencantumkan harga, garansi, hasil, atau jangka waktu yang belum ditetapkan secara nyata.

## 3.4 Halaman program magang

Halaman ini merupakan bagian utama platform.

### A. Program Magang SMK

Target jurusan:
- Rekayasa Perangkat Lunak (RPL).
- Teknik Komputer dan Jaringan (TKJ).
- Multimedia.
- Desain Komunikasi Visual (DKV).

### B. Program Magang Mahasiswa

Target jurusan:
- Informatika.
- Teknik Informatika.
- Sistem Informasi.
- Bisnis Digital.
- Digital Marketing.
- Manajemen Pemasaran.
- Pemasaran.

### C. Aktivitas pembelajaran per bidang

| Bidang | Contoh aktivitas |
|---|---|
| Informatika | Programming, database, software development |
| RPL | Website development, testing, UI implementation |
| TKJ | Networking, troubleshooting, basic server |
| Multimedia | Video editing, content production |
| DKV | Graphic design, branding, visual communication |
| Digital Marketing | Campaign, SEO, digital advertising |
| Bisnis Digital | Business analysis, digital strategy |
| Pemasaran | Market research, marketing strategy |

Setiap halaman program perlu menampilkan:
- Deskripsi program.
- Target peserta.
- Kompetensi yang dipelajari.
- Aktivitas harian atau mingguan.
- Persyaratan.
- Durasi magang.
- Metode pelaksanaan: onsite, hybrid, atau remote jika tersedia.
- Alur pendaftaran.
- FAQ.
- CTA pendaftaran.

Durasi, metode, fasilitas, mentor, sertifikat, uang saku, dan fasilitas lain hanya boleh dipublikasikan jika telah dipastikan oleh penyelenggara.

## 3.5 Portofolio

Fitur:
- Daftar proyek.
- Filter kategori.
- Detail proyek.
- Thumbnail.
- Deskripsi proyek.
- Teknologi yang digunakan.
- Galeri hasil.
- Link demo atau website jika tersedia.

Kategori:
- Website Development.
- Digital Marketing.
- SEO.
- Social Media.
- Graphic Design.
- Multimedia.
- UI/UX Design.

Admin dapat membuat, mengubah, menerbitkan, mengarsipkan, dan menghapus portofolio.

## 3.6 Blog

Fitur:
- Daftar artikel.
- Kategori artikel.
- Pencarian artikel.
- Artikel unggulan.
- Detail artikel.
- Gambar thumbnail.
- Daftar isi (Table of Contents).
- Artikel terkait.
- Penulis.
- Tanggal publikasi dan modifikasi.
- Meta title dan meta description.
- Slug.
- Status draft, published, archived.

Kategori awal:
1. Informasi Magang.
2. Tips Karier.
3. Informatika.
4. Digital Marketing.
5. SEO.
6. Bisnis Digital.
7. Desain Grafis.
8. Multimedia.
9. Pengembangan Website.

Editor konten sebaiknya mendukung heading, paragraf, list, link, gambar, caption, tabel, dan alt text.

## 3.7 Halaman pendaftaran

**URL:** `/pendaftaran`

Formulir terhubung ke Supabase dan harus nyaman digunakan melalui ponsel.

### Field formulir

| Field | Tipe | Wajib |
|---|---|---|
| Nama lengkap | Text | Ya |
| Email | Email | Ya |
| Nomor WhatsApp | Tel | Ya |
| Jenjang pendidikan | Select | Ya |
| Asal sekolah/kampus | Text | Ya |
| Jurusan | Select/dinamis | Ya |
| Program magang | Select | Ya |
| Tanggal mulai | Date | Ya |
| Durasi magang | Select | Ya |
| Mode magang | Select | Ya |
| Alamat domisili | Textarea | Tidak |
| Link CV/portofolio | URL | Tidak |
| Motivasi | Textarea | Ya |
| Persetujuan privasi | Checkbox | Ya |

### Logika formulir

1. Pengunjung memilih jenjang pendidikan.
2. Sistem menampilkan jurusan sesuai jenjang.
3. Pengunjung memilih program magang.
4. Pengunjung mengisi data pribadi.
5. Sistem memvalidasi data di frontend dan backend.
6. Sistem menyimpan data melalui endpoint/operasi yang aman ke Supabase.
7. Sistem menghasilkan nomor registrasi unik.
8. Sistem menampilkan konfirmasi pendaftaran.
9. Pengunjung dapat menekan tombol konfirmasi WhatsApp.

### Status pendaftaran

- `pending`
- `reviewing`
- `accepted`
- `rejected`
- `withdrawn`

Admin dapat mengubah status dan menambahkan catatan internal.

**Privasi:** Data pendaftar tidak boleh ditampilkan kepada publik. Nomor registrasi bukan mekanisme autentikasi. Jika dibuat halaman pengecekan status, gunakan token acak yang aman atau mekanisme autentikasi, bukan hanya nomor registrasi.

### Validasi dan anti-spam

- Validasi format email dan nomor telepon.
- Validasi panjang teks.
- Validasi program yang dipilih masih aktif.
- Validasi tanggal mulai sesuai ketentuan program.
- Batasi frekuensi pengiriman.
- Gunakan CAPTCHA jika diperlukan.
- Terapkan validasi server-side.
- Cegah duplikasi atau pengiriman berulang sesuai kebijakan bisnis.
- Jangan menyimpan data sensitif yang tidak diperlukan.

## 3.8 Integrasi WhatsApp seluruh CTA

Nomor tujuan:

**+62 895-6390-68080**

URL:

`https://wa.me/62895639068080`

Contoh pesan:

`https://wa.me/62895639068080?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20program%20magang.`

Pesan berdasarkan halaman:

| Halaman | Pesan |
|---|---|
| Beranda | Saya ingin mengetahui program magang |
| Magang SMK | Saya ingin mendaftar magang SMK |
| Magang mahasiswa | Saya ingin mendaftar magang mahasiswa |
| Digital Marketing | Saya ingin konsultasi jasa digital marketing |
| Web Development | Saya ingin konsultasi pembuatan website |
| SEO | Saya ingin konsultasi SEO |

Gunakan satu helper/function reusable untuk membuat link WhatsApp. Nomor telepon sebaiknya disimpan dalam pengaturan website agar dapat diubah admin.

Contoh helper:

```js
export function createWhatsAppUrl(message, phone = "62895639068080") {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

---

# 4. Teknologi dan Arsitektur Sistem

## 4.1 Technology stack

| Komponen | Teknologi |
|---|---|
| Frontend | React |
| Routing/rendering | React Router Framework Mode |
| SEO rendering | SSR + static prerender |
| CSS framework | Bootstrap 5 |
| Custom styling | CSS |
| Icon | Bootstrap Icons |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth |
| File storage | Supabase Storage |
| Backend logic | Supabase Edge Functions |
| Form validation | Zod |
| Form handling | React Hook Form |
| SEO metadata | Route-level metadata |
| Structured data | Schema.org JSON-LD |
| Analytics | Google Analytics 4 |
| Search performance | Google Search Console |
| Version control | Git + GitHub |
| Hosting | Platform yang mendukung SSR dan deployment React |

### Catatan arsitektur SEO

React SPA biasa yang hanya mengirim HTML kosong dan mengandalkan JavaScript client-side bukan pilihan ideal jika SEO menjadi prioritas utama.

Gunakan React dengan framework/routing yang mendukung:
- Server-side rendering (SSR) untuk halaman dinamis.
- Static prerendering untuk halaman yang stabil.
- Metadata per route.
- HTML awal yang sudah berisi konten.
- Rendering schema JSON-LD pada HTML awal.

Pilih hosting yang mendukung runtime SSR. Jika menggunakan static hosting saja, pastikan strategi prerendering seluruh halaman penting telah diuji.

## 4.2 Arsitektur tingkat tinggi

```text
Pengunjung
    |
    v
Browser Desktop / Mobile
    |
    v
React + React Router
    |
    +-----------------------+
    |                       |
    v                       v
Public Website          Admin Dashboard
    |                       |
    +-----------+-----------+
                |
                v
       Supabase Client/API
                |
       +--------+---------+
       |        |         |
       v        v         v
   PostgreSQL  Auth     Storage
       |
       v
  Edge Functions
       |
       +------> Validasi pendaftaran
       +------> Operasi server yang aman
       +------> Integrasi eksternal bila dibutuhkan

External:
- WhatsApp
- Google Analytics
- Google Search Console
```

## 4.3 Prinsip performa

Target:
- LCP ≤ 2,5 detik.
- INP ≤ 200 ms.
- CLS ≤ 0,1.
- Lighthouse Performance ≥ 90 sebagai target pengujian.
- Lighthouse SEO ≥ 95 sebagai target pengujian.
- Lighthouse Accessibility ≥ 90 sebagai target pengujian.
- Lighthouse Best Practices ≥ 90 sebagai target pengujian.

Core Web Vitals dinilai berdasarkan pengalaman pengguna lapangan pada persentil ke-75, bukan hanya satu pengujian Lighthouse.

Optimasi:
- SSR untuk halaman dinamis.
- Prerender untuk halaman statis yang stabil.
- Lazy loading gambar di bawah fold.
- Gunakan WebP atau AVIF.
- Gunakan `srcset` dan ukuran gambar responsif.
- Optimalkan font dan font-display.
- Hindari library JavaScript yang tidak diperlukan.
- Hindari animasi berat.
- Pagination untuk blog dan portofolio.
- Cache aset statis dan halaman yang aman untuk dicache.
- Index database pada kolom pencarian/filter penting.
- Kompres gambar sebelum upload.
- Ambil data sesuai kebutuhan halaman.
- Hindari layout shift dengan menetapkan dimensi gambar/media.

---

# 5. Database Design Supabase

## 5.1 Daftar tabel

| Tabel | Fungsi |
|---|---|
| `profiles` | Profil akun admin/editor |
| `site_settings` | Identitas dan pengaturan website |
| `pages` | Halaman statis dan konten halaman |
| `services` | Data jasa |
| `programs` | Program magang |
| `program_categories` | Kategori jurusan/bidang |
| `program_requirements` | Persyaratan program |
| `applications` | Data pendaftaran |
| `application_notes` | Catatan internal admin |
| `application_status_logs` | Riwayat perubahan status |
| `portfolios` | Data portofolio |
| `portfolio_categories` | Kategori portofolio |
| `posts` | Artikel blog |
| `post_categories` | Kategori artikel |
| `media` | Metadata file media |
| `testimonials` | Testimoni |
| `faqs` | Pertanyaan dan jawaban |
| `contact_messages` | Pesan pengunjung |
| `seo_redirects` | Redirect 301 |

## 5.2 Kolom inti tabel `applications`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | UUID | Primary key |
| `registration_number` | VARCHAR | Nomor registrasi unik |
| `full_name` | VARCHAR | Nama lengkap |
| `email` | VARCHAR | Email |
| `phone` | VARCHAR | Nomor WhatsApp |
| `education_level` | VARCHAR | SMK/perguruan tinggi |
| `institution` | VARCHAR | Sekolah/kampus |
| `major` | VARCHAR | Jurusan |
| `program_id` | UUID | Foreign key program |
| `start_date` | DATE | Tanggal mulai |
| `duration` | VARCHAR | Durasi |
| `internship_mode` | VARCHAR | Mode magang |
| `domicile` | TEXT | Domisili opsional |
| `portfolio_url` | TEXT | URL portofolio opsional |
| `motivation` | TEXT | Motivasi |
| `privacy_consent` | BOOLEAN | Persetujuan privasi |
| `status` | VARCHAR | Status pendaftaran |
| `created_at` | TIMESTAMPTZ | Waktu dibuat |
| `updated_at` | TIMESTAMPTZ | Waktu diperbarui |

## 5.3 Kolom inti tabel `posts`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | UUID | Primary key |
| `title` | VARCHAR | Judul |
| `slug` | VARCHAR | Unique |
| `excerpt` | TEXT | Ringkasan |
| `content` | JSONB | Konten terstruktur |
| `featured_image` | TEXT | Gambar utama |
| `category_id` | UUID | Kategori |
| `author_id` | UUID | Penulis |
| `status` | VARCHAR | Draft/published/archived |
| `meta_title` | VARCHAR | SEO title |
| `meta_description` | VARCHAR | SEO description |
| `canonical_url` | TEXT | Canonical opsional |
| `og_image` | TEXT | Open Graph image |
| `published_at` | TIMESTAMPTZ | Waktu publikasi |
| `created_at` | TIMESTAMPTZ | Waktu dibuat |
| `updated_at` | TIMESTAMPTZ | Waktu diperbarui |

## 5.4 Kolom inti tabel `programs`

| Kolom | Tipe | Keterangan |
|---|---|---|
| `id` | UUID | Primary key |
| `title` | VARCHAR | Nama program |
| `slug` | VARCHAR | Unique |
| `education_level` | VARCHAR | SMK/mahasiswa |
| `major` | VARCHAR | Bidang/jurusan |
| `description` | TEXT | Deskripsi |
| `learning_outcomes` | JSONB | Kompetensi |
| `requirements` | JSONB | Persyaratan |
| `duration` | VARCHAR | Durasi |
| `internship_mode` | VARCHAR | Mode pelaksanaan |
| `thumbnail` | TEXT | Gambar |
| `status` | VARCHAR | Draft/active/archived |
| `meta_title` | VARCHAR | SEO title |
| `meta_description` | VARCHAR | SEO description |
| `created_at` | TIMESTAMPTZ | Waktu dibuat |
| `updated_at` | TIMESTAMPTZ | Waktu diperbarui |

## 5.5 Relasi utama

```text
programs (1) -------- (N) applications
applications (1) ---- (N) application_notes
applications (1) ---- (N) application_status_logs

post_categories (1) - (N) posts
portfolio_categories (1) - (N) portfolios

profiles (1) -------- (N) posts
profiles (1) -------- (N) application_notes
```

## 5.6 Index dan constraint

Index yang direkomendasikan:
- Unique index pada `posts.slug`.
- Unique index pada `programs.slug`.
- Unique index pada `services.slug`.
- Unique index pada `portfolios.slug`.
- Unique index pada `applications.registration_number`.
- Index pada `applications.status`.
- Index pada `applications.created_at`.
- Index pada `applications.program_id`.
- Index pada `posts.status` dan `posts.published_at`.
- Index pada `programs.status`.

Gunakan foreign key dengan kebijakan penghapusan yang tepat. Untuk data pendaftaran dan riwayat, hindari cascade delete yang dapat menghapus catatan penting tanpa sengaja.

## 5.7 Keamanan Supabase

Wajib:
- Aktifkan Row Level Security (RLS) pada semua tabel yang terekspos.
- Atur grants/privileges dengan prinsip least privilege.
- Pengunjung anonim hanya dapat membaca konten published/active.
- Pengunjung hanya boleh mengirim pendaftaran melalui operasi insert yang dibatasi.
- Pengunjung tidak boleh membaca daftar pendaftar.
- Hanya admin berwenang dapat membaca/mengelola pendaftaran.
- Admin login menggunakan Supabase Auth.
- Peran diverifikasi melalui mekanisme RBAC yang aman.
- Jangan pernah mengekspos `service_role` key ke browser.
- Batasi ukuran dan MIME type file upload.
- Simpan CV/dokumen pada bucket privat jika diperlukan.
- Gunakan signed URL dengan masa berlaku terbatas untuk dokumen privat.
- Validasi data di server.
- Terapkan anti-spam/rate limiting.
- Catat perubahan status penting.
- Jangan menyimpan data pribadi yang tidak diperlukan.

**Peringatan:** RLS tidak menggantikan pengaturan grants. Periksa grants dan privilege schema/tabel yang terekspos sesuai dokumentasi Supabase terbaru.

---

# 6. SEO Strategy — November 2026

## 6.1 Tujuan SEO

- Mendapatkan trafik organik dari pencarian program magang.
- Menjangkau pencari PKL SMK dan magang mahasiswa.
- Menjangkau calon pelanggan jasa digital agency.
- Membangun topical authority melalui artikel.
- Meningkatkan leads dan pendaftaran dari pencarian organik.

## 6.2 Kelompok keyword awal

Daftar ini merupakan target riset awal, bukan klaim volume pencarian, tingkat persaingan, atau jaminan ranking. Validasi menggunakan Google Keyword Planner, Search Console, dan analisis SERP sebelum produksi konten.

### A. Keyword program magang

| Keyword | Halaman target |
|---|---|
| Tempat magang mahasiswa | `/program-magang/mahasiswa` |
| Tempat PKL SMK | `/program-magang/smk` |
| Magang informatika | `/program-magang/informatika` |
| Magang teknik informatika | `/program-magang/informatika` |
| Magang digital marketing | `/program-magang/digital-marketing` |
| Magang bisnis digital | `/program-magang/bisnis-digital` |
| Magang RPL | `/program-magang/rpl` |
| Magang TKJ | `/program-magang/tkj` |
| Magang multimedia | `/program-magang/multimedia` |
| Magang DKV | `/program-magang/dkv` |

### B. Keyword jasa

| Keyword | Halaman target |
|---|---|
| Jasa digital marketing | `/jasa/digital-marketing` |
| Jasa SEO website | `/jasa/seo-website` |
| Jasa social media management | `/jasa/social-media-management` |
| Jasa pembuatan website | `/jasa/web-development` |
| Jasa web development | `/jasa/web-development` |
| Jasa desain grafis | `/jasa/graphic-design` |

### C. Keyword informational/blog

| Keyword/tema | Ide artikel |
|---|---|
| Apa itu magang mahasiswa | Panduan magang untuk mahasiswa |
| Apa itu PKL SMK | Panduan PKL untuk siswa SMK |
| Tugas anak RPL saat magang | Contoh pekerjaan magang RPL |
| Skill digital marketing | Skill yang harus dikuasai |
| Portofolio mahasiswa informatika | Cara membuat portofolio |
| Perbedaan RPL dan TKJ | Panduan memilih bidang magang |
| Persiapan magang DKV | Skill desain sebelum magang |

## 6.3 On-page SEO

Setiap halaman harus mempunyai:
- Satu H1 utama yang jelas.
- Title tag unik.
- Meta description unik.
- URL deskriptif.
- Canonical URL.
- Open Graph metadata.
- Breadcrumb yang terlihat.
- Internal linking kontekstual.
- Gambar dengan alt text deskriptif.
- Konten orisinal dan bermanfaat.
- Heading H2/H3 yang terstruktur.
- Informasi penulis/reviewer bila relevan.
- Tanggal publikasi dan pembaruan yang jujur.

Contoh halaman magang mahasiswa:

**Title:**
`Program Magang Mahasiswa Informatika & Digital | Nama Brand`

**Meta description:**
`Temukan program magang mahasiswa di bidang informatika, digital marketing, bisnis digital, dan teknologi. Pelajari kompetensi dan cara pendaftarannya.`

**H1:**
`Program Magang Mahasiswa Bidang Informatika dan Digital`

**Slug:**
`/program-magang/mahasiswa`

## 6.4 Technical SEO

| Elemen | Implementasi |
|---|---|
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |
| Canonical | Per URL |
| Redirect | 301 |
| Error page | HTTP 404 yang benar |
| HTTPS | Wajib |
| Mobile friendly | Wajib |
| Structured Data | JSON-LD |
| Breadcrumb | Halaman turunan |
| Pagination | URL dan canonical konsisten |
| Image SEO | Alt, WebP/AVIF |
| Crawl control | Robots meta |
| Index control | Draft dan admin noindex |

Ketentuan:
- Sitemap hanya memuat URL canonical yang dapat diindeks.
- Halaman draft tidak masuk sitemap.
- Halaman admin/login diberi `noindex`.
- Jangan memblokir halaman yang perlu dirayapi melalui robots.txt hanya untuk menyembunyikannya.
- Gunakan 404/410 untuk konten yang benar-benar tidak tersedia.
- Gunakan 301 jika URL dipindahkan permanen.
- Jangan mengarahkan semua URL yang dihapus ke beranda.
- Pastikan canonical tidak menunjuk ke URL yang salah.
- Hindari duplikasi URL dengan trailing slash/parameter yang tidak konsisten.

## 6.5 Content SEO

Rekomendasi awal: empat artikel per bulan:
- Dua artikel program magang.
- Satu artikel teknologi/kompetensi.
- Satu artikel digital marketing/SEO.

### Topic cluster

**Pillar:** Panduan Program Magang

Cluster:
- Magang SMK: PKL RPL, TKJ, Multimedia, DKV.
- Magang Mahasiswa: Informatika, Bisnis Digital, Pemasaran.
- Persiapan Magang: CV, portofolio, wawancara.
- Pengalaman Magang: proyek, kompetensi, laporan.

Artikel harus saling terhubung secara kontekstual ke halaman program terkait. Jangan membuat artikel hanya untuk memasukkan keyword.

## 6.6 Local SEO

Jika bisnis mempunyai lokasi operasional yang benar-benar digunakan:
- Buat Google Business Profile jika memenuhi kelayakan.
- Konsistenkan nama, alamat, dan nomor telepon.
- Tambahkan foto lokasi dan aktivitas asli.
- Buat halaman kontak yang informatif.
- Cantumkan jam operasional yang benar.
- Kumpulkan ulasan autentik.
- Jangan mengarang alamat, lokasi, atau ulasan.

---

# 7. Structured Data Schema.org JSON-LD

## 7.1 Prinsip implementasi

- Gunakan JSON-LD.
- Markup harus sesuai dengan konten yang terlihat.
- Gunakan URL canonical yang konsisten.
- Gunakan `@id` yang stabil untuk entitas.
- Ambil data dinamis dari CMS/database.
- Jangan menambahkan rating, harga, alamat, atau tanggal palsu.
- Jangan menandai konten tersembunyi atau tidak relevan.
- Validasi menggunakan Schema.org Validator dan Google Rich Results Test.
- Schema.org valid tidak otomatis berarti Google menampilkan rich result.

## 7.2 Pemetaan schema

| Halaman | Schema yang disarankan |
|---|---|
| Beranda | Organization + WebSite + WebPage |
| Tentang | AboutPage/WebPage + BreadcrumbList |
| Daftar jasa | CollectionPage/WebPage |
| Detail jasa | Service + WebPage + BreadcrumbList |
| Daftar program | CollectionPage/WebPage |
| Detail program | WebPage + BreadcrumbList |
| Portofolio | CollectionPage/WebPage |
| Detail portofolio | CreativeWork/WebPage |
| Blog | Blog + CollectionPage |
| Detail artikel | BlogPosting + BreadcrumbList |
| Kontak | ContactPage + Organization |
| Pendaftaran | WebPage |

FAQPage bukan prioritas untuk rich results Google. JobPosting hanya digunakan untuk lowongan pekerjaan yang benar-benar memenuhi kebijakan Google, bukan untuk semua program pendidikan/magang.

## 7.3 Organization Schema

Pasang pada beranda. Ganti placeholder dengan informasi bisnis yang benar.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.domainanda.com/#organization",
  "name": "NAMA BRAND",
  "url": "https://www.domainanda.com/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.domainanda.com/images/logo.png",
    "width": 512,
    "height": 512
  },
  "description": "Penyedia program magang SMK dan mahasiswa serta layanan digital agency.",
  "telephone": "+62895639068080",
  "sameAs": [
    "https://www.instagram.com/USERNAME/",
    "https://www.linkedin.com/company/USERNAME/"
  ]
}
```

Hanya masukkan profil sosial resmi yang benar-benar dimiliki. Jika belum tersedia, hilangkan `sameAs`.

## 7.4 WebSite Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.domainanda.com/#website",
  "url": "https://www.domainanda.com/",
  "name": "NAMA BRAND",
  "publisher": {
    "@id": "https://www.domainanda.com/#organization"
  },
  "inLanguage": "id-ID"
}
```

## 7.5 WebPage Schema

Contoh halaman program magang mahasiswa:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.domainanda.com/program-magang/mahasiswa#webpage",
  "url": "https://www.domainanda.com/program-magang/mahasiswa",
  "name": "Program Magang Mahasiswa",
  "description": "Informasi program magang mahasiswa bidang informatika, bisnis digital dan digital marketing.",
  "isPartOf": {
    "@id": "https://www.domainanda.com/#website"
  },
  "about": {
    "@id": "https://www.domainanda.com/#organization"
  },
  "inLanguage": "id-ID",
  "breadcrumb": {
    "@id": "https://www.domainanda.com/program-magang/mahasiswa#breadcrumb"
  }
}
```

## 7.6 BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.domainanda.com/program-magang/mahasiswa#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": "https://www.domainanda.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Program Magang",
      "item": "https://www.domainanda.com/program-magang"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Magang Mahasiswa",
      "item": "https://www.domainanda.com/program-magang/mahasiswa"
    }
  ]
}
```

## 7.7 Service Schema

Contoh halaman jasa digital marketing:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.domainanda.com/jasa/digital-marketing#service",
  "name": "Jasa Digital Marketing",
  "serviceType": "Digital Marketing",
  "description": "Layanan pemasaran digital untuk membantu bisnis mengembangkan jangkauan dan strategi pemasaran online.",
  "url": "https://www.domainanda.com/jasa/digital-marketing",
  "provider": {
    "@id": "https://www.domainanda.com/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  }
}
```

## 7.8 BlogPosting Schema

Contoh artikel:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://www.domainanda.com/blog/panduan-magang-mahasiswa#article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.domainanda.com/blog/panduan-magang-mahasiswa"
  },
  "headline": "Panduan Magang Mahasiswa untuk Pemula",
  "description": "Panduan mempersiapkan magang mahasiswa mulai dari CV hingga portofolio.",
  "image": [
    "https://www.domainanda.com/images/panduan-magang.webp"
  ],
  "datePublished": "2026-11-10T09:00:00+07:00",
  "dateModified": "2026-11-10T09:00:00+07:00",
  "author": {
    "@type": "Organization",
    "@id": "https://www.domainanda.com/#organization"
  },
  "publisher": {
    "@id": "https://www.domainanda.com/#organization"
  },
  "inLanguage": "id-ID"
}
```

Tanggal di atas hanya contoh. Saat produksi, ambil tanggal publikasi dan modifikasi asli dari database. Jika penulis adalah individu, gunakan `Person` dengan nama dan profil yang benar.

## 7.9 LocalBusiness Schema

Gunakan hanya jika benar-benar ada lokasi usaha yang memenuhi syarat. Lengkapi alamat nyata.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.domainanda.com/#localbusiness",
  "name": "NAMA BRAND",
  "url": "https://www.domainanda.com/",
  "telephone": "+62895639068080",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ALAMAT KANTOR",
    "addressLocality": "KOTA",
    "addressRegion": "PROVINSI",
    "postalCode": "KODE POS",
    "addressCountry": "ID"
  }
}
```

Jangan mengarang alamat, jam operasional, koordinat, atau rating. Pastikan tipe dan properti sesuai dokumentasi terkini.

## 7.10 FAQPage Schema

Jika FAQ tersedia dan terlihat oleh pengunjung, struktur berikut dapat mendeskripsikan konten tersebut. Namun, jangan menjadikan FAQPage sebagai target utama rich result Google karena FAQ rich results dibatasi untuk situs pemerintah dan kesehatan yang dikenal otoritatif.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Siapa yang dapat mengikuti program magang?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Program ditujukan bagi siswa SMK dan mahasiswa dari bidang yang sesuai dengan program yang tersedia."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara mendaftar magang?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Calon peserta dapat mengisi formulir pendaftaran melalui halaman pendaftaran website."
      }
    }
  ]
}
```

## 7.11 JobPosting Schema — hanya jika memenuhi syarat

Jangan gunakan JobPosting untuk setiap halaman program magang. Gunakan hanya jika konten merupakan iklan lowongan pekerjaan yang memenuhi pedoman Google.

Contoh berikut merupakan kerangka ilustratif, bukan template yang otomatis layak untuk rich results. Lengkapi semua properti wajib berdasarkan lowongan sebenarnya dan validasi nilai `employmentType` yang didukung.

```json
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Digital Marketing Intern",
  "description": "DESKRIPSI LOWONGAN YANG SEBENARNYA",
  "datePosted": "2026-11-10",
  "validThrough": "2026-12-10T23:59:00+07:00",
  "employmentType": "INTERN",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "NAMA BRAND",
    "sameAs": "https://www.domainanda.com/"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    }
  }
}
```

Jangan menerbitkan markup ini sebelum seluruh informasi lowongan, lokasi/remote status, tanggal, dan persyaratan Google diverifikasi.

## 7.12 Implementasi JSON-LD di React

Buat komponen reusable:

```jsx
export default function JsonLd({ data }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
```

Penggunaan:

```jsx
const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/jasa/digital-marketing#service`,
  name: service.name,
  description: service.description,
  url: canonicalUrl,
  provider: {
    "@id": `${SITE_URL}/#organization`
  }
};

<JsonLd data={schema} />
```

Ketentuan:
- Sanitasi dan validasi data CMS.
- Jangan menerima JSON-LD bebas dari editor tanpa validasi.
- Render schema pada HTML awal SSR.
- Jangan membuat schema untuk data yang tidak ditampilkan.
- Pastikan canonical dan URL schema konsisten.
- Gunakan entitas `@id` yang stabil.

## 7.13 Validasi schema

Sebelum peluncuran:
1. Google Rich Results Test.
2. Schema.org Validator.
3. Google Search Console URL Inspection.
4. Pemeriksaan HTML hasil SSR.
5. Pemeriksaan kesesuaian markup dengan konten yang terlihat.

Referensi:
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- https://validator.schema.org/
- https://search.google.com/test/rich-results

---

# 8. Desain UI/UX

## 8.1 Identitas visual

Gaya: elegan, modern, profesional, minimalis, dengan merah sebagai aksen identitas.

### Palet warna

| Nama | Hex | Penggunaan |
|---|---|---|
| Primary Red | `#B91C2C` | CTA, link aktif, aksen |
| White | `#FFFFFF` | Background utama |
| Charcoal | `#1F2937` | Teks utama |
| Light Gray | `#F5F5F5` | Section alternatif |
| Dark Red | `#7F1D1D` | Hover/aksen gelap |
| Muted Gray | `#6B7280` | Teks sekunder |

### Tipografi
- Heading: Plus Jakarta Sans.
- Body: Inter.
- Heading weight: 600–700.
- Body weight: 400–500.

### Karakter desain
- White space cukup.
- Card radius 12–16px.
- Shadow tipis.
- Tombol merah dengan teks putih.
- Navigasi minimalis.
- Hindari background merah pada seluruh halaman.
- Kontras teks harus mudah dibaca.
- Gunakan animasi seperlunya dan hormati `prefers-reduced-motion`.

## 8.2 Responsive breakpoint

- Mobile: mulai 360px.
- Tablet: mulai 768px.
- Desktop: mulai 1024px.
- Wide desktop: mulai 1440px.

Mobile wajib memiliki:
- Navbar hamburger.
- Dropdown mudah diakses.
- CTA WhatsApp mudah ditemukan.
- Form satu kolom.
- Area sentuh tombol memadai.
- Gambar responsif.
- Tidak ada horizontal overflow.

## 8.3 Komponen desain reusable

- Navbar.
- Dropdown menu.
- Footer.
- Hero.
- Section heading.
- Primary/secondary button.
- Program card.
- Service card.
- Portfolio card.
- Blog card.
- Testimonial card.
- FAQ accordion.
- Breadcrumb.
- Pagination.
- WhatsApp CTA.
- Registration form field.
- Status badge.
- Admin table.
- Modal confirmation.
- Toast/notification.

## 8.4 Aksesibilitas

Target WCAG 2.2 AA:
- Label form jelas.
- Navigasi keyboard.
- Focus state terlihat.
- Kontras warna memadai.
- Alt text gambar informatif.
- Error form diumumkan dengan jelas.
- Tombol mempunyai nama yang bermakna.
- Struktur heading logis.
- Jangan menyampaikan status hanya melalui warna.

---

# 9. Admin Dashboard / Semi-CMS

## 9.1 Dashboard utama

Informasi:
- Total pendaftar.
- Pendaftar hari ini.
- Pendaftar pending.
- Pendaftar diterima.
- Jumlah artikel.
- Jumlah program aktif.
- Grafik pendaftaran per bulan.
- Pendaftaran terbaru.

## 9.2 Role dan hak akses

| Role | Hak akses |
|---|---|
| Super Admin | Semua fitur dan pengaturan |
| Admin | Konten dan pendaftaran |
| Editor | Artikel, jasa, portofolio, program |

Hak akses harus ditegakkan di server/database, bukan hanya menyembunyikan menu pada frontend.

## 9.3 Modul CMS

| Modul | Operasi |
|---|---|
| Halaman | CRUD |
| Program magang | CRUD |
| Jasa | CRUD |
| Blog | CRUD |
| Portofolio | CRUD |
| Kategori | CRUD |
| FAQ | CRUD |
| Media | Upload, edit metadata, hapus |
| Pendaftaran | Lihat, filter, update status |
| SEO | Meta title, description, canonical |
| Pengaturan | Logo, kontak, WhatsApp, sosial media |

Fitur tambahan:
- Preview sebelum publish.
- Draft dan scheduled publishing jika diperlukan.
- Peringatan slug duplikat.
- Riwayat status pendaftaran.
- Filter dan pencarian.
- Pagination.
- Konfirmasi sebelum menghapus.
- Audit log untuk tindakan penting.
- Export CSV dengan akses admin yang tepat.

---

# 10. Functional Requirements

| ID | Kebutuhan fungsional | Prioritas |
|---|---|---|
| FR-01 | Menampilkan halaman beranda | Must |
| FR-02 | Menampilkan profil perusahaan | Must |
| FR-03 | Menampilkan daftar jasa | Must |
| FR-04 | Menampilkan detail jasa | Must |
| FR-05 | Menampilkan daftar program magang | Must |
| FR-06 | Menampilkan detail program magang | Must |
| FR-07 | Menampilkan portofolio | Must |
| FR-08 | Menampilkan blog | Must |
| FR-09 | Menampilkan detail artikel | Must |
| FR-10 | Menyediakan form pendaftaran | Must |
| FR-11 | Menyimpan pendaftaran ke Supabase | Must |
| FR-12 | Menyediakan CTA WhatsApp | Must |
| FR-13 | Admin dapat login | Must |
| FR-14 | Admin dapat mengelola pendaftaran | Must |
| FR-15 | Admin dapat mengelola konten CMS | Must |
| FR-16 | Admin dapat mengelola SEO metadata | Must |
| FR-17 | Pencarian artikel | Should |
| FR-18 | Filter portofolio | Should |
| FR-19 | Ekspor data pendaftaran | Should |
| FR-20 | Riwayat perubahan status | Should |
| FR-21 | Notifikasi pendaftaran | Could |

---

# 11. Non-Functional Requirements

| ID | Kebutuhan | Target |
|---|---|---|
| NFR-01 | Performance | LCP ≤ 2,5 detik |
| NFR-02 | SEO | SSR/prerender dan metadata unik |
| NFR-03 | Security | RLS, Auth, validasi server |
| NFR-04 | Availability | Target uptime 99,9% |
| NFR-05 | Responsive | Mobile, tablet, desktop |
| NFR-06 | Accessibility | WCAG 2.2 AA sebagai target |
| NFR-07 | Maintainability | Komponen reusable |
| NFR-08 | Scalability | PostgreSQL |
| NFR-09 | Compatibility | Browser modern |
| NFR-10 | Backup | Backup berkala |
| NFR-11 | Privacy | Perlindungan data pendaftar |
| NFR-12 | SEO | Sitemap, robots, canonical |

Target uptime bergantung pada paket hosting, Supabase, konfigurasi, dan pemantauan operasional. Tetapkan SLA aktual berdasarkan layanan yang dipilih.

---

# 12. Struktur Folder React

Contoh struktur yang dapat disesuaikan dengan konvensi React Router Framework Mode:

```text
project/
├── app/
│   ├── root.jsx
│   ├── routes.js
│   ├── routes/
│   │   ├── home.jsx
│   │   ├── about.jsx
│   │   ├── services.jsx
│   │   ├── service-detail.jsx
│   │   ├── programs.jsx
│   │   ├── program-detail.jsx
│   │   ├── portfolio.jsx
│   │   ├── portfolio-detail.jsx
│   │   ├── blog.jsx
│   │   ├── blog-detail.jsx
│   │   ├── registration.jsx
│   │   ├── contact.jsx
│   │   └── admin/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Breadcrumb.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── JsonLd.jsx
│   │   └── seo/
│   │       ├── MetaTags.jsx
│   │       └── SchemaGenerator.jsx
│   ├── features/
│   │   ├── applications/
│   │   ├── programs/
│   │   ├── services/
│   │   ├── portfolios/
│   │   ├── posts/
│   │   └── admin/
│   ├── services/
│   │   ├── supabase.server.js
│   │   ├── supabase.client.js
│   │   ├── applicationService.js
│   │   ├── programService.js
│   │   ├── postService.js
│   │   └── portfolioService.js
│   ├── utils/
│   └── styles/
│       ├── main.css
│       ├── variables.css
│       ├── components.css
│       └── responsive.css
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── migrations/
├── tests/
├── .env.example
├── package.json
└── README.md
```

Catatan:
- Struktur akhir mengikuti versi React Router yang digunakan.
- Pisahkan kode server-only dan browser.
- Jangan mengimpor secret atau service-role key ke modul client.
- Simpan migration database dalam version control.
- Gunakan environment variable untuk konfigurasi.
- Tambahkan test untuk form, akses admin, dan aturan RLS.

---

# 13. Roadmap Pengembangan

## Tahap 1 — Foundation
- Setup React dan React Router.
- Setup Bootstrap dan CSS.
- Setup Supabase.
- Setup database dan migration.
- Setup autentikasi admin.
- Setup desain global.
- Setup environment variables.

## Tahap 2 — Public Website
- Beranda.
- Tentang Kami.
- Jasa dan detail jasa.
- Program magang dan detail program.
- Portofolio.
- Blog.
- Kontak.

## Tahap 3 — Registration System
- Form pendaftaran.
- Validasi.
- Integrasi database.
- Nomor registrasi.
- WhatsApp CTA.
- Status pendaftaran.

## Tahap 4 — Semi-CMS
- Dashboard.
- CRUD konten.
- CRUD program.
- CRUD jasa.
- CRUD artikel.
- CRUD portofolio.
- Manajemen pendaftaran.
- Pengaturan SEO.

## Tahap 5 — SEO & Performance
- SSR dan prerender.
- Dynamic metadata.
- JSON-LD.
- Sitemap dinamis.
- Robots.txt.
- Image optimization.
- Performance audit.

## Tahap 6 — Testing & Deployment
- Functional testing.
- Security testing.
- Responsive testing.
- SEO testing.
- Lighthouse testing.
- Production deployment.
- Monitoring error dan performa.

---

# 14. Acceptance Criteria

Website siap diluncurkan apabila:

- [ ] Semua halaman publik dapat diakses.
- [ ] Navigasi dropdown berfungsi.
- [ ] Seluruh CTA menggunakan nomor WhatsApp yang benar.
- [ ] Form pendaftaran berhasil menyimpan data.
- [ ] Nomor registrasi unik.
- [ ] Pengunjung tidak dapat membaca data pendaftar lain.
- [ ] Admin dapat login dan logout.
- [ ] Hak akses admin ditegakkan di database/server.
- [ ] Admin dapat mengelola seluruh konten utama.
- [ ] Draft tidak muncul di halaman publik.
- [ ] Setiap halaman memiliki metadata unik.
- [ ] HTML awal berisi konten penting untuk SEO.
- [ ] JSON-LD sesuai dengan konten halaman.
- [ ] Sitemap dan robots.txt berfungsi.
- [ ] Tidak ada broken links penting.
- [ ] Tampilan responsif.
- [ ] Core Web Vitals memenuhi target atau memiliki rencana perbaikan.
- [ ] Kebijakan privasi tersedia dan disetujui.
- [ ] Upload file dan akses dokumen diuji.
- [ ] Backup dan prosedur pemulihan ditetapkan.

---

# 15. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| SPA tanpa SSR/prerender | Konten kurang optimal untuk crawler | Gunakan SSR/prerender dan uji HTML awal |
| Data pendaftar bocor | Risiko privasi tinggi | RLS, grants, server validation, audit |
| Spam pendaftaran | Beban admin dan database | Rate limit, CAPTCHA, validasi |
| Halaman program duplikat | Kualitas SEO turun | Konten unik dan bermanfaat |
| Gambar terlalu besar | Performa lambat | WebP/AVIF, resize, lazy loading |
| Schema tidak sesuai | Markup diabaikan/manual action risk | Validasi dan cocokkan dengan konten |
| Secret terekspos | Database dapat disalahgunakan | Pisahkan server secrets dari frontend |
| Konten tidak diperbarui | Informasi tidak akurat | CMS dan proses editorial |
| Slug berubah | Broken links | Redirect 301 dan pencatatan URL lama |

---

# 16. Keputusan Produk yang Direkomendasikan

| Aspek | Rekomendasi |
|---|---|
| Frontend | React |
| Routing/rendering | React Router Framework Mode |
| Rendering | SSR + prerender |
| Styling | Bootstrap 5 + custom CSS |
| Database | Supabase PostgreSQL |
| CMS | Custom admin dashboard |
| Form | React Hook Form + Zod |
| SEO | Technical SEO + content SEO |
| Schema | JSON-LD dinamis |
| Warna | Merah, putih, charcoal |
| Kontak | WhatsApp terpusat |
| Bahasa | Bahasa Indonesia |
| Domain | Domain brand sendiri |

**Keputusan penting:** Jangan menggunakan React SPA murni jika SEO adalah prioritas utama. Tetap gunakan React, tetapi manfaatkan SSR atau prerender agar konten utama tersedia pada HTML awal.

---

# 17. Informasi yang Masih Perlu Dikonfirmasi

Informasi berikut belum ditentukan dan tidak boleh dikarang:

1. Nama brand dan domain website.
2. Alamat kantor atau lokasi operasional.
3. Logo dan identitas brand.
4. Durasi dan sistem pelaksanaan magang.
5. Apakah program magang gratis, berbayar, atau memiliki ketentuan tertentu.
6. Ketersediaan mentor.
7. Apakah peserta memperoleh sertifikat.
8. Apakah tersedia uang saku atau fasilitas lain.
9. Apakah program onsite, hybrid, atau remote.
10. Profil sosial media resmi.
11. Email bisnis.
12. Kebijakan privasi dan retensi data pendaftar.

Informasi tersebut dapat dimasukkan melalui CMS atau konfigurasi website setelah dikonfirmasi.

---

# 18. Langkah Pengembangan Berikutnya

Urutan pengerjaan yang direkomendasikan:

1. **Database schema SQL lengkap:** seluruh tabel, foreign key, index, trigger, RLS policy, grants, dan konfigurasi Supabase.
2. **UI/UX Design Specification:** desain setiap halaman, komponen, navbar, hero, footer, form, dan admin dashboard.
3. **React Project Blueprint:** struktur routing, SSR, komponen reusable, integrasi Supabase, SEO metadata, dan schema generator.
4. **Implementation:** pembangunan bertahap berdasarkan acceptance criteria.
5. **Testing dan deployment:** pengujian fungsional, keamanan, SEO, performa, dan produksi.

---

# 19. Referensi Dokumentasi Resmi

Dokumentasi berikut perlu menjadi acuan implementasi dan diperiksa kembali saat development:

## React dan rendering
- React: https://react.dev/
- React Router: https://reactrouter.com/
- React Router framework mode: https://reactrouter.com/start/framework/installation

## Bootstrap
- Bootstrap: https://getbootstrap.com/docs/

## Supabase
- Supabase Docs: https://supabase.com/docs
- Supabase Database: https://supabase.com/docs/guides/database
- Supabase Row Level Security: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase Auth: https://supabase.com/docs/guides/auth
- Supabase Storage: https://supabase.com/docs/guides/storage

## SEO dan Google
- Google Search Central: https://developers.google.com/search/docs
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Structured Data Introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Structured Data Gallery: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- Sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Core Web Vitals: https://web.dev/articles/vitals

## Schema.org
- Schema.org: https://schema.org/
- Schema Validator: https://validator.schema.org/
- Google Rich Results Test: https://search.google.com/test/rich-results

---

**Akhir Dokumen PRD**

Dokumen ini menjadi dasar analisis kebutuhan, desain UI/UX, perancangan database, implementasi frontend/backend, strategi SEO, pengujian, dan deployment website program magang serta digital agency.
