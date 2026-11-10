import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Registration from './pages/Registration'
import Contact from './pages/Contact'
import AdminLogin from './pages/admin/Login'
import AdminDashboard from './pages/admin/Dashboard'
import ProtectedRoute from './components/admin/ProtectedRoute'

function Layout({ children }) {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <div className="d-flex flex-column min-vh-100">
      {!isAdmin && <Navbar />}
      <main className="flex-grow-1">{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<About />} />
          
          {/* Program Magang */}
          <Route path="/program-magang" element={<Programs />} />
          <Route path="/program-magang/:category" element={<ProgramDetail />} />

          {/* Jasa Agency */}
          <Route path="/jasa" element={<Services />} />
          <Route path="/jasa/:slug" element={<Services />} />

          {/* Portofolio & Blog */}
          <Route path="/portofolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />

          {/* Pendaftaran & Kontak */}
          <Route path="/pendaftaran" element={<Registration />} />
          <Route path="/kontak" element={<Contact />} />

          {/* Admin CMS (Dilindungi: Wajib Login Terlebih Dahulu) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Fallback 404 */}
          <Route
            path="*"
            element={
              <div className="container py-5 text-center my-5">
                <h1 className="display-4 fw-bold text-danger">404</h1>
                <p className="lead text-secondary">Halaman yang Anda cari tidak ditemukan.</p>
                <a href="/" className="btn btn-primary-red">
                  Kembali ke Beranda
                </a>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  )
}
