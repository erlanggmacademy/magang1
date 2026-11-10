import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Programs() {
  const { category } = useParams()
  const [filterLevel, setFilterLevel] = useState(
    category === 'smk' ? 'smk' : category === 'mahasiswa' ? 'mahasiswa' : 'all'
  )

  const allPrograms = [
    {
      id: 'web-dev',
      slug: 'rpl',
      title: 'Magang Web Development (RPL / Informatika)',
      education_level: 'both',
      major: 'Rekayasa Perangkat Lunak / TI',
      mode: 'Hybrid',
      duration: '3 - 6 Bulan',
      description: 'Membangun aplikasi web interaktif responsif modern dengan stack React, Vite, Node.js, dan Supabase PostgreSQL.',
      skills: ['React.js', 'REST API', 'PostgreSQL', 'Git & GitHub', 'Bootstrap CSS']
    },
    {
      id: 'seo-marketing',
      slug: 'digital-marketing',
      title: 'Magang Digital Marketing & SEO Specialist',
      education_level: 'both',
      major: 'Bisnis Digital & Manajemen Pemasaran',
      mode: 'Hybrid',
      duration: '3 - 6 Bulan',
      description: 'Mempelajari audit teknis SEO, riset keyword, konten pemasaran konversi, serta kampanye iklan digital berbayar.',
      skills: ['SEO On-Page/Off-Page', 'Google Analytics 4', 'Content Strategy', 'Copywriting']
    },
    {
      id: 'ui-ux',
      slug: 'multimedia',
      title: 'Magang UI/UX & Graphic Design',
      education_level: 'both',
      major: 'Desain Komunikasi Visual (DKV) & Multimedia',
      mode: 'Hybrid',
      duration: '3 - 6 Bulan',
      description: 'Riset kebutuhan pengguna, wireframing, high-fidelity UI design di Figma, serta perancangan identitas visual merek.',
      skills: ['Figma Prototyping', 'User Research', 'Design System', 'Adobe Illustrator']
    },
    {
      id: 'tkj',
      slug: 'tkj',
      title: 'Magang Jaringan Komputer & IT Support',
      education_level: 'smk',
      major: 'Teknik Komputer dan Jaringan (TKJ)',
      mode: 'Onsite',
      duration: '3 - 6 Bulan',
      description: 'Praktik langsung manajemen jaringan lokal, routing MikroTik, konfigurasi server Linux, dan troubleshooting IT.',
      skills: ['MikroTik', 'Linux Server', 'Cabling & LAN', 'IT Troubleshooting']
    },
    {
      id: 'social-media',
      slug: 'bisnis-digital',
      title: 'Magang Social Media Specialist & Content Creator',
      education_level: 'both',
      major: 'Bisnis Digital / Multimedia / Ilmu Komunikasi',
      mode: 'Hybrid',
      duration: '3 - 6 Bulan',
      description: 'Memproduksi konten reels, short video, feed branding, dan manajemen kalender editorial media sosial agensi.',
      skills: ['Video Editing', 'CapCut / Premiere', 'Social Analytics', 'Content Calendar']
    }
  ]

  const filteredPrograms = allPrograms.filter((p) => {
    if (filterLevel === 'all') return true
    return p.education_level === filterLevel || p.education_level === 'both'
  })

  return (
    <div className="py-5">
      <div className="container py-3">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-badge">Program Magang</span>
          <h1 className="fw-bold fs-2">Pilihan Program Magang SMK & Mahasiswa</h1>
          <p className="text-secondary small">
            Pilih program yang selaras dengan bidang keahlian dan jurusan sekolah atau kampus Anda.
          </p>

          {/* Filter Pills */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            <button 
              className={`btn btn-sm ${filterLevel === 'all' ? 'btn-danger' : 'btn-outline-secondary'}`}
              onClick={() => setFilterLevel('all')}
            >
              Semua Jenjang
            </button>
            <button 
              className={`btn btn-sm ${filterLevel === 'smk' ? 'btn-danger' : 'btn-outline-secondary'}`}
              onClick={() => setFilterLevel('smk')}
            >
              Siswa SMK (PKL)
            </button>
            <button 
              className={`btn btn-sm ${filterLevel === 'mahasiswa' ? 'btn-danger' : 'btn-outline-secondary'}`}
              onClick={() => setFilterLevel('mahasiswa')}
            >
              Mahasiswa
            </button>
          </div>
        </div>

        <div className="row g-4">
          {filteredPrograms.map((prog) => (
            <div key={prog.id} className="col-lg-6">
              <div className="card h-100 card-modern p-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge-soft-red">{prog.major}</span>
                  <span className="badge bg-light text-dark border">{prog.mode}</span>
                </div>
                <h4 className="fw-bold text-dark mt-2 mb-2">{prog.title}</h4>
                <p className="text-secondary small mb-3">{prog.description}</p>

                <div className="mb-3">
                  <small className="fw-semibold text-dark d-block mb-2">Kompetensi yang Dipelajari:</small>
                  <div className="d-flex flex-wrap gap-1">
                    {prog.skills.map((s, i) => (
                      <span key={i} className="badge bg-light text-secondary border small">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-3 mt-auto border-top">
                  <small className="text-muted"><i className="bi bi-clock me-1"></i> {prog.duration}</small>
                  <Link to="/pendaftaran" className="btn btn-sm btn-primary-red">
                    Daftar Bidang Ini <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

