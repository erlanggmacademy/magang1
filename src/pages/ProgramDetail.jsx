import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { createWhatsAppUrl } from '../utils/whatsapp'

const PROGRAM_DATA = {
  smk: {
    title: 'Program Magang Siswa SMK (Praktik Kerja Lapangan / PKL)',
    level: 'Siswa SMK',
    badge: 'Program Khusus SMK / PKL',
    majors: ['Rekayasa Perangkat Lunak (RPL)', 'Teknik Komputer & Jaringan (TKJ)', 'Multimedia', 'Desain Komunikasi Visual (DKV)'],
    description: 'Program magang resmi yang dirancang khusus untuk memenuhi kurikulum PKL sekolah kejuruan dengan fokus pada pengasahan keahlian teknis dan etika kerja industri profesional.',
    duration: '3 - 6 Bulan (Sesuai Kurikulum Sekolah)',
    mode: 'Hybrid & Onsite',
    competencies: [
      'Pemahaman alur kerja dan standar industri digital agency',
      'Penyusunan kode program atau aset grafis berstandar produksi',
      'Komunikasi tim, standup meeting harian, dan manajemen tugas (Scrum/Kanban)',
      'Pembuatan laporan akhir magang dan portofolio karya'
    ],
    activities: [
      { week: 'Bulan 1', desc: 'Onboarding pengenalan alat kerja, review fundamental kejuruan, dan penugasan modul simulasi internal.' },
      { week: 'Bulan 2 - 3', desc: 'Dilibatkan langsung dalam pengerjaan komponen proyek riil klien agensi dengan bimbingan mentor senior.' },
      { week: 'Bulan 4+', desc: 'Finalisasi portofolio mandiri, evaluasi performa kerja, dan penyusunan laporan magang sekolah.' }
    ],
    requirements: [
      'Siswa aktif SMK kelas 11 atau 12 pada jurusan yang relevan',
      'Membawa Surat Pengantar Magang / PKL dari pihak sekolah',
      'Memiliki komitmen disiplin, kemauan belajar tinggi, dan laptop pribadi untuk praktik',
      'Mendapat persetujuan dari orang tua / wali'
    ],
    waMessage: 'Halo Admin, saya siswa SMK ingin mendaftar program magang / PKL di DigiMagang.'
  },
  mahasiswa: {
    title: 'Program Magang Mahasiswa (Perguruan Tinggi)',
    level: 'Mahasiswa D3 / D4 / S1',
    badge: 'Program Mahasiswa',
    majors: ['Teknik Informatika', 'Sistem Informasi', 'Bisnis Digital', 'Digital Marketing', 'Manajemen Pemasaran', 'Ilmu Komunikasi'],
    description: 'Program magang intensif berbasis proyek nyata yang memberikan eksposur mendalam pada ekosistem agensi digital modern, riset pasar, dan rekayasa perangkat lunak skala produksi.',
    duration: '3 - 6 Bulan',
    mode: 'Hybrid & Remote',
    competencies: [
      'Pengembangan solusi digital skala industri dengan arsitektur modern',
      'Eksplorasi data analytics, conversion rate optimization, dan SEO',
      'Kolaborasi lintas divisi (Developer, UI/UX Designer, & Digital Marketer)',
      'Dokumentasi teknis dan presentasi hasil kerja kepada stakeholder'
    ],
    activities: [
      { week: 'Bulan 1', desc: 'Assesment kapabilitas, onboarding sistem, dan penempatan pada tim divisi yang relevan.' },
      { week: 'Bulan 2 - 4', desc: 'Eksekusi sprint mingguan, penanganan tugas teknis proyek, dan kolaborasi tim profesional.' },
      { week: 'Bulan 5 - 6', desc: 'Presentasi hasil karya akhir, evaluasi capaian kompetensi, dan penerbitan sertifikat magang resmi.' }
    ],
    requirements: [
      'Mahasiswa aktif minimal semester 5 (D3/D4/S1)',
      'Memiliki dasar keilmuan yang relevan dengan divisi pilihan',
      'Bersedia mengikuti jam kerja profesional (Senin - Jumat)',
      'Memiliki surat pengantar atau rekomendasi dari kampus / jurusan'
    ],
    waMessage: 'Halo Admin, saya mahasiswa ingin mendaftar program magang di DigiMagang.'
  },
  rpl: {
    title: 'Magang Rekayasa Perangkat Lunak (RPL) & Frontend Web',
    level: 'SMK (RPL) & Mahasiswa Informatika',
    badge: 'Web & Software Engineering',
    majors: ['Rekayasa Perangkat Lunak', 'Teknik Informatika', 'Sistem Informasi'],
    description: 'Kembangkan keahlian rekayasa aplikasi web modern. Anda akan belajar membangun website responsif dan aplikasi menggunakan React, REST API, Git version control, dan database Supabase.',
    duration: '3 - 6 Bulan',
    mode: 'Hybrid & Onsite',
    competencies: [
      'Penyusunan kode frontend modern dengan React, Vite, dan Bootstrap',
      'Integrasi backend API dan pengelolaan database Supabase PostgreSQL',
      'Penerapan clean code, component lifecycle, dan routing aplikasi',
      'Penggunaan Git & GitHub untuk kolaborasi tim developer'
    ],
    activities: [
      { week: 'Minggu 1 - 2', desc: 'Penguasaan toolset (VS Code, Git, Node.js, CLI) dan pengenalan arsitektur proyek.' },
      { week: 'Minggu 3 - 8', desc: 'Pembuatan slicing layout responsif, form validation, dan integrasi API antarmuka.' },
      { week: 'Minggu 9+', desc: 'Pengembangan modul fitur aplikasi web dan optimasi kecepatan rendering.' }
    ],
    requirements: [
      'Memahami dasar HTML, CSS, dan JavaScript',
      'Tertarik pada pengembangan aplikasi web modern',
      'Memiliki laptop dengan spesifikasi standar pemrograman'
    ],
    waMessage: 'Halo Admin, saya tertarik mendaftar program Magang RPL / Web Development.'
  },
  informatika: {
    title: 'Magang Teknik Informatika & Fullstack Development',
    level: 'Mahasiswa Teknik Informatika & Sistem Informasi',
    badge: 'Fullstack & Database',
    majors: ['Teknik Informatika', 'Ilmu Komputer', 'Sistem Informasi'],
    description: 'Pendalaman arsitektur perangkat lunak, database relationship, keamanan otentikasi data, dan deployment server aplikasi.',
    duration: '3 - 6 Bulan',
    mode: 'Hybrid & Remote',
    competencies: [
      'Perancangan skema database relasional dan aturan RLS Supabase',
      'Implementasi autentikasi JWT dan Role-Based Access Control (RBAC)',
      'Optimasi query database dan pembuatan Serverless Edge Functions',
      'Deployment dan Continuous Integration (CI/CD)'
    ],
    activities: [
      { week: 'Tahap 1', desc: 'Audit sistem, pemahaman REST API, dan manipulasi data relasional.' },
      { week: 'Tahap 2', desc: 'Pembangunan fitur otentikasi, manajemen CRUD CMS, dan filter data analitik.' },
      { week: 'Tahap 3', desc: 'Security testing, benchmark performa sistem, dan dokumentasi arsitektur.' }
    ],
    requirements: [
      'Mahasiswa aktif jurusan rumpun informatika/komputer',
      'Memahami konsep OOP dan dasar database relasional SQL',
      'Memiliki portofolio project coding (nilai tambah)'
    ],
    waMessage: 'Halo Admin, saya mahasiswa Informatika ingin mendaftar magang Software Development.'
  },
  'digital-marketing': {
    title: 'Magang Digital Marketing & Search Engine Optimization (SEO)',
    level: 'SMK Bisnis Daring & Mahasiswa Manajemen/Bisnis Digital',
    badge: 'Growth & Organic Traffic',
    majors: ['Bisnis Digital', 'Digital Marketing', 'Manajemen Pemasaran', 'Pemasaran'],
    description: 'Pelajari cara mendatangkan pengunjung tertarget dan meningkatkan konversi penjualan melalui strategi SEO terstruktur, copywriting persuasif, dan analitik Google.',
    duration: '3 - 6 Bulan',
    mode: 'Hybrid & Remote',
    competencies: [
      'Riset kata kunci potensial menggunakan tools SEO profesional',
      'Optimasi On-Page SEO (metadata, struktur heading, internal linking)',
      'Penyusunan copy iklan dan konten landing page berdaya konversi tinggi',
      'Pembacaan laporan Google Analytics 4 dan Google Search Console'
    ],
    activities: [
      { week: 'Bulan 1', desc: 'Riset niche pasar, identifikasi search intent pengunjung, dan audit kompetitor.' },
      { week: 'Bulan 2', desc: 'Produksi konten artikel SEO-friendly dan penerapan Schema Structured Data.' },
      { week: 'Bulan 3+', desc: 'Monitoring pergerakan peringkat Google dan optimasi rasio konversi (CRO).' }
    ],
    requirements: [
      'Tertarik pada dunia pemasaran digital, media sosial, dan tren internet',
      'Mampu menulis dengan tata bahasa yang komunikatif dan menarik',
      'Mampu mengoperasikan komputer dan browser dengan lancar'
    ],
    waMessage: 'Halo Admin, saya ingin mendaftar Magang Digital Marketing & SEO.'
  },
  'bisnis-digital': {
    title: 'Magang Bisnis Digital & Analisis Strategi',
    level: 'Mahasiswa Bisnis Digital & Manajemen Bisnis',
    badge: 'Business Strategy',
    majors: ['Bisnis Digital', 'Manajemen Bisnis', 'Sistem Informasi'],
    description: 'Belajar menganalisis proses bisnis online, manajemen pipeline leads WhatsApp, dan otomatisasi operasional agensi digital.',
    duration: '3 - 6 Bulan',
    mode: 'Hybrid',
    competencies: [
      'Analisis alur konsumen (Customer Journey Mapping)',
      'Manajemen leads dan interaksi calon klien via WhatsApp Business',
      'Penyusunan penawaran proposal kerja sama digital agency'
    ],
    activities: [
      { week: 'Tahap 1', desc: 'Pemetaan produk dan penawaran jasa digital agensi.' },
      { week: 'Tahap 2', desc: 'Manajemen lead generation dan interaksi prospek klien.' },
      { week: 'Tahap 3', desc: 'Penyusunan laporan pertumbuhan bisnis dan evaluasi strategi promosi.' }
    ],
    requirements: [
      'Mahasiswa jurusan bisnis/manajemen/komunikasi',
      'Memiliki kemampuan komunikasi interpersonal yang baik',
      'Kritis dalam menganalisis data performa bisnis'
    ],
    waMessage: 'Halo Admin, saya ingin mendaftar program Magang Bisnis Digital.'
  },
  tkj: {
    title: 'Magang Jaringan Komputer & IT Support (TKJ)',
    level: 'Siswa SMK (TKJ) & Mahasiswa Sistem Komputer',
    badge: 'Networking & Hardware',
    majors: ['Teknik Komputer dan Jaringan (TKJ)', 'Sistem Komputer'],
    description: 'Praktik langsung pengelolaan infrastruktur jaringan kantor, konfigurasi router MikroTik, troubleshooting perangkat keras, serta manajemen hosting server.',
    duration: '3 - 6 Bulan',
    mode: 'Onsite',
    competencies: [
      'Konfigurasi routing dan bandwidth management MikroTik',
      'Instalasi jaringan LAN kabel dan Wireless Access Point',
      'Troubleshooting perangkat komputer hardware dan software',
      'Dasar manajemen server Linux dan hosting domain'
    ],
    activities: [
      { week: 'Bulan 1', desc: 'Pemeliharaan perangkat keras workstation dan standarisasi software kantor.' },
      { week: 'Bulan 2', desc: 'Monitoring stabilitas jaringan lokal dan konfigurasi keamanan firewall.' },
      { week: 'Bulan 3+', desc: 'Pengelolaan backup server dan asistensi teknis operasional agensi.' }
    ],
    requirements: [
      'Siswa SMK jurusan TKJ atau mahasiswa teknik komputer',
      'Memahami dasar pengkabelan LAN dan IP Addressing',
      'Teliti dan siap bekerja sama secara onsite di kantor'
    ],
    waMessage: 'Halo Admin, saya ingin mendaftar Magang TKJ / Jaringan Komputer.'
  },
  multimedia: {
    title: 'Magang Multimedia & Konten Kreatif',
    level: 'Siswa SMK (Multimedia) & Mahasiswa Komunikasi Kreatif',
    badge: 'Video & Visual Media',
    majors: ['Multimedia', 'Desain Komunikasi Visual', 'Broadcasting'],
    description: 'Produksi video vertikal pendek (Reels, TikTok, Shorts), motion graphic intro, fotografi produk, dan aset multimedia untuk promosi digital agensi.',
    duration: '3 - 6 Bulan',
    mode: 'Hybrid & Onsite',
    competencies: [
      'Teknik pengambilan gambar video dan framing kamera',
      'Editing video dengan Premiere Pro / CapCut Desktop berstandar komersial',
      'Pemberian efek suara, transisi, dan subtitling dinamis',
      'Manajemen aset multimedia dan timeline produksi konten'
    ],
    activities: [
      { week: 'Minggu 1 - 4', desc: 'Pembuatan skrip, storyboard, dan eksekusi video pendek branding.' },
      { week: 'Minggu 5 - 8', desc: 'Editing video portofolio klien dan visual motion graphic.' },
      { week: 'Minggu 9+', desc: 'Produksi paket materi promosi komprehensif kampanye digital.' }
    ],
    requirements: [
      'Mampu mengoperasikan aplikasi video editing (Premiere/CapCut/After Effects)',
      'Memiliki rasa estetika visual dan ketertarikan pada tren media sosial',
      'Menyertakan contoh karya video pendek yang pernah dibuat'
    ],
    waMessage: 'Halo Admin, saya ingin mendaftar Magang Multimedia & Video Editing.'
  },
  dkv: {
    title: 'Magang Desain Komunikasi Visual (DKV) & UI/UX',
    level: 'Siswa SMK (DKV) & Mahasiswa Desain Grafis',
    badge: 'Visual Design & UI/UX',
    majors: ['Desain Komunikasi Visual (DKV)', 'Desain Grafis', 'Seni Rupa'],
    description: 'Merancang identitas visual merek, wireframe dan antarmuka aplikasi di Figma, banner promosi media sosial, dan materi branding profesional.',
    duration: '3 - 6 Bulan',
    mode: 'Hybrid & Onsite',
    competencies: [
      'Penyusunan palet warna, tipografi, dan hierarki visual yang tepat',
      'Desain antarmuka responsif (Mobile & Desktop) di Figma',
      'Pembuatan ilustrasi, icon set, dan banner promosi berstandar komersial',
      'Penerapan Design System dan komponen reusable'
    ],
    activities: [
      { week: 'Bulan 1', desc: 'Eksplorasi brand guidelines, desain feed carousel edukasi, dan banner promosi.' },
      { week: 'Bulan 2', desc: 'Wireframing landing page dan desain prototype UI aplikasi web di Figma.' },
      { week: 'Bulan 3+', desc: 'Pengujian kegunaan desain (usability check) dan penyiapan file handoff untuk developer.' }
    ],
    requirements: [
      'Menguasai software desain grafis (Figma / Adobe Illustrator / Photoshop)',
      'Memahami dasar prinsip desain: hierarki, kontras, dan whitespace',
      'Melampirkan link portofolio desain (Behance / Drive / Instagram Karya)'
    ],
    waMessage: 'Halo Admin, saya ingin mendaftar Magang DKV / UI/UX Design.'
  }
}

