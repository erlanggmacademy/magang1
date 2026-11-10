import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '62895639068080'
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Admin%2C%20saya%20ingin%20tanya%20profil%20perusahaan%20dan%20kemitraan%20magang.`

  return (
    <div className="py-5">
      <div className="container py-3">
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <span className="section-badge">Tentang Kami</span>
            <h1 className="fw-bold display-6 mb-3">Mempersiapkan Talenta Digital Unggul Masa Depan</h1>
            <p className="text-secondary lead fs-6">
              DigiMagang & Digital Agency adalah entitas terintegrasi yang bergerak di bidang layanan pemasaran digital, pengembangan web, serta penyelenggaraan program magang kejuruan untuk siswa SMK dan mahasiswa.
            </p>
            <p className="text-secondary small">
              Kami percaya bahwa jurang antara teori akademis dan kebutuhan industri dapat dijembatani melalui pembelajaran berbasis proyek nyata (project-based learning) dengan bimbingan mentor praktisi.
            </p>
            <div className="d-flex gap-3 mt-4">
              <Link to="/program-magang" className="btn btn-primary-red">
                Eksplor Program Magang
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <i className="bi bi-whatsapp me-1"></i> Kontak Kemitraan
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 p-md-5 rounded-4 bg-light border shadow-sm">
              <h4 className="fw-bold text-danger mb-3">Visi & Misi Kami</h4>
              <div className="mb-4">
                <h6 className="fw-bold"><i className="bi bi-eye-fill text-danger me-2"></i> Visi</h6>
                <p className="small text-secondary mb-0">
                  Menjadi ekosistem akselerasi talenta digital dan mitra digital agency tepercaya yang menghasilkan solusi bernilai tambah bagi klien dan generasi muda.
                </p>
              </div>
              <div>
                <h6 className="fw-bold"><i className="bi bi-bullseye text-danger me-2"></i> Misi</h6>
                <ul className="small text-secondary ps-3 mb-0 d-flex flex-column gap-2">
                  <li>Memberikan pengalaman kerja riil dalam lingkungan digital agency profesional.</li>
                  <li>Membekali peserta magang dengan standar kualitas portofolio industri.</li>
                  <li>Menghadirkan layanan digital marketing dan web development yang terukur dan berdampak bagi UMKM dan korporasi.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Metode Pembelajaran */}
        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="card h-100 p-4 border rounded-4 text-center">
              <div className="fs-1 text-danger mb-2"><i className="bi bi-laptop"></i></div>
              <h5 className="fw-bold">Project-Based Learning</h5>
              <p className="small text-secondary mb-0">Peserta tidak hanya diberi materi pasif, namun dilibatkan langsung dalam pengerjaan proyek nyata.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 border rounded-4 text-center">
              <div className="fs-1 text-danger mb-2"><i className="bi bi-people-fill"></i></div>
              <h5 className="fw-bold">Bimbingan Praktisi</h5>
              <p className="small text-secondary mb-0">Didampingi mentor berpengalaman yang memberikan feedback langsung secara berkala.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 border rounded-4 text-center">
              <div className="fs-1 text-danger mb-2"><i className="bi bi-award-fill"></i></div>
              <h5 className="fw-bold">Portofolio & Sertifikat</h5>
              <p className="small text-secondary mb-0">Lulusan memiliki bukti karya nyata yang siap digunakan saat melamar pekerjaan profesional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

