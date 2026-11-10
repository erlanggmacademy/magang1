import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '62895639068080'
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20layanan%20digital%20agency.`

  const services = [
    {
      title: 'Digital Marketing & Strategy',
      slug: 'digital-marketing',
      icon: 'bi-bullseye',
      desc: 'Penyusunan strategi pemasaran online holistik untuk meningkatkan brand awareness dan penjualan produk Anda.',
      features: ['Audit Pasar & Kompetitor', 'Meta Ads & Google Ads', 'Content Planning & Funneling', 'Laporan Analitik Mingguan']
    },
    {
      title: 'Search Engine Optimization (SEO)',
      slug: 'seo-website',
      icon: 'bi-graph-up-arrow',
      desc: 'Meningkatkan posisi website Anda di halaman pertama Google secara organik dengan teknik SEO putih berkelanjutan.',
      features: ['Technical SEO Audit', 'Keyword & Competitor Research', 'On-Page Content Optimization', 'Quality Backlink Building']
    },
    {
      title: 'Social Media Management',
      slug: 'social-media-management',
      icon: 'bi-instagram',
      desc: 'Pengelolaan feed, carousel, reels, dan stories Instagram, TikTok, serta LinkedIn bisnis secara profesional.',
      features: ['Copywriting Menjual', 'Desain Visual & Motion Graphics', 'Jadwal Posting Konsisten', 'Community Management & Balas DM']
    },
    {
      title: 'Web & App Development',
      slug: 'web-development',
      icon: 'bi-code-slash',
      desc: 'Pembuatan website profil perusahaan, portal edukasi, web app, maupun e-commerce dengan loading super cepat.',
      features: ['React & Modern Tech Stack', 'Mobile-Friendly Responsive', 'Integrasi Database Aman', 'Optimasi SEO & Kecepatan']
    },
    {
      title: 'UI/UX & Product Design',
      slug: 'ui-ux-design',
      icon: 'bi-palette',
      desc: 'Merancang antarmuka aplikasi dan web yang indah, intuitif, dan memaksimalkan kenyamanan pengunjung.',
      features: ['Wireframing & User Flow', 'Interactive Figma Prototype', 'Design System Standar', 'Usability Testing']
    },
    {
      title: 'Multimedia & Content Creation',
      slug: 'multimedia',
      icon: 'bi-camera-video',
      desc: 'Produksi video promosi produk, visual identity, bumper logo, dan aset grafis berkualitas tinggi untuk promosi digital.',
      features: ['Video Editing Reels & TikTok', 'Company Profile Video', 'Fotografi Produk', 'Graphic Design Promosi']
    }
  ]

  return (
    <div className="py-5">
      <div className="container py-3">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-badge">Solusi Digital</span>
          <h1 className="fw-bold fs-2">Layanan Profesional Digital Agency</h1>
          <p className="text-secondary small">
            Solusi digital komprehensif untuk membantu bisnis Anda berkembang cepat di era internet.
          </p>
        </div>

        <div className="row g-4">
          {services.map((svc, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="card h-100 card-modern p-4">
                <div 
                  className="rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '48px', height: '48px', backgroundColor: 'var(--light-red)', color: 'var(--primary-red)' }}
                >
                  <i className={`bi ${svc.icon} fs-4`}></i>
                </div>
                <h4 className="fw-bold fs-5 text-dark mb-2">{svc.title}</h4>
                <p className="text-secondary small mb-3">{svc.desc}</p>

                <h6 className="fw-semibold small text-dark mb-2">Cakupan Layanan:</h6>
                <ul className="list-unstyled small text-secondary d-flex flex-column gap-1 mb-4">
                  {svc.features.map((f, i) => (
                    <li key={i}><i className="bi bi-check2 text-danger me-2"></i>{f}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-3 border-top">
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo Admin, saya tertarik konsultasi mengenai layanan ${svc.title}.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-red btn-sm w-100"
                  >
                    Konsultasi Layanan Ini <i className="bi bi-whatsapp ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

