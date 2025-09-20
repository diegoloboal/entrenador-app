// src/components/ProgramCards.tsx
export default function ProgramCards() {
  const plans = [
    {
      tag: "Trimestral",
      price: "€ / 12 semanas",
      bullets: [
        "Plan de fuerza + condicion",
        "3-4 dias/semana",
        "Revisiones cada 2 semanas",
        "Soporte por email",
      ],
      highlight: false,
    },
    {
      tag: "Semestral",
      price: "€€ / 24 semanas",
      bullets: [
        "Evolucion por fases",
        "4 dias/semana (ajustable)",
        "Revisiones quincenales",
        "Nutricion simple + habitos",
        "Prioridad en soporte",
      ],
      highlight: true,
    },
  ]
  return (
    <section id="programas" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold">Programas individualizados</h2>
        <p className="mt-2 text-slate-600">Elige el bloque que mejor encaje con tu objetivo y tiempo.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {plans.map(p => (
            <div key={p.tag}
              className={`rounded-2xl border p-6 ${p.highlight ? "ring-2 ring-blue-200 border-slate-200" : "border-slate-200"}`}>
              <div className="text-sm text-blue-600">{p.tag}</div>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <a href="#contacto"
                 className={`mt-6 inline-block rounded-lg px-4 py-2 font-medium ${p.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "border hover:border-blue-400"}`}>
                Quiero info
              </a>
            </div>
          ))}
        </div>

        {/* linea temporal sencilla */}
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-600">
          <div className="font-semibold mb-2">Tramo tipico</div>
          <div className="grid grid-cols-4 gap-3">
            <div className="rounded-lg border p-3"><b>Sem 1-2</b><br/>Evaluacion</div>
            <div className="rounded-lg border p-3"><b>Sem 3-6</b><br/>Base tecnica</div>
            <div className="rounded-lg border p-3"><b>Sem 7-10</b><br/>Progresion</div>
            <div className="rounded-lg border p-3"><b>Sem 11-12</b><br/>Ajustes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
