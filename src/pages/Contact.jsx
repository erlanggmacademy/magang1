import React, { useState } from 'react'
import { supabase } from '../services/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '62895639068080'
  const waUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Admin%20DigiMagang%2C%20saya%20ingin%20berkomunikasi.`

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await supabase.from('contact_messages').insert([formData])
      setSent(true)
    } catch (err) {
      // Offline fallback
      setSent(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-5">
      <div className="container py-3">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-badge">Hubungi Kami</span>
          <h1 className="fw-bold fs-2">Konsultasi Program Magang & Jasa Agency</h1>
          <p className="text-secondary small">
            Ada pertanyaan tentang persyaratan magang atau ingin bekerja sama dengan tim digital agency kami?
          </p>
        </div>

        <div className="row g-5 justify-content-center">
          <div className="col-lg-5">
            <div className="card card-modern p-4 p-md-5 h-100">
              <h4 className="fw-bold mb-3">Informasi Kontak</h4>
              <p className="text-secondary small mb-4">
                Tim kami siap merespons pertanyaan Anda setiap hari kerja (Senin - Jumat, 08.00 - 17.00 WIB).
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded bg-light p-2 text-danger fs-5">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <strong className="d-block text-dark small">WhatsApp Resmi</strong>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-dark fw-semibold">
                      +62 895-6390-68080
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="rounded bg-light p-2 text-danger fs-5">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <strong className="d-block text-dark small">Email Perusahaan</strong>
                    <span className="text-secondary">kontak@agensidigital.com</span>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="rounded bg-light p-2 text-danger fs-5">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <strong className="d-block text-dark small">Lokasi Operasional</strong>
                    <span className="text-secondary">Tersedia Program Magang Hybrid & Onsite</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-100 justify-content-center">
                  <i className="bi bi-whatsapp"></i> Hubungi WhatsApp Langsung
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card card-modern p-4 p-md-5">
              <h4 className="fw-bold mb-3">Kirimkan Pesan</h4>
              {sent ? (
                <div className="alert alert-success py-4 text-center">
                  <i className="bi bi-check-circle-fill fs-2 d-block mb-2"></i>
                  <h5 className="fw-bold">Pesan Terkirim!</h5>
                  <p className="small mb-0">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold">Nama Lengkap *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold">Nomor WhatsApp *</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Alamat Email *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Subjek Pesan</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Contoh: Pertanyaan Kemitraan Magang SMK / Permintaan Jasa SEO"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold">Pesan Anda *</label>
                      <textarea 
                        className="form-control" 
                        rows="4" 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn btn-primary-red w-100 fw-bold" disabled={isSubmitting}>
                        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

