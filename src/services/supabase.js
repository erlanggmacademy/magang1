import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('placeholder')) {
  console.warn(
    '[Supabase] Warning: URL atau Anon Key Supabase belum dikonfigurasi di file .env. Pastikan mengisi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY dari dashboard Supabase Anda.'
  )
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)

