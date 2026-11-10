import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { supabase } from '../../services/supabase'

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let mounted = true

    async function checkSession() {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Session check error:', error)
          if (mounted) setAuthenticated(false)
        } else if (session?.user) {
          if (mounted) setAuthenticated(true)
        } else {
          if (mounted) setAuthenticated(false)
        }
      } catch (err) {
        console.error('Unexpected auth check error:', err)
        if (mounted) setAuthenticated(false)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    checkSession()

    // Dengarkan perubahan state auth secara real-time
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setAuthenticated(!!session?.user)
        setLoading(false)
      }
    })

    return () => {
      mounted = false
      subscription?.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
        <div className="spinner-border text-danger mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-secondary fw-semibold">Memverifikasi hak akses admin...</p>
      </div>
    )
  }

  if (!authenticated) {
    // Redirect ke /admin/login dan simpan URL sebelumnya
    return <Navigate to="/admin/login" state={{ from: location }} replace />
  }

  return children
}

