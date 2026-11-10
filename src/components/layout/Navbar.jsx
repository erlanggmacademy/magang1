import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
  const closeNav = () => setIsNavCollapsed(true)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom py-3">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2" onClick={closeNav}>
          <div 
            className="d-flex align-items-center justify-content-center text-white rounded-3 fw-bold"
            style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary-red)' }}
          >
            <i className="bi bi-briefcase-fill fs-5"></i>
          </div>
          <div>
            <span className="fw-bold fs-5 text-dark d-block lh-1">DigiMagang</span>
            <small className="text-muted" style={{ fontSize: '0.75rem' }}>& Digital Agency</small>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-controls="navbarMain"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarMain">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link fw-semibold ${isActive ? 'text-danger' : 'text-dark'}`}
                onClick={closeNav}
                end
              >
                Beranda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/tentang-kami" 
                className={({ isActive }) => `nav-link fw-semibold ${isActive ? 'text-danger' : 'text-dark'}`}
                onClick={closeNav}
              >
                Tentang Kami
              </NavLink>
            </li>

            {/* Dropdown Program Magang */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle fw-semibold text-dark" 
                href="#" 
                id="magangDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Program Magang
              </a>
              <ul className="dropdown-menu border-0 shadow-sm rounded-3 py-2" aria-labelledby="magangDropdown">
                <li><Link className="dropdown-item py-2" to="/program-magang" onClick={closeNav}>Semua Program</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><span className="dropdown-header text-uppercase fs-xs fw-bold text-danger">Jenjang</span></li>
                <li><Link className="dropdown-item py-2" to="/program-magang/smk" onClick={closeNav}>Magang Siswa SMK (PKL)</Link></li>
                <li><Link className="dropdown-item py-2" to="/program-magang/mahasiswa" onClick={closeNav}>Magang Mahasiswa</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><span className="dropdown-header text-uppercase fs-xs fw-bold text-danger">Bidang / Jurusan</span></li>
                <li><Link className="dropdown-item py-2" to="/program-magang/rpl" onClick={closeNav}>Rekayasa Perangkat Lunak (RPL)</Link></li>
                <li><Link className="dropdown-item py-2" to="/program-magang/informatika" onClick={closeNav}>Teknik Informatika & SI</Link></li>
                <li><Link className="dropdown-item py-2" to="/program-magang/digital-marketing" onClick={closeNav}>Digital Marketing & SEO</Link></li>
                <li><Link className="dropdown-item py-2" to="/program-magang/multimedia" onClick={closeNav}>Multimedia & DKV</Link></li>
              </ul>
            </li>

            {/* Dropdown Jasa Agency */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle fw-semibold text-dark" 
                href="#" 
                id="jasaDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Jasa Agency
              </a>
              <ul className="dropdown-menu border-0 shadow-sm rounded-3 py-2" aria-labelledby="jasaDropdown">
                <li><Link className="dropdown-item py-2" to="/jasa" onClick={closeNav}>Semua Layanan</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item py-2" to="/jasa/web-development" onClick={closeNav}>Web Development</Link></li>
                <li><Link className="dropdown-item py-2" to="/jasa/seo-website" onClick={closeNav}>SEO Website</Link></li>
                <li><Link className="dropdown-item py-2" to="/jasa/digital-marketing" onClick={closeNav}>Digital Marketing</Link></li>
                <li><Link className="dropdown-item py-2" to="/jasa/social-media-management" onClick={closeNav}>Social Media Management</Link></li>
                <li><Link className="dropdown-item py-2" to="/jasa/ui-ux-design" onClick={closeNav}>UI/UX Design</Link></li>
                <li><Link className="dropdown-item py-2" to="/jasa/multimedia" onClick={closeNav}>Multimedia & Content</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink 
                to="/portofolio" 
                className={({ isActive }) => `nav-link fw-semibold ${isActive ? 'text-danger' : 'text-dark'}`}
                onClick={closeNav}
              >
                Portofolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/blog" 
                className={({ isActive }) => `nav-link fw-semibold ${isActive ? 'text-danger' : 'text-dark'}`}
                onClick={closeNav}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/kontak" 
                className={({ isActive }) => `nav-link fw-semibold ${isActive ? 'text-danger' : 'text-dark'}`}
                onClick={closeNav}
              >
                Kontak
              </NavLink>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Link to="/pendaftaran" className="btn btn-primary-red w-100" onClick={closeNav}>
              <i className="bi bi-pencil-square me-1"></i> Daftar Magang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

