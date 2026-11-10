import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '62895639068080'
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Admin%2C%20saya%20ingin%20konsultasi%20mengenai%20program%20magang%20dan%20jasa%20digital%20agency.`

  const internshipTracks = [
    {
      title: 'Web Development',
      level: 'SMK (RPL) & Mahasiswa',
      desc: 'Pelajari modern frontend & backend: React, Node.js, database, dan REST API pada proyek nyata.',
      icon: 'bi-code-square',
      link: '/program-magang/rpl'
    },
    {
      title: 'Digital Marketing & SEO',
      level: 'Bisnis Digital & Manajemen',
      desc: 'Kuasai Search Engine Optimization, Google Analytics, content strategy, dan paid traffic.',
      icon: 'bi-graph-up-arrow',
      link: '/program-magang/digital-marketing'
    },
    {
      title: 'UI/UX & Graphic Design',
      level: 'DKV & Multimedia',
      desc: 'Belajar user research, wireframing di Figma, design system, dan produksi materi visual branding.',
      icon: 'bi-palette-fill',
      link: '/program-magang/multimedia'
    },
    {
      title: 'Jaringan & IT Support',
      level: 'SMK (TKJ) & SI',
      desc: 'Konfigurasi infrastruktur server, cloud hosting, mikrotik, dan pemeliharaan hardware kantor.',
      icon: 'bi-hdd-network-fill',
      link: '/program-magang/tkj'
    }
  ]

  const agencyServices = [
    {
      title: 'Web Development',
      desc: 'Pembuatan website profesional, responsif, cepat, dan berstandar SEO tinggi.',
      icon: 'bi-laptop'
    },
    {
      title: 'SEO Website',
      desc: 'Raih peringkat 1 Google untuk kata kunci bisnis Anda dan tingkatkan traffic organik.',
      icon: 'bi-search'
    },
    {
      title: 'Social Media Management',
      desc: 'Strategi konten harian, copywriting menarik, dan visual feed Instagram & TikTok.',
      icon: 'bi-instagram'
    },
    {
      title: 'UI/UX & Branding',
      desc: 'Desain visual identitas brand dan prototype aplikasi yang fokus pada konversi.',
      icon: 'bi-brush'
    }
  ]

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="py-5 bg-white border-bottom position-relative overflow-hidden">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="section-badge">
                <i className="bi bi-stars me-1"></i> Platform Magang & Digital Agency
              </span>
              <h1 className="display-5 fw-bold text-dark mt-2 mb-3 lh-sm">
                Bangun Skill Digital, Raih Pengalaman Profesional, dan Siapkan Masa Depan Kariermu.
              </h1>
              <p className="lead text-secondary mb-4 fs-6">
                Program magang bagi siswa SMK dan mahasiswa di bidang teknologi, digital marketing, bisnis digital, dan industri kreatif melalui kurikulum berbasis proyek nyata digital agency.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/pendaftaran" className="btn btn-primary-red btn-lg">
                  <i className="bi bi-pencil-square me-2"></i> Daftar Magang Sekarang
                </Link>
                <a 
                  href={waUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-lg"
                >
                  <i className="bi bi-whatsapp me-2"></i> Konsultasi WhatsApp
                </a>
              </div>

              {/* Highlights badge */}
              <div className="row mt-5 pt-3 border-top g-3 text-secondary">
                <div className="col-sm-4 col-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                    <span className="small fw-semibold">Proyek Riil Agency</span>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                    <span className="small fw-semibold">Bimbingan Mentor</span>
                  </div>
                </div>
                <div className="col-sm-4 col-12">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger fs-5"></i>
                    <span className="small fw-semibold">Sertifikat Resmi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="position-relative">
                <div 
                  className="p-4 rounded-4 shadow-lg text-white"
                  style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, #111827 100%)' }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary pb-3">
                    <span className="badge bg-danger">Periode Aktif</span>
                    <small className="text-secondary"><i className="bi bi-calendar3 me-1"></i> Dibuka Setiap Periode</small>
                  </div>
                  <h4 className="fw-bold text-white mb-2">Pendaftaran Magang Gelombang Baru</h4>
                  <p className="text-secondary small mb-4">
                    Tersedia mode <strong className="text-white">Hybrid & Onsite</strong> untuk siswa SMK & mahasiswa di seluruh Indonesia.
                  </p>
                  <ul className="list-unstyled small text-light d-flex flex-column gap-2 mb-4">
                    <li><i className="bi bi-check2 text-success me-2"></i> Kuota pendaftaran terbatas per divisi</li>
                    <li><i className="bi bi-check2 text-success me-2"></i> Portofolio hasil karya nyata saat lulus</li>
                    <li><i className="bi bi-check2 text-success me-2"></i> Validasi surat pengantar sekolah/kampus</li>
                  </ul>
                  <Link to="/pendaftaran" className="btn btn-outline-light w-100 fw-semibold">
                    Isi Formulir Pendaftaran <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM MAGANG PILIHAN */}
      <section className="py-5 section-alt">
        <div className="container py-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-badge">Bidang Keahlian</span>
            <h2 className="fw-bold">Pilihan Program Magang Terpopuler</h2>
            <p className="text-secondary">Kurikulum terstruktur dirancang sesuai standar industri digital terkini.</p>
          </div>

          <div className="row g-4">
            {internshipTracks.map((item, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="card h-100 card-modern p-4">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: '50px', height: '50px', backgroundColor: 'var(--light-red)', color: 'var(--primary-red)' }}
                  >
                    <i className={`bi ${item.icon} fs-4`}></i>
                  </div>
                  <span className="badge-soft-red mb-2 align-self-start">{item.level}</span>
                  <h5 className="fw-bold mt-1 mb-2">{item.title}</h5>
                  <p className="text-secondary small flex-grow-1">{item.desc}</p>
                  <Link to="/pendaftaran" className="fw-semibold text-danger small mt-2 d-inline-flex align-items-center gap-1">
                    Daftar Bidang Ini <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/program-magang" className="btn btn-outline-red">
              Lihat Seluruh Program Magang <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. DIGITAL AGENCY SERVICES */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <span className="section-badge">Solusi Bisnis</span>
              <h2 className="fw-bold mb-3">Layanan Profesional Digital Agency</h2>
              <p className="text-secondary mb-0">
                Kami membantu UMKM hingga korporasi meningkatkan kehadiran digital, mendatangkan leads berkualitas, dan mengoptimalkan performa penjualan.
              </p>
            </div>
            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <i className="bi bi-whatsapp me-2"></i> Diskusi Kebutuhan Proyek
              </a>
            </div>
          </div>

          <div className="row g-4">
            {agencyServices.map((svc, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="card h-100 border p-4 rounded-4 hover-shadow transition">
                  <div className="text-danger mb-3 fs-2">
                    <i className={`bi ${svc.icon}`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{svc.title}</h5>
                  <p className="text-secondary small mb-0">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALUR PENDAFTARAN */}
      <section className="py-5 section-alt border-top border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="section-badge">Mudah & Cepat</span>
            <h2 className="fw-bold">Alur Pendaftaran Program Magang</h2>
            <p className="text-secondary">Hanya butuh 4 langkah mudah untuk memulai perjalanan karier Anda.</p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="p-3">
                <div className="rounded-circle bg-danger text-white fw-bold d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                  1
                </div>
                <h6 className="fw-bold">Pilih Bidang Minat</h6>
                <p className="small text-secondary">Tentukan program yang sesuai dengan jurusan sekolah/kuliah Anda.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <div className="rounded-circle bg-danger text-white fw-bold d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                  2
                </div>
                <h6 className="fw-bold">Isi Form Online</h6>
                <p className="small text-secondary">Lengkapi biodata dan motivasi pada formulir pendaftaran website.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <div className="rounded-circle bg-danger text-white fw-bold d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                  3
                </div>
                <h6 className="fw-bold">Nomor Registrasi</h6>
                <p className="small text-secondary">Dapatkan kode pendaftaran unik otomatis untuk verifikasi berkas.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <div className="rounded-circle bg-danger text-white fw-bold d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                  4
                </div>
                <h6 className="fw-bold">Konfirmasi WhatsApp</h6>
                <p className="small text-secondary">Admin kami akan menghubungi Anda untuk tahap onboarding magang.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-5 bg-white text-center">
        <div className="container py-4">
          <div 
            className="p-5 rounded-4 text-white text-center position-relative overflow-hidden"
            style={{ backgroundColor: 'var(--primary-red)' }}
          >
            <h2 className="display-6 fw-bold mb-3">Siap Mengembangkan Portofolio Nyata?</h2>
            <p className="lead fs-6 mb-4 opacity-90 mx-auto" style={{ maxWidth: '650px' }}>
              Bergabunglah bersama peserta magang lainnya dan asah keahlian praktis yang dicari oleh industri digital modern.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Link to="/pendaftaran" className="btn btn-light text-danger fw-bold px-4 py-2">
                Daftar Sekarang
              </Link>
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-light fw-bold px-4 py-2"
              >
                Konsultasi via WhatsApp (+62 895-6390-68080)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

