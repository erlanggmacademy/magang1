import React from 'react'

export default function Blog() {
  const articles = [
    {
      title: 'Panduan Lengkap Mempersiapkan Diri Mengikuti Magang SMK (PKL) Bidang IT',
      date: '10 November 2026',
      category: 'Tips Magang',
      excerpt: 'Langkah awal yang wajib diketahui siswa jurusan RPL dan TKJ agar cepat beradaptasi dengan dunia kerja industri.'
    },
    {
      title: 'Perbedaan Magang Mahasiswa dan Siswa SMK: Apa Saja yang Dinilai Mentor?',
      date: '08 November 2026',
      category: 'Karier & Pendidikan',
      excerpt: 'Ekspektasi industri, perbedaan bobot tanggung jawab, dan cara menyusun portofolio hasil magang yang menarik.'
    },
    {
      title: '5 Alasan Mengapa Bisnis Perlu SEO Berkelanjutan Dibandingkan Hanya Mengandalkan Iklan',
      date: '05 November 2026',
      category: 'Digital Agency',
      excerpt: 'Membangun aset jangka panjang di halaman pertama Google untuk menghemat biaya akuisisi pelanggan secara signifikan.'
    }
  ]

  return (
    <div className="py-5">
      <div className="container py-3">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-badge">Artikel & Edukasi</span>
          <h1 className="fw-bold fs-2">Blog & Tips Pengembangan Karier Digital</h1>
          <p className="text-secondary small">
            Wawasan seputar dunia magang, persiapan karier teknologi, serta strategi digital marketing.
          </p>
        </div>

        <div className="row g-4">
          {articles.map((art, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="card h-100 card-modern p-4 d-flex flex-column">
                <span className="badge-soft-red mb-2 align-self-start">{art.category}</span>
                <small className="text-muted mb-2"><i className="bi bi-calendar3 me-1"></i> {art.date}</small>
                <h5 className="fw-bold text-dark mb-2">{art.title}</h5>
                <p className="text-secondary small flex-grow-1">{art.excerpt}</p>
                <div className="mt-auto pt-3 border-top">
                  <span className="text-danger fw-semibold small">
                    Baca Selengkapnya <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

