import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative h-[70vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Vista panorámica de las playas de Isla Verde con aguas cristalinas y vegetación tropical"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-4">
              Bienvenido a Isla Verde
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Un paraíso tropical donde la naturaleza y la cultura se encuentran
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-emerald-700 hover:bg-emerald-800">
                <Link href="/galeria">Explorar Galería</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
              >
                <Link href="/postal">Enviar Postal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section aria-labelledby="features-heading" className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">
            Descubre lo que Isla Verde tiene para ti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">Playas Paradisíacas</h3>
                <p>
                  Disfruta de nuestras playas de arena blanca y aguas cristalinas, perfectas para nadar, bucear o
                  simplemente relajarte.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">Festivales Culturales</h3>
                <p>
                  Sumérgete en nuestra rica cultura a través de festivales de música, danza y gastronomía que se
                  celebran durante todo el año.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excursiones Guiadas</h3>
                <p>
                  Explora nuestros senderos naturales, cascadas y montañas con guías locales expertos que te mostrarán
                  los secretos de la isla.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section aria-labelledby="about-heading" className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="about-heading" className="text-3xl font-bold mb-6">
                Sobre Isla Verde
              </h2>
              <p className="mb-4">
                Ubicada en el corazón del océano, Isla Verde es un destino que combina la belleza natural con una rica
                herencia cultural. Nuestras playas de arena blanca, montañas exuberantes y biodiversidad única hacen de
                este lugar un paraíso para los amantes de la naturaleza.
              </p>
              <p className="mb-6">
                La comunidad local te recibirá con los brazos abiertos, compartiendo sus tradiciones, gastronomía y
                artesanías que han pasado de generación en generación.
              </p>
              <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                <Link href="/galeria" className="inline-flex items-center">
                  Conoce más sobre nosotros
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Vista de las montañas de Isla Verde con cascadas y vegetación tropical"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-heading" className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-12">
            Lo que dicen nuestros visitantes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                text: "Isla Verde superó todas mis expectativas. Las playas son increíbles y la gente local es muy amable. ¡Definitivamente volveré!",
              },
              {
                name: "Carlos Rodríguez",
                text: "Las excursiones guiadas por la montaña fueron una experiencia inolvidable. Nuestro guía conocía cada rincón y nos mostró lugares que no aparecen en las guías turísticas.",
              },
              {
                name: "Ana Martínez",
                text: "La gastronomía local es exquisita. Probé platos que nunca había probado antes y todos estaban deliciosos. Los festivales culturales son también una experiencia única.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <blockquote className="italic mb-4">"{testimonial.text}"</blockquote>
                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-labelledby="cta-heading" className="py-16 bg-emerald-600 text-white">
        <div className="container px-4 md:px-6 text-center bg-emerald-800">
          <h2 id="cta-heading" className="text-3xl font-bold mb-6">
            ¿Listo para vivir la experiencia Isla Verde?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Planifica tu visita ahora y descubre por qué somos el destino preferido de miles de viajeros cada año.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                bg-white
                text-emerald-700 border-emerald-700 
                hover:bg-white/90 hover:text-emerald-800 hover:border-emerald-800
              "
            >
              <Link href="/galeria">Ver Galería</Link>
            </Button>
            <Button asChild size="lg" className="bg-emerald-800 hover:bg-emerald-900">
              <Link href="/postal">Enviar Postal</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
