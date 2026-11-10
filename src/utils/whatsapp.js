/**
 * WhatsApp Helper sesuai PRD Platform Magang & Digital Agency Bab 3.8
 * Nomor default: +62 895-6390-68080
 */

export const DEFAULT_WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '62895639068080'

export function createWhatsAppUrl(message, phone = DEFAULT_WHATSAPP_NUMBER) {
  // Format nomor: hilangkan tanda +, -, spasi jika ada
  const cleanPhone = phone.replace(/[^0-9]/g, '')
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
}

export const WA_PRESET_MESSAGES = {
  home: 'Saya ingin mengetahui informasi program magang dan layanan digital agency',
  magangSmk: 'Saya ingin mendaftar program magang SMK (PKL)',
  magangMahasiswa: 'Saya ingin mendaftar program magang mahasiswa',
  digitalMarketing: 'Saya ingin konsultasi jasa digital marketing',
  webDevelopment: 'Saya ingin konsultasi pembuatan website / web development',
  seoWebsite: 'Saya ingin konsultasi optimasi SEO website',
  socialMedia: 'Saya ingin konsultasi jasa social media management',
  uiUx: 'Saya ingin konsultasi desain UI/UX & branding',
  multimedia: 'Saya ingin konsultasi layanan multimedia & pembuatan konten',
  general: 'Halo Admin, saya ingin konsultasi mengenai program magang / jasa agensi'
}

