import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import PetsIcon from '@mui/icons-material/Pets'

const steps = [
  {
    icon: WhatsAppIcon,
    title: 'Escríbenos por WhatsApp',
    description: 'Cuéntanos sobre tu mascota y el motivo de la consulta.',
  },
  {
    icon: EventAvailableIcon,
    title: 'Coordinamos la visita',
    description: 'Agendamos día y hora según tu disponibilidad en el Valle del Aconcagua.',
  },
  {
    icon: PetsIcon,
    title: 'Atención en tu hogar',
    description: 'Recibimos a tu mascota con cariño, en el lugar donde se siente más segura.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-3 text-gray-600">Agendar una hora es simple y rápido.</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white shadow-md">
                <Icon fontSize="medium" />
              </div>
              <span className="mt-3 block font-display text-sm font-bold uppercase tracking-wide text-brand-500">
                Paso {index + 1}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-brand-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
