import { Redis } from "@upstash/redis";
const redis = Redis.fromEnv();

export async function GET(req: Request) {
  // Permite cron de Vercel (x-vercel-cron) o llamada manual con ?secret=...
  const isCron = req.headers.get("x-vercel-cron") === "1";
  const secretOk = new URL(req.url).searchParams.get("secret") === process.env.CRON_SECRET;
  if (!isCron && !secretOk) return new Response("Unauthorized", { status: 401 });

  const api = process.env.API_URL;
  if (!api) return new Response("Falta API_URL", { status: 500 });

  let processed = 0;
  const start = Date.now();
  const MAX_MS = 8000; // límite de tiempo para evitar timeout

  for (let i = 0; i < 200; i++) { // límite de items por ejecución
    if (Date.now() - start > MAX_MS) break;

    const item = await redis.lpop<string>("leads:queue");
    if (!item) break;

    try {
      const r = await fetch(`${api}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: item, // ya es JSON string
      });
      if (!r.ok) {
        await redis.lpush("leads:queue", item); // reponemos y salimos
        break;
      }
      processed++;
    } catch {
      await redis.lpush("leads:queue", item);   // red/Render dormido
      break;
    }
  }

  return Response.json({ processed });
}
