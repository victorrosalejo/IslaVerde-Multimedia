import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { AudioPlayer } from "@/components/audio-player"

export default function Gallery() {
  // Array of gallery images with descriptions
  const galleryImages = [
    {
      src: "/1.svg?height=600&width=800",
      alt: "Playa principal de Isla Verde con palmeras y aguas turquesas",
      title: "Playa Principal",
    },
    {
      src: "/2.svg?height=600&width=800",
      alt: "Sendero ecológico a través de la selva tropical de Isla Verde",
      title: "Sendero Ecológico",
    },
    {
      src: "/3.svg?height=600&width=800",
      alt: "Festival cultural con bailarines locales en trajes tradicionales",
      title: "Festival Cultural",
    },
    {
      src: "/4.svg?height=600&width=800",
      alt: "Cascada natural en el corazón de la montaña de Isla Verde",
      title: "Cascada Natural",
    },
    {
      src: "/5.svg?height=600&width=800",
      alt: "Mercado local con artesanías y productos típicos de Isla Verde",
      title: "Mercado Local",
    },
    {
      src: "/6.svg?height=600&width=800",
      alt: "Vista aérea del pueblo principal de Isla Verde con sus casas coloridas",
      title: "Pueblo Principal",
    },
  ]

  return (
    <main id="main-content" className="min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Galería Multimedia</h1>

        {/* Images Gallery */}
        <section aria-labelledby="images-heading" className="mb-16">
          <h2 id="images-heading" className="text-2xl font-semibold mb-6">
            Imágenes de Isla Verde
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <figure>
                    <div className="relative h-64 w-full">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <figcaption className="p-4 text-center font-medium">{image.title}</figcaption>
                  </figure>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Section */}
    <section aria-labelledby="video-heading" className="mb-16">
      <h2 id="video-heading" className="text-2xl font-semibold mb-6">
        Video Promocional
      </h2>
      <Card>
        <CardContent className="p-6">
          <video
            controls
            className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
          >
            <source src="/video/tour.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </CardContent>
      </Card>
    </section>


        {/* Audio Section */}
        <section aria-labelledby="audio-heading">
          <h2 id="audio-heading" className="text-2xl font-semibold mb-6">
            Sonidos de Isla Verde
          </h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4">Sonidos de la Naturaleza</h3>
              <p className="mb-4">
                Escucha los sonidos relajantes de las olas del mar, los pájaros tropicales y la brisa entre las palmeras
                de Isla Verde.
              </p>
              <AudioPlayer
              title="Sonidos de la naturaleza de Isla Verde"
              description="Audio ambiental con sonidos de olas, pájaros y brisa tropical"
              src="/audio/tour.mp3"
            />
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
