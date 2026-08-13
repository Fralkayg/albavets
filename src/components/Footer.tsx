import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import IconButton from '@mui/material/IconButton'
import { siteConfig, whatsappLink } from '../siteConfig'
import logoFull from '../assets/images/logo-full.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <img src={logoFull} alt={siteConfig.name} className="h-20 w-auto" />

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
        </div>

        <p className="text-xs text-gray-400">
          © {year} {siteConfig.name} · {siteConfig.location}
        </p>
      </div>
    </footer>
  )
}
