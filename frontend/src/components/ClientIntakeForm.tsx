// src/components/ClientIntakeForm.tsx
"use client"

import { useState } from "react"

// ---- Tipos del formulario ----
type FormData = {
  nombre: string
  email: string

  objetivoPrincipal: "perder_peso" | "ganar_masa" | "rendimiento" | "recuperacion_lesion"
  compromisoDias: "1" | "2" | "3" | "4" | "5"
  capacidadEconomica: "nunca" | "menos_50" | "50_100" | "100_mas"
  urgencia: "prisa" | "3_6" | "sin_prisa"

  lesiones: string
  disponibilidad: string
  material: string
  mensaje: string
}

const init: FormData = {
  nombre: "",
  email: "",

  objetivoPrincipal: "perder_peso",
  compromisoDias: "3",
  capacidadEconomica: "nunca",
  urgencia: "3_6",

  lesiones: "",
  disponibilidad: "",
  material: "",
  mensaje: "",
}

// ---- Componentes de input (definidos fuera para no perder el foco) ----
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string }
function Input({ label, ...rest }: InputProps) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-slate-300">{label}</span>
      <input
        {...rest}
        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
      />
    </label>
  )
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }
function Textarea({ label, ...rest }: TextareaProps) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-slate-300">{label}</span>
      <textarea
        {...rest}
        className="min-h-[90px] rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
      />
    </label>
  )
}

// ---- Formulario ----
export default function ClientIntakeForm() {
  const [data, setData] = useState<FormData>(init)
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true); setOk(null); setError(null)
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const txt = await res.text()
      if (!res.ok) throw new Error(txt)
      setOk(true)
      setData(init)
    } catch (err: unknown) {
      setOk(false)
      setError(err instanceof Error ? err.message : "Error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Identificación básica */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Nombre"
          placeholder="Tu nombre"
          required
          value={data.nombre}
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
        />
        <Input
          label="Email"
          type="email"
          placeholder="tu@email.com"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>

      {/* Objetivo principal */}
      <label className="grid gap-1 text-sm">
        <span className="text-slate-300">Objetivo principal</span>
        <select
          value={data.objetivoPrincipal}
          onChange={(e) =>
            setData({ ...data, objetivoPrincipal: e.target.value as FormData["objetivoPrincipal"] })
          }
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
        >
          <option value="perder_peso">Perder peso</option>
          <option value="ganar_masa">Ganar masa</option>
          <option value="rendimiento">Rendimiento deportivo</option>
          <option value="recuperacion_lesion">Recuperación de lesión</option>
        </select>
      </label>

      {/* Compromiso, capacidad económica, urgencia */}
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="grid gap-1 text-sm">
          <span className="text-slate-300">¿Cuántos días a la semana podrías entrenar?</span>
          <select
            value={data.compromisoDias}
            onChange={(e) => setData({ ...data, compromisoDias: e.target.value as FormData["compromisoDias"] })}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            <option value="1">1 día</option>
            <option value="2">2 días</option>
            <option value="3">3 días</option>
            <option value="4">4 días</option>
            <option value="5">5 días o más</option>
          </select>
        </label>

        <label className="grid gap-1 text-sm">
          <span className="text-slate-300">¿Cuánto has invertido antes en entrenamiento/salud?</span>
          <select
            value={data.capacidadEconomica}
            onChange={(e) =>
              setData({ ...data, capacidadEconomica: e.target.value as FormData["capacidadEconomica"] })
            }
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            <option value="nunca">Nunca</option>
            <option value="menos_50">Menos de 50 €/mes</option>
            <option value="50_100">50–100 €/mes</option>
            <option value="100_mas">100 € o más</option>
          </select>
        </label>

        <label className="grid gap-1 text-sm">
          <span className="text-slate-300">¿En qué plazo quieres ver resultados?</span>
          <select
            value={data.urgencia}
            onChange={(e) => setData({ ...data, urgencia: e.target.value as FormData["urgencia"] })}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            <option value="prisa">Lo antes posible</option>
            <option value="3_6">En 3–6 meses</option>
            <option value="sin_prisa">No tengo prisa</option>
          </select>
        </label>
      </div>

      {/* Contexto y limitaciones */}
      <Textarea
        label="Lesiones / limitaciones (si las hay)"
        placeholder="Ej. dolor lumbar, hombro, rodilla…"
        value={data.lesiones}
        onChange={(e) => setData({ ...data, lesiones: e.target.value })}
      />
      <Input
        label="Disponibilidad horaria"
        placeholder="Ej. L-X-V tarde, M-J mañana"
        value={data.disponibilidad}
        onChange={(e) => setData({ ...data, disponibilidad: e.target.value })}
      />
      <Input
        label="Material (casa/gimnasio)"
        placeholder="Gimnasio completo, mancuernas en casa, barra, etc."
        value={data.material}
        onChange={(e) => setData({ ...data, material: e.target.value })}
      />

      <Textarea
        label="Mensaje (opcional)"
        placeholder="Cuéntame algo más que deba saber"
        value={data.mensaje}
        onChange={(e) => setData({ ...data, mensaje: e.target.value })}
      />

      <label className="flex items-start gap-2 text-xs text-slate-400">
        <input type="checkbox" required className="mt-0.5" />
        Acepto el tratamiento de datos para responder a mi solicitud.
      </label>

      <div className="flex items-center gap-3">
        <button
          disabled={loading}
          className="rounded-lg bg-cyan-500 px-5 py-2 font-medium text-slate-900 hover:bg-cyan-400 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar cuestionario"}
        </button>
        {ok === true && <span className="text-sm text-emerald-400">Recibido. Te escribiré pronto.</span>}
        {ok === false && <span className="text-sm text-red-400">{error || "Error"}</span>}
      </div>
    </form>
  )
}
