import React from 'react'

export default function Portfolio() {
  const portfolios = [
    {
      title: 'Redesign & Web App LMS Edukasi',
      client: 'Platform Kursus Digital',
      category: 'Web Development & UI/UX',
      desc: 'Membangun ulang arsitektur frontend dengan React dan mengoptimasi waktu pemuatan halaman hingga 65% lebih cepat.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Kampanye SEO Organik Industri F&B',
      client: 'Brand Kuliner Nusantara',
      category: 'SEO Website',
      desc: 'Menaikkan 15 kata kunci utama ke Top 3 Google, meningkatkan traffic organik hingga 320% dalam 4 bulan.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80'
    },
    {
      title: 'Branding & Social Media Growth',
      client: 'Startup Retail Fashion',
      category: 'Social Media Management',
      desc: 'Manajemen visual feed, produksi 30 reels per bulan, dan kenaikan engagement akun organik lebih dari 400%.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80'
    }
  ]

  return (
    <div className="py-5">
      <div className="container py-3">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-badge">Hasil Kerja</span>
          <h1 className="fw-bold fs-2">Portofolio Klien & Proyek Peserta Magang</h1>
          <p className="text-secondary small">
            Sebagian proyek nyata yang dikerjakan oleh tim digital agency bersama talenta magang kami.
          </p>
        </div>

        <div className="row g-4">
          {portfolios.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="card h-100 card-modern">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="card-img-top" 
                  style={{ height: '200px', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="card-body p-4 d-flex flex-column">
                  <span className="badge-soft-red mb-2 align-self-start">{item.category}</span>
                  <h5 className="fw-bold text-dark mb-1">{item.title}</h5>
                  <small className="text-muted mb-2">Klien: {item.client}</small>
                  <p className="text-secondary small flex-grow-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

