# alikemalnezir.com

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
CONTACT_FROM_EMAIL=iletisim@alikemalnezir.com
```

`RESEND_API_KEY` tanımlı değilse form yine çalışır ancak mesaj yalnızca sunucu loglarına yazılır (geliştirme ortamı için).

## Yayına Alma

Bkz. proje kurulumu sırasında paylaşılan "Canlıya Alma Planı" — özetle: GitHub'a push edin, Vercel'de projeyi import edin, ortam değişkenlerini girin, domain'i bağlayın.
