"use client"

import { Fragment, useMemo, useState } from "react"

type Slot = { day: string; time: string }

const DAYS = ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"]
const TIMES = Array.from({ length: 11 }, (_, i) => `${8 + i}:00`) // 08:00–18:00

export default function ScheduleGrid() {
  const [selected, setSelected] = useState<Slot | null>(null)

  const busy = useMemo(() => new Set<string>([
    "Lun-10:00","Mar-12:00","Vie-17:00","Sáb-11:00"
  ]), [])

  const keyOf = (day: string, time: string) => `${day}-${time}`

  function handleReserve() {
    if (!selected) { alert("Elige un horario."); return }
    alert(`Reserva simulada para ${selected.day} a las ${selected.time} 😊`)
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-8 gap-1 text-sm">
        <div />
        {DAYS.map(d => (
          <div key={d} className="text-center font-medium py-2">{d}</div>
        ))}

        {TIMES.map((t) => (
          <Fragment key={`time-${t}`}>
            <div className="text-right pr-2 py-2 text-gray-500">{t}</div>
            {DAYS.map((d) => {
              const k = keyOf(d, t)
              const isBusy = busy.has(k)
              const isSelected = selected && selected.day === d && selected.time === t
              return (
                <button
                    key={k}
                    disabled={isBusy}
                    onClick={() => setSelected({ day: d, time: t })}
                    className={[
                      "py-2 rounded border text-center transition",
                      isBusy && "bg-gray-200 text-gray-400 cursor-not-allowed",
                      !isBusy && !isSelected && "hover:border-blue-400",
                      isSelected && "border-blue-600 ring-2 ring-blue-200"
                    ].filter(Boolean).join(" ")}
                    aria-label={`${d} ${t} ${isBusy ? "(ocupado)" : ""}`}
                >
                  {!isBusy ? (isSelected ? "✓" : "") : "—"}
                </button>
              )
            })}
          </Fragment>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={handleReserve}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Reservar
        </button>
        {selected && (
          <p className="text-sm text-gray-600">
            Seleccionado: <b>{selected.day}</b> a las <b>{selected.time}</b>
          </p>
        )}
      </div>
    </div>
  )
}
