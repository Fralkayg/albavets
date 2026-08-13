import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PetsIcon from '@mui/icons-material/Pets'
import { siteConfig, whatsappLink } from '../siteConfig'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 253, 248, 0.9)',
        borderBottom: '1px solid rgba(15, 118, 110, 0.12)',
      }}
    >
      <Toolbar className="mx-auto w-full max-w-6xl px-4">
        <a href="#inicio" className="flex items-center gap-2 no-underline">
          <PetsIcon sx={{ color: 'primary.main', fontSize: 30 }} />
          <span className="font-display text-xl font-bold text-brand-800">
            {siteConfig.name}
          </span>
        </a>

        <div className="flex-1" />

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button key={link.href} href={link.href} color="inherit" sx={{ color: 'text.primary' }}>
              {link.label}
            </Button>
          ))}
        </nav>

        <Button
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          startIcon={<WhatsAppIcon />}
          sx={{ ml: 2, display: { xs: 'none', md: 'inline-flex' } }}
        >
          Agendar hora
        </Button>

        <IconButton
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          sx={{ color: 'primary.dark', display: { xs: 'inline-flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-64 pt-4">
          <div className="flex items-center gap-2 px-4 pb-4">
            <PetsIcon sx={{ color: 'primary.main' }} />
            <span className="font-display text-lg font-bold text-brand-800">
              {siteConfig.name}
            </span>
          </div>
          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.href} component="a" href={link.href} onClick={() => setOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <div className="px-4 pt-2 pb-6">
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<WhatsAppIcon />}
            >
              Agendar hora
            </Button>
          </div>
        </div>
      </Drawer>
    </AppBar>
  )
}
