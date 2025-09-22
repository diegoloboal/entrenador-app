import type { Metadata } from "next"
import ClientIntakeForm from "@/components/ClientIntakeForm"


export const metadata: Metadata = {
  title: "Cuestionario | Entrenador Personal",
  description: "Completa el cuestionario inicial para que pueda evaluar tu caso.",
}

export default function CuestionarioPage() {
  return (
      <main className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Cuestionario inicial</h1>
        <p className="text-slate-400 mb-8">
          Completa estos datos para poder valorar tu caso y proponerte el mejor plan.
        </p>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <ClientIntakeForm />
        </div>
      </div>
    </main>
  )
}
