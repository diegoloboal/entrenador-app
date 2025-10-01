//import { Redis } from "@upstash/redis";
//const redis = Redis.fromEnv(); // lee UPSTASH_REDIS_REST_URL/TOKEN

// frontend/src/app/api/queue/drain/route.ts
export async function GET() {
  return Response.json({ ok: true, where: "/api/queue/drain" });
}


/*
export async function GET(req: Request) {
  // Permite el cron de Vercel (añade x-vercel-cron) o una llamada manual con ?secret=...
  const isCron = req.headers.get("x-vercel-cron") === "1";
  const secretOk = new URL(req.url).searchParams.get("secret") === process.env.CRON_SECRET;
  if (!isCron && !secretOk) return new Response("Unauthorized", { status: 401 });

  const api = process.env.API_URL;
  if (!api) return new Response("Falta API_URL", { status: 500 });

  let processed = 0;
  for (let i = 0; i < 200; i++) {          // evita bucles infinitos
    const item = await redis.lpop<string>("leads:queue");
    if (!item) break;

    const payload = JSON.parse(item);
    try {
      const r = await fetch(`${api}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        await redis.lpush("leads:queue", item); // reponemos y paramos
        break;
      }
      processed++;
    } catch {
      await redis.lpush("leads:queue", item);   // error de red → reponemos
      break;
    }
  }

  return Response.json({ processed });
}
*/