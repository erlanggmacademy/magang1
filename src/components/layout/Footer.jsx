import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '62895639068080'
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Admin%20DigiMagang%2C%20saya%20ingin%20bertanya.`

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Kolom 1: Profil Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="d-flex align-items-center justify-content-center text-white rounded-3 fw-bold"
                style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary-red)' }}
              >
                <i className="bi bi-briefcase-fill fs-5"></i>
              </div>
              <span className="fw-bold fs-5 text-white">DigiMagang & Agency</span>
            </div>
            <p className="text-secondary small mb-3">
              Platform program magang siswa SMK dan mahasiswa serta solusi digital agency terpercaya. Membantu talenta muda mengasah keterampilan industri melalui pengalaman kerja berbasis proyek nyata.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle p-2" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle p-2" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle p-2" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Kolom 2: Program Magang */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-white fw-bold mb-3">Program Magang</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link to="/program-magang/smk" className="text-secondary hover-white">Magang SMK (PKL)</Link></li>
              <li><Link to="/program-magang/mahasiswa" className="text-secondary hover-white">Magang Mahasiswa</Link></li>
              <li><Link to="/program-magang/rpl" className="text-secondary hover-white">Web & Software (RPL)</Link></li>
              <li><Link to="/program-magang/digital-marketing" className="text-secondary hover-white">Digital Marketing</Link></li>
              <li><Link to="/program-magang/multimedia" className="text-secondary hover-white">UI/UX & Multimedia</Link></li>
              <li><Link to="/pendaftaran" className="text-danger fw-semibold">Form Pendaftaran</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Agency */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-white fw-bold mb-3">Layanan Agency</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link to="/jasa/web-development" className="text-secondary hover-white">Web Development</Link></li>
              <li><Link to="/jasa/seo-website" className="text-secondary hover-white">SEO Optimization</Link></li>
              <li><Link to="/jasa/digital-marketing" className="text-secondary hover-white">Digital Marketing</Link></li>
              <li><Link to="/jasa/social-media-management" className="text-secondary hover-white">Social Media</Link></li>
              <li><Link to="/jasa/ui-ux-design" className="text-secondary hover-white">UI/UX Design</Link></li>
              <li><Link to="/portofolio" className="text-secondary hover-white">Portofolio Klien</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami */}
          <div className="col-lg-4 col-md-6">
            <h6 className="text-white fw-bold mb-3">Hubungi Kami</h6>
            <ul className="list-unstyled small text-secondary d-flex flex-column gap-2">
              <li className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt text-danger mt-1"></i>
                <span>Indonesia (Tersedia Onsite & Hybrid)</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-whatsapp text-success"></i>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-white fw-semibold">
                  +62 895-6390-68080
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope text-danger"></i>
                <span>kontak@agensidigital.com</span>
              </li>
            </ul>
            <div className="mt-3">
              <a 
                href={waUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-sm w-100 justify-content-center"
              >
                <i className="bi bi-whatsapp"></i> Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary opacity-25" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary pt-2 gap-2">
          <span>&copy; {new Date().getFullYear()} DigiMagang & Digital Agency. Seluruh hak cipta dilindungi.</span>
          <div className="d-flex gap-3">
            <Link to="/kebijakan-privasi" className="text-secondary">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan" className="text-secondary">Syarat & Ketentuan</Link>
            <Link to="/admin/login" className="text-secondary"><i className="bi bi-lock-fill"></i> Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