export default function ProgramDetail() {
  const { category } = useParams()
  const slug = category ? category.toLowerCase() : 'smk'
  const program = PROGRAM_DATA[slug] || PROGRAM_DATA.smk

  const waUrl = createWhatsAppUrl(program.waMessage)

  return (
    <div className="py-5">
      <div className="container py-3">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-secondary">Beranda</Link></li>
            <li className="breadcrumb-item"><Link to="/program-magang" className="text-secondary">Program Magang</Link></li>
            <li className="breadcrumb-item active text-danger fw-semibold" aria-current="page">{program.title}</li>
          </ol>
        </nav>

        {/* Hero Section Program */}
        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-8">
            <span className="section-badge">{program.badge}</span>
            <h1 className="fw-bold display-6 mb-3 text-dark">{program.title}</h1>
            <p className="lead text-secondary fs-6 mb-4">{program.description}</p>

            <div className="d-flex flex-wrap gap-3">
              <Link to={`/pendaftaran?track=${slug}`} className="btn btn-primary-red btn-lg">
                <i className="bi bi-pencil-square me-2"></i> Daftar Program Ini
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                <i className="bi bi-whatsapp me-2"></i> Tanya via WhatsApp
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-modern p-4 border-0 shadow-sm bg-light">
              <h5 className="fw-bold mb-3 border-bottom pb-2 text-dark">Informasi Pelaksanaan</h5>
              <ul className="list-unstyled d-flex flex-column gap-3 small mb-0">
                <li className="d-flex justify-content-between">
                  <span className="text-secondary"><i className="bi bi-mortarboard text-danger me-2"></i> Target:</span>
                  <strong className="text-dark">{program.level}</strong>
                </li>
                <li className="d-flex justify-content-between">
                  <span className="text-secondary"><i className="bi bi-clock text-danger me-2"></i> Durasi:</span>
                  <strong className="text-dark">{program.duration}</strong>
                </li>
                <li className="d-flex justify-content-between">
                  <span className="text-secondary"><i className="bi bi-laptop text-danger me-2"></i> Mode:</span>
                  <strong className="text-dark">{program.mode}</strong>
                </li>
                <li className="d-flex justify-content-between">
                  <span className="text-secondary"><i className="bi bi-patch-check text-danger me-2"></i> Sertifikat:</span>
                  <strong className="text-success">Resmi Bersertifikat</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detail Tabs / Sections */}
        <div className="row g-5">
          {/* Kolom Kiri: Kurikulum & Aktivitas */}
          <div className="col-lg-8">
            {/* Kompetensi */}
            <div className="card card-modern p-4 mb-4">
              <h4 className="fw-bold text-dark mb-3">
                <i className="bi bi-award-fill text-danger me-2"></i> Kompetensi yang Akan Dikuasai
              </h4>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {program.competencies.map((comp, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-2">
                    <i className="bi bi-check2-circle text-danger fs-5 mt-n1 flex-shrink-0"></i>
                    <span className="text-secondary">{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aktivitas Program */}
            <div className="card card-modern p-4 mb-4">
              <h4 className="fw-bold text-dark mb-3">
                <i className="bi bi-calendar-week text-danger me-2"></i> Rangkaian Aktivitas Pembelajaran
              </h4>
              <div className="d-flex flex-column gap-3">
                {program.activities.map((act, idx) => (
                  <div key={idx} className="border-start border-3 border-danger ps-3 py-1">
                    <strong className="d-block text-dark mb-1">{act.week}</strong>
                    <p className="text-secondary small mb-0">{act.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Persyaratan */}
            <div className="card card-modern p-4">
              <h4 className="fw-bold text-dark mb-3">
                <i className="bi bi-clipboard-check-fill text-danger me-2"></i> Persyaratan Pendaftaran
              </h4>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {program.requirements.map((req, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-2">
                    <i className="bi bi-arrow-right-short text-danger fs-4 mt-n1 flex-shrink-0"></i>
                    <span className="text-secondary">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Jurusan Sasaran & CTA Card */}
          <div className="col-lg-4">
            <div className="card card-modern p-4 mb-4">
              <h5 className="fw-bold mb-3 text-dark">Jurusan Sasaran</h5>
              <div className="d-flex flex-wrap gap-2">
                {program.majors.map((m, idx) => (
                  <span key={idx} className="badge bg-light text-dark border p-2 small">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-4 text-white text-center rounded-4 border-0 shadow-sm" style={{ backgroundColor: 'var(--charcoal)' }}>
              <i className="bi bi-headset fs-1 text-danger mb-2"></i>
              <h5 className="fw-bold text-white mb-2">Butuh Konsultasi?</h5>
              <p className="text-secondary small mb-4">
                Ada pertanyaan tentang jadwal masuk, konfirmasi kuota, atau sistem administrasi PKL sekolah Anda?
              </p>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-100 justify-content-center">
                <i className="bi bi-whatsapp"></i> Chat Admin Sekarang
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

