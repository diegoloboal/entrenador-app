// src/components/WhatsAppFloat.tsx
type Props = {
  /** Telefono en formato internacional, sin +. Ej: "34XXXXXXXXX" */
  phone: string
  /** Mensaje pre-rellenado */
  message?: string
}

export default function WhatsAppFloat({
  phone,
  message = "Hola, vengo desde la web y me gustaria info del programa",
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 group"
    >
      <span className="sr-only">Contactar por WhatsApp</span>

      {/* Boton redondo */}
      <div className="relative rounded-full bg-green-500 p-4 shadow-lg ring-1 ring-black/10 transition-transform group-hover:scale-105 group-active:scale-95">
        {/* Icono WhatsApp (SVG) */}
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6 text-white"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M19.11 17.02c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.74.92-.91 1.11-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.45-1.7-1.62-1.99-.17-.29-.02-.45.13-.6.14-.14.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.1-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01s-.51.07-.78.36c-.26.29-1.02.99-1.02 2.41 0 1.42 1.04 2.79 1.19 2.98.15.19 2.04 3.12 4.93 4.37.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.35z" />
          <path d="M26.85 5.17A12.86 12.86 0 0 0 5.13 22.96L4 28l5.17-1.1A12.85 12.85 0 1 0 26.85 5.17zM16 26.29a10.26 10.26 0 0 1-5.23-1.45l-.38-.22-3.1.66.66-3.03-.25-.39a10.27 10.27 0 1 1 8.3 4.43z" />
        </svg>

        {/* Halo animado suave */}
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-green-500/30 blur-md transition-opacity group-hover:opacity-70" />
      </div>
    </a>
  )
}
