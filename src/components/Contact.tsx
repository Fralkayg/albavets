import Button from '@mui/material/Button'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { siteConfig, whatsappLink } from '../siteConfig'

export default function Contact() {
  return (
    <section id="contacto" className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-14 text-center text-white shadow-xl sm:px-12">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            ¿Agendamos una visita para tu mascota?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-50/90">
            Escríbenos por WhatsApp y coordinamos la consulta en la comodidad de tu hogar, en el
            Valle del Aconcagua.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              sx={{
                bgcolor: 'white',
                color: 'primary.dark',
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              {siteConfig.whatsappDisplay}
            </Button>
            <Button
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              startIcon={<InstagramIcon />}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              {siteConfig.instagramHandle}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1.5 text-sm text-brand-50/80">
            <LocationOnIcon fontSize="small" />
            {siteConfig.location}
          </div>
        </div>
      </div>
    </section>
  )
}
