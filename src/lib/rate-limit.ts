// Bellek içi, tek instance bazlı sınırlama; serverless ortamda kesin bir üst sınır
// değil ama reCAPTCHA ve honeypot ile birlikte temel kötüye kullanımı engeller.
// Daha kesin bir sınırlama için Upstash Redis gibi paylaşımlı bir store'a geçilebilir.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

function pruneStaleEntries(now: number) {
  for (const [key, timestamps] of hits) {
    if (timestamps.every((t) => now - t >= WINDOW_MS)) {
      hits.delete(key);
    }
  }
}

export function isRateLimited(key: string): boolean {
  const now = Date.now();

  // Bellek büyümesini sınırlamak için ara sıra süresi geçmiş kayıtları temizle
  if (Math.random() < 0.01) pruneStaleEntries(now);

  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS;
}
