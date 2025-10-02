// frontend/src/app/api/queue/drain/route.ts
export const runtime = "nodejs"; // fuerza runtime Node (opcional)
export async function GET() {
  return Response.json({ ok: true, where: "/api/queue/drain" });
}
