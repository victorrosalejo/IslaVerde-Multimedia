import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SkipLink } from "@/components/skip-link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Isla Verde - Destino Turístico",
  description:
    "Descubre la belleza natural y cultural de Isla Verde, un paraíso tropical con playas cristalinas, montañas exuberantes y una rica herencia cultural.",
    generator: 'Marcos Hernangil & Victor Arroyo'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SkipLink />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
