import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://pagead2.googlesyndication.com https://www.google.com https://www.gstatic.com https://unpkg.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' https://www.google-analytics.com https://www.clarity.ms https://vitals.vercel-insights.com https://vitals.vercel-analytics.com https://api.github.com https://*.google.com;
  frame-src https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
`.replace(/\s{2,}/g, " ").trim();

const baseSecurityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  ...baseSecurityHeaders,
];

// Decap CMS (/admin) ajv ile şema doğrulaması için 'unsafe-eval', yerel geliştirmede
// ise decap-server proxy'sine (localhost:8081) bağlanabilmek için gevşetilmiş bir CSP kullanır.
const adminContentSecurityPolicy = contentSecurityPolicy
  .replace(
    "script-src 'self' 'unsafe-inline'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  )
  .replace(
    "connect-src 'self'",
    "connect-src 'self' http://localhost:8081 ws://localhost:8081"
  );

const adminSecurityHeaders = [
  { key: "Content-Security-Policy", value: adminContentSecurityPolicy },
  ...baseSecurityHeaders,
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      { source: "/admin", headers: adminSecurityHeaders },
      { source: "/admin/:path*", headers: adminSecurityHeaders },
      { source: "/((?!admin).*)", headers: securityHeaders },
    ];
  },
  async rewrites() {
    return [
      { source: "/admin", destination: "/admin/index.html" },
      { source: "/admin/", destination: "/admin/index.html" },
    ];
  },
};

export default withNextIntl(nextConfig);
