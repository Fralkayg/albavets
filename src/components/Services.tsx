import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import HomeIcon from '@mui/icons-material/Home'

const services = [
  {
    icon: MedicalServicesIcon,
    title: 'Consultas clínicas generales',
    description:
      'Evaluación completa del estado de salud de tu mascota, en un ambiente conocido y libre de estrés para ella.',
  },
  {
    icon: VaccinesIcon,
    title: 'Vacunación',
    description:
      'Planes de vacunación al día para perros y gatos, aplicados con seguridad en tu propio hogar.',
  },
  {
    icon: HealthAndSafetyIcon,
    title: 'Evaluación y tratamiento',
    description:
      'Diagnóstico, indicaciones y seguimiento de tratamientos, con acompañamiento cercano en cada etapa.',
  },
  {
    icon: HomeIcon,
    title: 'Atención a domicilio',
    description:
      'Sin traslados ni jaulas de transporte: la consulta veterinaria llega directo a la puerta de tu casa.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-brand-50/60 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Servicios
          </h2>
          <p className="mt-3 text-gray-600">
            Cuidado veterinario integral para tu mascota, pensado para que ambos estén
            tranquilos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              elevation={0}
              className="h-full border border-brand-100 transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex h-full flex-col gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Icon />
                </div>
                <h3 className="font-display text-lg font-semibold text-brand-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
