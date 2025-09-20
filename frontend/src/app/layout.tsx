// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import WhatsAppFloat from "@/components/WhatsAppFloat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Entrenador Personal | Cambia tu fisico",
  description: "Programas individualizados con seguimiento trimestral/semestral.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 antialiased`}
      >
        {/* glow sutil de fondo */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-30" aria-hidden="true">
          <div className="absolute -top-48 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
        </div>

        {children}

        {/* Boton flotante WhatsApp */}
        <WhatsAppFloat
          phone="34608810961"
          message="Hola, vengo desde la web y me gustaria info del programa"
        />
      </body>
    </html>
  )
}
