import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../../services/supabase'

export default function AdminDashboard() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function checkAuthAndLoadData() {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)

        // Fetch applications from Supabase
        const { data, error } = await supabase
          .from('applications')
          .select('*')
          .order('created_at', { ascending: false })

        if (!error && data) {
          setApplications(data)
        } else {
          // Dummy data preview jika koneksi live belum terisi
          setApplications([
            {
              id: '1',
              registration_number: 'REG-202611-0001',
              full_name: 'Ahmad Faiz',
              email: 'ahmad.faiz@example.com',
              phone: '081234567891',
              education_level: 'smk',
              institution: 'SMKN 1 Surabaya',
              major: 'Rekayasa Perangkat Lunak',
              status: 'pending',
              created_at: new Date().toISOString()
            },
            {
              id: '2',
              registration_number: 'REG-202611-0002',
              full_name: 'Siti Rahmawati',
              email: 'siti.rahma@example.com',
              phone: '081234567892',
              education_level: 'mahasiswa',
              institution: 'Universitas Brawijaya',
              major: 'Bisnis Digital',
              status: 'accepted',
              created_at: new Date().toISOString()
            }
          ])
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
      } finally {
        setLoading(false)
      }
    }

    checkAuthAndLoadData()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const updateStatus = async (id, newStatus) => {
    try {
      await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', id)

      setApplications(prev =>
        prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
      )
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'accepted':
        return <span className="badge bg-success">Diterima</span>
      case 'rejected':
        return <span className="badge bg-danger">Ditolak</span>
      case 'reviewing':
        return <span className="badge bg-warning text-dark">Dalam Review</span>
      default:
        return <span className="badge bg-secondary">Menunggu (Pending)</span>
    }
  }

  return (
    <div className="section-alt min-vh-100 py-4">
      <div className="container">
        {/* Top Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom bg-white p-3 rounded-3 shadow-sm">
          <div>
            <span className="badge bg-danger mb-1">Admin Dashboard</span>
            <h4 className="fw-bold text-dark mb-0">Manajemen Pendaftaran Magang</h4>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="small text-secondary">{user?.email || 'admin@agensidigital.com'}</span>
            <Link to="/" className="btn btn-sm btn-outline-secondary">
              <i className="bi bi-box-arrow-up-right me-1"></i> Website
            </Link>
            <button onClick={handleLogout} className="btn btn-sm btn-outline-danger">
              <i className="bi bi-box-arrow-right me-1"></i> Keluar
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="row g-3 mb-4">
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 rounded-3">
              <small className="text-secondary fw-semibold">Total Pendaftar</small>
              <h3 className="fw-bold mb-0 text-dark">{applications.length}</h3>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 rounded-3">
              <small className="text-secondary fw-semibold">Menunggu Review</small>
              <h3 className="fw-bold mb-0 text-warning">
                {applications.filter(a => a.status === 'pending').length}
              </h3>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 rounded-3">
              <small className="text-secondary fw-semibold">Diterima</small>
              <h3 className="fw-bold mb-0 text-success">
                {applications.filter(a => a.status === 'accepted').length}
              </h3>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="card border-0 shadow-sm p-3 rounded-3">
              <small className="text-secondary fw-semibold">Ditolak</small>
              <h3 className="fw-bold mb-0 text-danger">
                {applications.filter(a => a.status === 'rejected').length}
              </h3>
            </div>
          </div>
        </div>

        {/* Applicants Table */}
        <div className="card border-0 shadow-sm rounded-3">
          <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
            <h6 className="fw-bold mb-0 text-dark">Daftar Formulir Masuk</h6>
            <span className="small text-muted">{applications.length} Data Pendaftar</span>
          </div>
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr className="small text-secondary">
                  <th>No. Registrasi</th>
                  <th>Nama Lengkap</th>
                  <th>Jenjang & Asal Sekolah</th>
                  <th>Jurusan</th>
                  <th>Kontak</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="small">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-secondary">Memuat data...</td>
                  </tr>
                ) : applications.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-secondary">Belum ada pendaftaran masuk.</td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr key={app.id}>
                      <td className="fw-bold text-danger">{app.registration_number || 'N/A'}</td>
                      <td>
                        <span className="fw-semibold d-block text-dark">{app.full_name}</span>
                        <small className="text-muted">{new Date(app.created_at).toLocaleDateString('id-ID')}</small>
                      </td>
                      <td>
                        <span className="badge bg-light text-dark border me-1 text-uppercase">{app.education_level}</span>
                        <span>{app.institution}</span>
                      </td>
                      <td>{app.major}</td>
                      <td>
                        <a 
                          href={`https://wa.me/${app.phone?.replace(/[^0-9]/g, '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-success py-0 px-2"
                        >
                          <i className="bi bi-whatsapp"></i> {app.phone}
                        </a>
                      </td>
                      <td>{getStatusBadge(app.status)}</td>
                      <td>
                        <select 
                          className="form-select form-select-sm"
                          value={app.status}
                          onChange={(e) => updateStatus(app.id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewing">Review</option>
                          <option value="accepted">Terima</option>
                          <option value="rejected">Tolak</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

