import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/content/site";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { isRateLimited } from "@/lib/rate-limit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const requestTypeLabels: Record<string, string> = {
  consulting: "Proje Yönetimi Danışmanlığı",
  speaking: "Etkinlik / Konuşmacı Daveti",
  collaboration: "Blog / İş Birliği",
  training: "Eğitim Talebi",
  other: "Diğer",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(`contact:${ip}`)) {
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
  const phone = String(body.phone ?? "").trim();
  const company = String(body.company ?? "").trim();
  const requestType = String(body.requestType ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !subject || !message || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "invalid-fields" }, { status: 400 });
  }

  const recaptchaResult = await verifyRecaptcha(body.recaptchaToken);
  if (!recaptchaResult.success) {
    return NextResponse.json({ error: "recaptcha-failed" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[iletisim] RESEND_API_KEY tanımlı değil, mesaj sadece loglandı:", {
      name,
      email,
      phone,
      company,
      requestType,
      subject,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: siteConfig.email,
      replyTo: email,
      subject: `[İletişim Formu] ${subject}`,
      html: `
        <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Kurum:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>Talep Türü:</strong> ${escapeHtml(requestTypeLabels[requestType] ?? (requestType || "-"))}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[iletisim] E-posta gönderilemedi:", error);
    return NextResponse.json({ error: "send-failed" }, { status: 500 });
  }
}
