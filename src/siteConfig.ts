// Datos de contacto y configuración general del sitio.
// Fuente: perfil de Instagram https://www.instagram.com/albavets/

export const siteConfig = {
  name: 'AlbaVets',
  tagline: 'Veterinaria a domicilio',
  vetName: 'Dra. Daniela Zapata S.',
  vetTitle: 'Médico Veterinario',
  location: 'Valle del Aconcagua, Chile',
  whatsappNumber: '56971882940',
  whatsappDisplay: '+56 9 7188 2940',
  instagramHandle: '@albavets',
  instagramUrl: 'https://www.instagram.com/albavets/',
  whatsappMessage:
    'Hola AlbaVets, me gustaría agendar una hora para mi mascota 🐾',
} as const

export const whatsappLink = (message: string = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
