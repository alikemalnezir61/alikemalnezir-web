# alikemalnezir.com.tr

Ali Kemal Nezir'in kişisel kurumsal web sitesi. Next.js (App Router) + TypeScript + Tailwind CSS + next-intl (TR/EN) + MDX blog sistemi ile geliştirilmiştir.

## Geliştirme

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde açılır. Türkçe içerik `/` altında, İngilizce içerik `/en` altında yayınlanır.

## Yeni Blog Yazısı Ekleme

1. `content/blog/tr/` klasörüne yeni bir `.mdx` dosyası ekleyin (dosya adı slug olur, örn. `yeni-yazi-basligi.mdx`).
2. Dosyanın en üstüne şu frontmatter alanlarını doldurun:

```yaml
---
title: "Yazı Başlığı"
description: "Kısa açıklama (blog kartlarında ve SEO'da kullanılır)"
date: "2026-07-05"
category: "proje-yonetimi" # bkz. src/lib/categories.ts
tags: ["etiket-1", "etiket-2"]
seoTitle: "SEO başlığı (opsiyonel)"
seoDescription: "SEO açıklaması (opsiyonel)"
coverImage: "/images/blog/kapak.jpg"
draft: false
---
```

3. Frontmatter'ın altına Markdown içeriğinizi yazın.
4. Dosyayı kaydedip GitHub'a gönderdiğinizde (push), Vercel otomatik olarak yeni sürümü yayınlar.

Yazıyı taslak olarak saklamak isterseniz `draft: true` yapın; site üzerinde görünmez.

## Görsel Yönetim Paneli (Decap CMS)

Blog yazılarını dosya düzenlemeden, tarayıcıdan bir form üzerinden eklemek için `/admin` adresinde bir içerik yönetim paneli bulunur.

**Yerelde deneme:**

```bash
npm run cms      # ayrı bir terminalde: yerel proxy sunucusu (port 8081)
npm run dev      # ayrı bir terminalde: site (port 3000)
```

Sonra `http://localhost:3000/admin` adresine gidin. Bu modda panel doğrudan bilgisayarınızdaki dosyalara yazar, GitHub'a bağlanmaz.

**Ekstra şifre koruması:** `/admin` adresi, GitHub yetkilendirmesine ek olarak bir kullanıcı adı/şifre (HTTP Basic Auth) ile de korunur — şifreyi bilmeyen biri sayfayı hiç göremez. Kendi kullanıcı adı ve şifrenizi belirlemek için `.env.local` dosyanıza şunları ekleyin:

```
ADMIN_BASIC_AUTH_USER=kullanici-adiniz
ADMIN_BASIC_AUTH_PASSWORD=guclu-bir-sifre
```

Bu değişkenler tanımlı değilse `/admin` tamamen erişime kapalı kalır (güvenli varsayılan). Canlıya alırken aynı değişkenleri Vercel proje ayarlarındaki ortam değişkenlerine de eklemeyi unutmayın.

