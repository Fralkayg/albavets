import { QRCodeSVG } from 'qrcode.react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { siteConfig } from '../siteConfig'

// Stable, unhashed path (served from /public) so the QR code keeps
// working across deployments without needing to be regenerated.
const flyerUrl = `${import.meta.env.BASE_URL}flyer.jpg`

export default function FlyerShare() {
  const absoluteFlyerUrl =
    typeof window !== 'undefined' ? `${window.location.origin}${flyerUrl}` : flyerUrl

  return (
    <section className="border-t border-brand-100 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-500">
            Para compartir
          </p>
          <h3 className="mt-1 text-lg font-semibold text-brand-900">
            ¿Quieres el flyer de {siteConfig.name}?
          </h3>
          <p className="mt-1 max-w-md text-sm text-gray-500">
            Escanea el código QR con tu celular o ábrelo directamente para guardarlo o
            compartirlo.
          </p>
          <a
            href={flyerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Ver flyer completo <OpenInNewIcon sx={{ fontSize: 16 }} />
          </a>
        </div>

        <a
          href={flyerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow ring-1 ring-brand-100"
          aria-label="Abrir el flyer de AlbaVets"
        >
          <QRCodeSVG value={absoluteFlyerUrl} size={112} fgColor="#0f766e" bgColor="#ffffff" />
        </a>
      </div>
    </section>
  )
}
