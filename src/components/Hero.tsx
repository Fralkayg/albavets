import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import { siteConfig, whatsappLink } from '../siteConfig'
import flyer from '../assets/images/flyer.jpg'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-200/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-sun-400/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <Chip
            icon={<LocationOnIcon />}
            label={siteConfig.location}
            color="primary"
            variant="outlined"
            sx={{ bgcolor: 'white', mb: 3 }}
          />

          <h1 className="font-display text-4xl font-bold leading-tight text-brand-900 sm:text-5xl">
            Atención veterinaria
            <span className="text-brand-600"> en la comodidad de tu hogar</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Soy la {siteConfig.vetTitle.toLowerCase()} {siteConfig.vetName}. Realizo consultas,
            vacunación, evaluación y tratamiento a domicilio, con atención personalizada y
            mucho cariño para tu mascota, sin el estrés de salir de casa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              color="primary"
              startIcon={<WhatsAppIcon />}
            >
              Agendar por WhatsApp
            </Button>
            <Button href="#servicios" variant="outlined" size="large" color="primary">
              Ver servicios
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <HomeIcon fontSize="small" className="text-brand-600" /> Visitas a domicilio
            </span>
            <span className="flex items-center gap-1.5">
              <FavoriteIcon fontSize="small" className="text-brand-600" /> Atención con cariño
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <img
            src={flyer}
            alt="Consultas veterinarias a domicilio: Dra. Daniela Zapata S. junto a una mascota"
            className="relative w-full rounded-[2rem] shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
