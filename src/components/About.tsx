import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import PetsIcon from '@mui/icons-material/Pets'
import FavoriteIcon from '@mui/icons-material/Favorite'
import VerifiedIcon from '@mui/icons-material/Verified'
import HomeIcon from '@mui/icons-material/Home'
import { siteConfig } from '../siteConfig'
import aboutPortrait from '../assets/images/about-portrait.jpg'

export default function About() {
  return (
    <section id="sobre-mi" className="bg-brand-50/60 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[auto,1fr] md:items-center">
        <Avatar
          src={aboutPortrait}
          alt={siteConfig.vetName}
          sx={{
            width: 160,
            height: 160,
            mx: 'auto',
            boxShadow: 4,
          }}
        />

        <div className="text-center md:text-left">
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Sobre mí
          </h2>
          <p className="mt-2 font-display text-lg font-semibold text-brand-700">
            {siteConfig.vetName} — {siteConfig.vetTitle}
          </p>
          <p className="mt-4 max-w-2xl text-gray-600">
            Soy médico veterinaria y llevo la consulta directamente a tu hogar en el Valle del
            Aconcagua. Creo en una atención cercana, tranquila y con mucho cariño, donde tu
            mascota es la protagonista y tú puedes acompañarla en todo momento, en el lugar
            donde se siente más segura.
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
