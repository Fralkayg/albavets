import Chip from '@mui/material/Chip'
import PetsIcon from '@mui/icons-material/Pets'
import FavoriteIcon from '@mui/icons-material/Favorite'
import VerifiedIcon from '@mui/icons-material/Verified'
import HomeIcon from '@mui/icons-material/Home'
import { siteConfig } from '../siteConfig'
import aboutPhoto from '../assets/images/about-photo.jpg'

export default function About() {
  return (
    <section id="sobre-mi" className="bg-brand-50/60 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <img
            src={aboutPhoto}
            alt={siteConfig.vetName}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Sobre mí
          </h2>
          <p className="mt-2 font-display text-lg font-semibold text-brand-700">
            {siteConfig.vetName} — {siteConfig.vetTitle}
          </p>
          <p className="mt-4 max-w-2xl text-gray-600">
            Veterinaria a domicilio en el Valle del Aconcagua, enfocada en entregar una atención
            cercana, tranquila y personalizada. 🐾
          </p>
          <p className="mt-4 max-w-2xl text-gray-600">
            Cuento con un Diplomado en Medicina Interna Veterinaria y actualmente curso un
            Diplomado en Dermatología Veterinaria, porque seguir aprendiendo también es parte de
            cuidar mejor. 🤍
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            <Chip icon={<HomeIcon />} label="Atención a domicilio" variant="outlined" color="primary" />
            <Chip icon={<FavoriteIcon />} label="Atención con cariño" variant="outlined" color="primary" />
            <Chip icon={<VerifiedIcon />} label="Servicio personalizado" variant="outlined" color="primary" />
            <Chip icon={<PetsIcon />} label="Perros y gatos" variant="outlined" color="primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
