// src/components/Navbar.tsx
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          Entrenador<span className="text-cyan-400">Pro</span>
        </Link>

        <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
          <a href="#metodo" className="hover:text-cyan-400">Metodo</a>
          <a href="#programas" className="hover:text-cyan-400">Programas</a>
          <a href="#contacto" className="hover:text-cyan-400">Contacto</a>
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400"
        >
          Empezar
        </a>
      </nav>
    </header>
  )
}
