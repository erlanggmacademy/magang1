import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { supabase } from '../../services/supabase'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [checkingSession, setCheckingSession] = useState(true)

  const navigate = useNavigate()
  const location = useLocation()
  const destination = location.state?.from?.pathname || '/admin'

  // Cek apakah admin sudah login sebelumnya
  useEffect(() => {
    async function checkExistingSession() {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          navigate(destination, { replace: true })
        }
      } catch (err) {
        console.warn('Session check failed:', err)
      } finally {
        setCheckingSession(false)
      }
    }

    checkExistingSession()
  }, [navigate, destination])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg(null)

    // Cek apakah env masih bernilai placeholder
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
    if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
      setErrorMsg(
        'Konfigurasi Supabase belum diisi di file .env! Silakan masukkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY dari dashboard Supabase Anda terlebih dahulu.'
      )
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password
      })

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          throw new Error('Email atau password salah. Pastikan akun sudah dibuat di Supabase Auth.')
        } else if (error.message.includes('Email not confirmed')) {
          throw new Error('Email belum dikonfirmasi. Pastikan opsi "Auto Confirm Email" aktif di Supabase.')
        } else {
          throw error
        }
      }

      if (data?.session) {
        navigate(destination, { replace: true })
      }
    } catch (err) {
      console.error('Login error:', err)
      setErrorMsg(err.message || 'Terjadi kesalahan saat masuk. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  if (checkingSession) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Memeriksa sesi...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="section-alt min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
            
            {/* Header / Logo */}
            <div className="text-center mb-4">
              <Link to="/" className="d-inline-flex align-items-center gap-2 text-decoration-none mb-3">
                <div 
                  className="d-flex align-items-center justify-content-center text-white rounded-3 fw-bold shadow-sm"
                  style={{ width: '46px', height: '46px', backgroundColor: 'var(--primary-red)' }}
                >
                  <i className="bi bi-briefcase-fill fs-4"></i>
                </div>
                <div className="text-start">
                  <span className="fw-bold fs-5 text-dark d-block lh-1">DigiMagang</span>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>& Digital Agency</small>
                </div>
              </Link>
              <h2 className="fw-bold fs-4 text-dark mb-1">Masuk Panel Admin</h2>
              <p className="text-secondary small mb-0">Halaman terbatas untuk pengelola dan staf agensi</p>
            </div>

            {/* Login Card */}
            <div className="card card-modern p-4 p-md-4 shadow-sm border-0">
              {errorMsg && (
                <div className="alert alert-danger d-flex align-items-start gap-2 small py-2 mb-3" role="alert">
                  <i className="bi bi-exclamation-triangle-fill fs-6 mt-1 flex-shrink-0"></i>
                  <div>{errorMsg}</div>
                </div>
              )}

              <form onSubmit={handleLogin} noValidate>
                {/* Email Input */}
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-dark">
                    Email Admin <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input 
                      type="email" 
                      className="form-control border-start-0 ps-0"
                      placeholder="admin@agensidigital.com"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Input with Toggle */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="form-label small fw-semibold text-dark mb-0">
                      Password <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0 text-muted">
                      <i className="bi bi-key"></i>
                    </span>
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      className="form-control border-start-0 border-end-0 ps-0"
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="input-group-text bg-light border-start-0 text-muted"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex="-1"
                      aria-label={showPassword ? 'Sembunyikan password' : 'Lihat password'}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn btn-primary-red w-100 py-2 fw-semibold shadow-sm"
                  disabled={loading}
                >
                  {loading ? (
                    <span>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Memverifikasi...
                    </span>
                  ) : (
                    <span>
                      <i className="bi bi-box-arrow-in-right me-2"></i> Masuk Sekarang
                    </span>
                  )}
                </button>
              </form>

              {/* Info Box untuk Setup Pertama Kali */}
              <div className="alert alert-light border small text-muted mt-4 mb-0 py-2 px-3">
                <i className="bi bi-info-circle text-primary me-1"></i>
                Belum punya akun admin? Anda dapat menambahkannya melalui menu <strong>Authentication &gt; Users</strong> di dashboard Supabase Anda.
              </div>
            </div>

            {/* Back Link */}
            <div className="text-center mt-4">
              <Link to="/" className="text-secondary small text-decoration-none">
                <i className="bi bi-arrow-left me-1"></i> Kembali ke Halaman Utama Website
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
