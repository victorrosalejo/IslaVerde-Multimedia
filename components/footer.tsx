import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">Isla Verde</h2>
            <p className="text-slate-300">Un paraíso tropical donde la naturaleza y la cultura se encuentran.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tabla de contenidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/postal" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Enviar Postal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-slate-300">
              <p>Calle Principal 123</p>
              <p>Isla Verde, Océano Pacífico</p>
              <p className="mt-2">
                <a href="tel:+123456789" className="hover:text-emerald-400 transition-colors">
                  Tel: +123 456 789
                </a>
              </p>
              <p>
                <a href="mailto:info@islaverde.ejemplo" className="hover:text-emerald-400 transition-colors">
                  info@islaverde.ejemplo
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Isla Verde. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Términos de Uso
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Accesibilidad
            </Link>
          </div>
          <div className="mt-4">
            <a href="https://www.w3.org/WAI/WCAG2AA-Conformance"
              title="Explanation of WCAG 2 Level AA conformance"
              >
              <Image height="32" width="88"
                  src="https://www.w3.org/WAI/WCAG22/wcag2.2AA"
                  alt="Level AA conformance,
                        W3C WAI Web Content Accessibility Guidelines 2.2">
              </Image>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
