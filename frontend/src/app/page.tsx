// src/app/page.tsx
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
import FAQ from "@/components/FAQ"
import AboutCoach from "@/components/AboutCoach"
import ClientIntakeForm from "@/components/ClientIntakeForm"



export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <Process />

      {/* Resultados / testimonios */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Resultados reales</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { n: "Javier (38)", t: "Menos 7 kg en 12 semanas. Mas fuerza y mejor postura." },
              { n: "Luis (31)", t: "De cero a 3 dias/semana. Aprendi tecnica sin dolor de espalda." },
              { n: "Sergio (41)", t: "Recomp: menos grasa y mas espalda. Mantengo sin sufrir." },
            ].map(x => (
              <figure key={x.n} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
                <blockquote className="text-sm text-slate-300">“{x.t}”</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-slate-100">— {x.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      <AboutCoach />


      <FAQ />



      <section id="cuestionario" className="border-t border-slate-800 bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Cuestionario inicial</h2>
          <p className="mt-2 text-slate-300">Rellena estos datos para poder proponerte el plan adecuado.</p>
          <div className="mt-6 max-w-3xl">
            <ClientIntakeForm />
          </div>
        </div>
      </section>

  
      {/* CTA contacto */}
      <section id="contacto" className="border-t border-gray-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold">Listo para empezar?</h2>
          <p className="mt-2 text-slate-300">Escribeme y te envio info + cuestionario inicial.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-slate-900 hover:bg-cyan-400"
               href="mailto:tu-email@ejemplo.com?subject=Info%20programa%20entrenamiento">
              Pedir info por email
            </a>
            <a className="rounded-lg border border-slate-700 px-5 py-3 font-medium hover:border-cyan-400"
               href="https://wa.me/34XXXXXXXXX" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-800">
        © {new Date().getFullYear()} EntrenadorPro — Todos los derechos reservados
      </footer>
    </>
  )
}
