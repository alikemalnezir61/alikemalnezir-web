import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isRateLimited } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/get-client-ip";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  interest: 50,
};

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(`newsletter:${ip}`)) {
    return NextResponse.json({ error: "rate-limited" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "invalid-body" }, { status: 400 });
  }

  if (String(body.company_website ?? "").length > 0) {
    // Honeypot alanı doldurulmuş, bot isteği — sessizce başarı dön
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const interest = String(body.interest ?? "").trim();

  if (!name || !email || !interest || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "invalid-fields" }, { status: 400 });
  }

  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    interest.length > MAX_LENGTHS.interest
  ) {
    return NextResponse.json({ error: "field-too-long" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.log(
      "[newsletter] RESEND_API_KEY veya RESEND_AUDIENCE_ID tanımlı değil, kayıt sadece loglandı:",
      { name, email, interest }
    );
    return NextResponse.json({ ok: true });
  }

  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  try {
    const resend = new Resend(apiKey);
    await resend.contacts.create({
      email,
      firstName,
      lastName: lastName || undefined,
      audienceId,
      properties: { interest },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[newsletter] Abonelik eklenemedi:", error);
    return NextResponse.json({ error: "subscribe-failed" }, { status: 500 });
  }
}
