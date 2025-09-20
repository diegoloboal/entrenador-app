// src/components/AboutCoach.tsx
export default function AboutCoach() {
  return (
    <section id="quien-soy" className="border-t border-slate-800 bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-[240px,1fr] items-start">
        {/* Foto (placeholder). Si luego quieres, sustituye por una imagen real */}
        <div className="mx-auto md:mx-0 h-56 w-56 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl flex items-center justify-center text-slate-300 text-sm">
          Tu foto aqui
          {/* Para usar next/image:
             import Image from "next/image"
             <div className="relative h-56 w-56">
               <Image src="/coach.jpg" alt="Entrenador" fill className="object-cover rounded-2xl border border-slate-800" />
             </div>
          */}
        </div>

        <div>
          <h2 className="text-2xl font-bold">Quien soy</h2>
          <p className="mt-3 text-slate-300">
            Soy <b>Tu Nombre</b>, entrenador personal especializado en recomposicion corporal,
            fuerza y tecnica para hombres de 28 a 42 anos. Trabajo con programas individualizados
            y seguimiento trimestral o semestral para que avances sin lesionarte.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-sm font-semibold text-cyan-400">Formacion</div>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Grado/Certificacion en CAFYD o similar (anio)</li>
                <li>Certificacion X (ej. NSCA-CPT, anio)</li>
                <li>Curso Y (ej. tecnica de levantamientos, anio)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-sm font-semibold text-cyan-400">Experiencia</div>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>+N anos entrenando a hombres 28–42</li>
                <li>Especializado en recomposicion, fuerza y tecnica</li>
                <li>Mas de X clientes satisfechos</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Enfasis en tecnica, progresion y habitos. Sin atajos; resultados sostenibles.
          </p>
        </div>
      </div>
    </section>
  )
}