**Canlıda kullanmak için** (siteyi GitHub + Vercel'e taşıdıktan sonra):

1. GitHub hesabınızda **Settings → Developer settings → OAuth Apps → New OAuth App** ile bir uygulama oluşturun.
   - Homepage URL: `https://alikemalnezir.com.tr`
   - Authorization callback URL: `https://alikemalnezir.com.tr/api/decap/callback`
2. Oluşan **Client ID** ve **Client Secret** değerlerini Vercel proje ayarlarında ortam değişkeni olarak ekleyin: `GITHUB_OAUTH_CLIENT_ID`, `GITHUB_OAUTH_CLIENT_SECRET`.
3. `public/admin/config.yml` dosyasındaki `repo: OWNER/REPO` satırını gerçek GitHub kullanıcı adı/repo adıyla güncelleyin (örn. `alikemalnezir/alikemalnezir-web`), `base_url` alanını da gerçek domain ile eşleştirin.
4. Değişiklikleri push edip Vercel deploy'unu bekleyin, ardından `https://alikemalnezir.com.tr/admin` adresinden GitHub hesabınızla giriş yapıp yazı ekleyebilirsiniz. Panelden yapılan her kayıt otomatik olarak GitHub'a commit atar ve Vercel yeniden yayınlar.

## Yeni Etkinlik Ekleme

`content/events/tr/` klasörüne yeni bir `.mdx` dosyası ekleyin (blogla aynı mantık). Frontmatter alanları:

```yaml
---
title: "Etkinlik Adı"
description: "Kısa açıklama"
date: "2026-09-10"
time: "10:00"
location: "İstanbul, Türkiye"
isOnline: false
speakers: ["Ali Kemal Nezir"]
category: "konferans" # bkz. src/lib/event-categories.ts
registrationUrl: "https://..."
status: "upcoming" # upcoming | completed | cancelled
draft: false
---
```

Aynı işlemi `/admin` panelinden **Etkinlikler (Türkçe)** koleksiyonu üzerinden de yapabilirsiniz.

## Analytics ve Reklam Kurulumu

Sitede Google Analytics (GA4), Microsoft Clarity, Vercel Analytics ve Google AdSense altyapısı hazır — ziyaretçi onayı olmadan hiçbiri çalışmaz (bkz. Çerez Politikası sayfası). Aktif etmek için `.env.local` / Vercel ortam değişkenlerine ekleyin:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx
```

Google Search Console için: search.google.com/search-console üzerinden domain'i ekleyip DNS veya HTML dosyası ile doğrulayın, ardından `https://alikemalnezir.com.tr/sitemap.xml` adresini gönderin.

## Newsletter (Resend Audiences)

`/api/newsletter` route'u [Resend](https://resend.com) Audiences özelliğini kullanır. Resend hesabınızda bir Audience oluşturup ID'sini alın:

```
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Tanımlı değilse abonelik istekleri sadece sunucu loglarına yazılır.

## Spam Koruması (reCAPTCHA)

İletişim formu Google reCAPTCHA v3 ile korunur (görünmez, kullanıcıdan aksiyon istemez). [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) üzerinden v3 anahtarı oluşturup ekleyin:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxxx
RECAPTCHA_SECRET_KEY=xxxx
```

Tanımlı değilse form reCAPTCHA doğrulaması olmadan çalışmaya devam eder (honeypot alanı ve rate limit yine aktiftir).

## İçerik ve Metin Güncellemeleri

- Genel site metinleri (menü, buton yazıları vb.): `messages/tr.json` ve `messages/en.json`
- Deneyim/CV bilgileri: `src/content/experience.ts`
- Sertifikalar: `src/content/certifications.ts`
- Hizmetler: `src/content/services.ts`
- Uzmanlık alanları: `src/content/expertise.ts`
- Proje yönetimi yaklaşımı: `src/content/approach.ts`
- Site geneli bilgiler (isim, e-posta, LinkedIn): `src/content/site.ts`

## İletişim Formu

`/api/iletisim` route'u, e-posta göndermek için [Resend](https://resend.com) kullanır. Çalışması için `.env.local` dosyasına şunları eklemeniz gerekir (bkz. `.env.example`):

```
RESEND_API_KEY=re_xxx
CONTACT_FROM_EMAIL=iletisim@alikemalnezir.com.tr
```

`RESEND_API_KEY` tanımlı değilse form yine çalışır ancak mesaj yalnızca sunucu loglarına yazılır (geliştirme ortamı için).

## Yayına Alma

Bkz. proje kurulumu sırasında paylaşılan "Canlıya Alma Planı" — özetle: GitHub'a push edin, Vercel'de projeyi import edin, ortam değişkenlerini girin, domain'i bağlayın.

## Güvenlik Mimarisi (Özet)

- **Content-Security-Policy:** Site genelinde sıkı bir CSP uygulanır (`next.config.ts`). `/admin` sayfası, Decap CMS'in şema doğrulama kütüphanesi (ajv) nedeniyle `unsafe-eval` içeren ayrı ve biraz daha gevşek bir CSP alır — bu istisna yalnızca `/admin` yoluna özeldir, sitenin geri kalanını etkilemez.
- **Diğer güvenlik başlıkları:** `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security` tüm sayfalarda aktif.
- **Rate limiting:** İletişim formu ve bülten aboneliği, bellek içi bir sınırlayıcı ile IP başına 10 dakikada 5 istekle sınırlıdır (`src/lib/rate-limit.ts`). Bu, tek sunucu örneği için yeterlidir; çok daha yüksek trafikli/kritik bir kurulum için Upstash Redis gibi paylaşımlı bir store'a geçilebilir.
- **Form güvenliği:** Honeypot alanı + reCAPTCHA v3 + KVKK onay zorunluluğu.
- **Admin paneli:** HTTP Basic Auth (şifre) + GitHub OAuth (yetkili repo erişimi) olmak üzere iki katmanlı korumalıdır.
- **HTTPS:** Vercel'de otomatik olarak sağlanır, ek bir işlem gerekmez.

## Production Deployment Checklist

Siteyi canlıya almadan hemen önce aşağıdakileri sırayla kontrol edin:

**İçerik ve genel kontrol**
- [ ] Tüm sayfalar TR ve EN için gözden geçirildi, yer tutucu ("lorem ipsum" tarzı) metin kalmadı
- [ ] Sertifika/deneyim bilgileri güncel
- [ ] `src/content/site.ts` içindeki domain (`url`) gerçek adresle eşleşiyor

**Ortam değişkenleri (Vercel Project Settings → Environment Variables)**
- [ ] `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `RESEND_AUDIENCE_ID`
- [ ] `GITHUB_OAUTH_CLIENT_ID`, `GITHUB_OAUTH_CLIENT_SECRET`
- [ ] `ADMIN_BASIC_AUTH_USER`, `ADMIN_BASIC_AUTH_PASSWORD` (test şifresi değil, gerçek/güçlü bir şifre)
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_CLARITY_PROJECT_ID` (isteğe bağlı ama önerilir)
- [ ] `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
- [ ] `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`

**Admin paneli**
- [ ] `public/admin/config.yml` içindeki `repo: OWNER/REPO` gerçek GitHub repo ile güncellendi
- [ ] GitHub OAuth App'in callback URL'i canlı domain ile eşleşiyor
- [ ] `.env.local` içindeki test şifresi (`degistirin-bu-sifreyi`) gerçek bir şifreyle değiştirildi

**Çerez/KVKK**
- [ ] Çerez bandı ilk ziyarette görünüyor, onay vermeden analytics/reklam scriptleri yüklenmiyor (tarayıcı Network sekmesinden doğrulanabilir)
- [ ] KVKK Aydınlatma Metni, Gizlilik Politikası, Çerez Politikası, Kullanım Şartları sayfaları gözden geçirildi (gerekirse bir hukuk danışmanına onaylatılmalı — bu metinler taslak olarak hazırlanmıştır)

**SEO**
- [ ] `sitemap.xml` ve `robots.txt` doğru domain ile çalışıyor
- [ ] Google Search Console'a domain eklendi ve sitemap gönderildi
- [ ] Rastgele birkaç sayfanın Open Graph görselini (ör. Facebook Sharing Debugger / Twitter Card Validator ile) test edin

**Güvenlik**
- [ ] `npm run build` hatasız tamamlanıyor
- [ ] Güvenlik başlıkları canlı ortamda mevcut (`curl -I https://alikemalnezir.com.tr` ile kontrol edilebilir)
- [ ] İletişim ve bülten formları gerçek bir e-postayla test edildi

**Performans**
- [ ] Lighthouse (Chrome DevTools) ile en az ana sayfa ve bir blog yazısı test edildi
- [ ] Mobilde tüm ana sayfalar (Ana Sayfa, Blog, Etkinlikler, İletişim) kontrol edildi

## Yayın Sonrası Bakım

- Blog/etkinlik içeriklerini düzenli olarak `/admin` panelinden veya doğrudan `.mdx` dosyalarıyla güncelleyin
- Google Search Console ve Analytics'i ayda bir gözden geçirin
- Bağımlılıkları (`npm outdated`) periyodik olarak güncelleyin
- Sponsor/reklam alanlarını doldurdukça `src/content/sponsors.ts` ve AdSense slot ID'lerini güncelleyin
