import Fab from '@mui/material/Fab'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { whatsappLink } from '../siteConfig'

export default function WhatsAppFab() {
  return (
    <Fab
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar hora por WhatsApp"
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        bgcolor: '#25D366',
        color: 'white',
        '&:hover': { bgcolor: '#1ebe5a' },
        zIndex: 1200,
      }}
    >
      <WhatsAppIcon />
    </Fab>
  )
}
