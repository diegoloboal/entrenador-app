// src/app/api/intake/route.ts

type Obj = "perder_peso" | "ganar_masa" | "rendimiento" | "recuperacion_lesion"
type Dias = "1" | "2" | "3" | "4" | "5"
type Cap  = "nunca" | "menos_50" | "50_100" | "100_mas"
type Urg  = "prisa" | "3_6" | "sin_prisa"
type Exp  = "principiante" | "intermedio" | "avanzado"

type IntakePayload = {
  nombre: string
  email: string
  objetivoPrincipal: Obj
  compromisoDias: Dias
  capacidadEconomica: Cap
  urgencia: Urg
  lesiones?: string
  disponibilidad?: string
  material?: string
  mensaje?: string
  experiencia?: Exp
}

function scoreLead(b: Partial<IntakePayload>) {
  const capPts =
    b.capacidadEconomica === "100_mas" ? 35 :
    b.capacidadEconomica === "50_100" ? 25 :
    b.capacidadEconomica === "menos_50" ? 12 : 0

  const urgPts = b.urgencia === "prisa" ? 25 : b.urgencia === "3_6" ? 12 : 0

  const d = Number(b.compromisoDias || 0)
  const diasPts = d >= 5 ? 25 : d === 4 ? 22 : d === 3 ? 18 : d === 2 ? 10 : d === 1 ? 3 : 0

  const objPts =
    b.objetivoPrincipal === "perder_peso" || b.objetivoPrincipal === "ganar_masa" ? 8 :
    b.objetivoPrincipal ? 5 : 0

  const expPts = b.experiencia === "avanzado" ? 4 : b.experiencia === "intermedio" ? 2 : 0

  const detailLen = [b.mensaje, b.lesiones, b.disponibilidad, b.material]
    .filter(Boolean).join(" ").trim().length
  const detailPts = detailLen > 200 ? 8 : detailLen > 120 ? 6 : detailLen > 60 ? 3 : 0

  const leadScore = capPts + urgPts + diasPts + objPts + expPts + detailPts
  const leadTier = leadScore >= 70 ? "Hot Lead" : leadScore >= 45 ? "Warm Lead" : "Cold Lead"
  const categoria = d >= 4 ? "lead_caliente" : d >= 2 ? "lead_templado" : "lead_frio"
  return { leadScore, leadTier, categoria }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<IntakePayload>
    if (!body?.email || !body?.nombre) {
      return new Response("Faltan: nombre y email", { status: 400 })
    }

    const { leadScore, leadTier, categoria } = scoreLead(body)
    const payload = { ...body, categoria, leadScore, leadTier, submittedAt: new Date().toISOString() }

    // 1) Enviar al backend Spring
    const api = process.env.API_URL
    if (!api) return new Response("Falta API_URL", { status: 500 })
    const toSpring = await fetch(`${api}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const springText = await toSpring.text()
    if (!toSpring.ok) {
      // si falla Spring, devolvemos error (priorizamos la BD)
      return new Response(`API error: ${springText}`, { status: 502 })
    }

    // 2) (Opcional) Guardar también en Google Sheets
    const sheetsUrl = process.env.SHEETS_WEBAPP_URL
    if (sheetsUrl) {
      // no rompemos la petición si Sheets falla: lo intentamos y seguimos
      try {
        await fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } catch { /* swallow */ }
    }

    return Response.json({ ok: true, leadScore, leadTier })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Error"
    return new Response(msg, { status: 500 })
  }
}
