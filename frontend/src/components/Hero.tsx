// src/components/Hero.tsx
import Link from "next/link"

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Cambia tu fisico. <span className="text-cyan-400">Entrena con plan</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-prose">
          Programas individualizados para hombres 28–42: recomposicion corporal, fuerza y tecnica.
          Ideal para iniciarte en el gym o volver con seguridad.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contacto" className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 hover:bg-cyan-400">
            Quiero empezar
          </a>
          <Link href="#metodo" className="rounded-lg border border-slate-700 px-5 py-3 font-medium hover:border-cyan-400">
            Ver metodo
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Plan 100% individual
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Seguimiento 12/24 semanas
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Tecnica y progresion segura
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" /> Habitos y nutricion simples
          </li>
        </ul>
      </div>

      {/* Espacio visual (sustituible por foto) */}
      <div className="relative h-64 w-full md:h-80">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl" />
        <div className="absolute inset-6 rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur" />
      </div>
    </section>
  )
}
