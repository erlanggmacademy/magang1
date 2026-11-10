import React from 'react'

export default function WhatsAppButton() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '62895639068080'
  const defaultMessage = import.meta.env.VITE_WHATSAPP_MESSAGE || 'Halo Admin, saya ingin konsultasi mengenai program magang / jasa agency.'
  
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(decodeURIComponent(defaultMessage))}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Konsultasi via WhatsApp"
      aria-label="Chat WhatsApp Admin"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  )
}

