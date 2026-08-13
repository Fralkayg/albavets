import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'

const photos = [
  { src: gallery1, alt: 'Dra. Daniela Zapata sonriendo junto a un perro pomerania durante una consulta' },
  { src: gallery2, alt: 'Dra. Daniela Zapata sosteniendo con cariño a un perro pomerania' },
  { src: gallery3, alt: 'Dra. Daniela Zapata revisando a un gato blanco y negro con estetoscopio' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Galería
          </h2>
          <p className="mt-3 text-gray-600">
            Momentos junto a nuestros pacientes, en la tranquilidad de su hogar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group aspect-[4/5] overflow-hidden rounded-3xl bg-brand-100 shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
