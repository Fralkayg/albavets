import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import IconButton from '@mui/material/IconButton'
import { siteConfig, whatsappLink, emailLink } from '../siteConfig'
import logoRoundVet from '../assets/images/logo-round-vet.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <img src={logoRoundVet} alt={siteConfig.name} className="h-20 w-20 rounded-full shadow-sm" />

        <div className="flex items-center gap-1">
          <IconButton
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de AlbaVets"
            sx={{ color: 'primary.dark' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de AlbaVets"
            sx={{ color: 'primary.dark' }}
          >
            <WhatsAppIcon />
          </IconButton>
          <IconButton
            href={emailLink()}
            aria-label="Enviar un correo a AlbaVets"
            sx={{ color: 'primary.dark' }}
          >
            <EmailIcon />
          </IconButton>
        </div>

        <p className="text-xs text-gray-400">
          © {year} {siteConfig.name} · {siteConfig.location}
        </p>
      </div>
    </footer>
  )
}
