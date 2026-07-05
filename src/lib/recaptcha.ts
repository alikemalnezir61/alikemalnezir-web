export async function verifyRecaptcha(
  token: string | undefined
): Promise<{ success: boolean; score?: number }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return { success: true };
  }

  if (!token) {
    return { success: false };
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = await res.json();
  const scoreOk = typeof data.score !== "number" || data.score >= 0.5;

  return { success: Boolean(data.success) && scoreOk, score: data.score };
}
