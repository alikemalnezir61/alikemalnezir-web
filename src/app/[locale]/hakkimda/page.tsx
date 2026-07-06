import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/content/site";

const copy = {
  tr: {
    eyebrow: "Hakkımda",
    title: "Teknoloji ile Stratejiyi Buluşturan Bir Proje Yöneticisi",
    seoTitle: "Hakkımda – PMP® Sertifikalı Proje Yöneticisi",
    seoDescription:
      "Ali Kemal Nezir kimdir? IT, sağlık bilişimi ve kritik altyapı projelerinde 10+ yıllık deneyime sahip PMP® sertifikalı Proje Yöneticisi hakkında bilgi edinin.",
    greeting: "Merhaba, ben Ali Kemal Nezir.",
    intro:
      "Yaklaşık 10 yılı aşkın süredir bilgi teknolojileri, proje yönetimi ve dijital dönüşüm alanlarında çalışıyorum. Kariyerim boyunca sağlık sektörü başta olmak üzere kritik öneme sahip teknoloji projelerinde görev alarak; teknik uzmanlığımı stratejik bakış açısıyla birleştirmeyi ve sürdürülebilir çözümler üretmeyi hedefledim.",
    paragraphs: [
      "Farklı ölçeklerdeki kurumlarda edindiğim deneyim sayesinde yalnızca teknik süreçleri değil, aynı zamanda ekip yönetimini, paydaş iletişimini, risk yönetimini ve operasyonel sürekliliği de proje başarısının ayrılmaz parçaları olarak görüyorum. Projelerin planlama aşamasından canlıya geçişine, operasyonel yönetiminden sürekli iyileştirme süreçlerine kadar tüm yaşam döngüsünü bütüncül bir yaklaşımla yönetiyorum.",
      "Profesyonel kariyerim boyunca; sağlık bilişim sistemleri, veri merkezi altyapıları, sistem ve ağ operasyonları, bilgi güvenliği, yedekleme çözümleri, dijital dönüşüm projeleri ve kurumsal BT operasyonlarında önemli sorumluluklar üstlendim. Büyük ölçekli teknoloji projelerinde ekipler arasında koordinasyon sağlayarak, süreçlerin zamanında, kaliteli ve sürdürülebilir şekilde tamamlanmasına liderlik ettim.",
      "Bugün odağım; yalnızca projeleri tamamlamak değil, kurumlara uzun vadeli değer kazandıran, ölçülebilir sonuçlar üreten ve iş hedeflerini teknolojiyle buluşturan çözümler geliştirmektir.",
    ],
    sections: [
      {
        heading: "Proje Yönetimi Yaklaşımım",
        paragraphs: [
          "Her projenin kendine özgü dinamikleri olduğuna inanıyorum. Bu nedenle tek bir metodolojiye bağlı kalmak yerine projenin ihtiyaçlarına göre Agile, Hybrid ve Waterfall yaklaşımlarını esnek biçimde uyguluyorum.",
          "Karar alma süreçlerinde veriye dayalı analizleri, güçlü iletişimi ve şeffaf yönetimi ön planda tutuyor; ekiplerin ortak hedefe odaklanmasını sağlayacak bir çalışma kültürü oluşturmayı önemsiyorum. Benim için başarılı bir proje; yalnızca zamanında teslim edilen bir iş değil, aynı zamanda sürdürülebilir, güvenilir ve kurumun geleceğine katkı sağlayan bir başarı hikâyesidir.",
        ],
        link: { href: "/proje-yonetimi-yaklasimim", label: "Proje yönetimi metodolojim hakkında detaylı bilgi alın →" },
      },
      {
        heading: "Sürekli Gelişim ve Profesyonel Yaklaşım",
        paragraphs: [
          "Mesleki gelişimin sürekliliğine inanıyorum. Uluslararası geçerliliğe sahip PMP® (Project Management Professional) sertifikam ile proje yönetimi bilgi ve yetkinliklerimi uluslararası standartlarda belgelendirdim. Bunun yanında yeni teknolojileri, yapay zekâ uygulamalarını ve modern proje yönetimi yaklaşımlarını yakından takip ederek bunları gerçek projelere uyarlamaya önem veriyorum.",
          "Bu web sitesinde proje yönetimi, dijital dönüşüm, bilgi teknolojileri, liderlik ve profesyonel gelişim üzerine deneyimlerimi, düşüncelerimi ve blog yazılarımı paylaşarak bilgi üretmeye ve sektöre katkı sağlamaya devam ediyorum.",
        ],
        link: { href: "/blog", label: "Blog yazılarımı okuyun →" },
      },
    ],
    factsTitle: "Kısa Bilgiler",
    facts: [
      { label: "Konum", value: "İstanbul, Türkiye" },
      { label: "Deneyim", value: "10+ Yıl" },
      { label: "Uzmanlık", value: "IT Proje Yönetimi, Sağlık Bilişimi, Kritik Altyapı" },
      { label: "Sertifika", value: "PMP® (Project Management Institute)" },
      { label: "Diller", value: "Türkçe (Anadil), İngilizce" },
    ],
    cta: "Deneyimlerimi İncele",
  },
  en: {
    eyebrow: "About Me",
    title: "A Project Manager Bridging Technology and Strategy",
    seoTitle: "About – PMP® Certified Project Manager",
    seoDescription:
      "Who is Ali Kemal Nezir? Learn about this PMP®-certified Project Manager with 10+ years of experience in IT, healthcare informatics and critical infrastructure projects.",
    greeting: "Hello, I'm Ali Kemal Nezir.",
    intro:
      "For over 10 years, I have been working in information technology, project management and digital transformation. Throughout my career, I have taken part in mission-critical technology projects, particularly in the healthcare sector, aiming to combine technical expertise with a strategic perspective and to deliver sustainable solutions.",
    paragraphs: [
      "Thanks to the experience I have gained across organizations of different scales, I see not only technical processes but also team management, stakeholder communication, risk management and operational continuity as inseparable parts of project success. I manage the entire project lifecycle holistically — from planning through go-live, and from operational management through continuous improvement.",
      "Throughout my professional career, I have taken on significant responsibilities in healthcare information systems, data center infrastructure, systems and network operations, information security, backup solutions, digital transformation projects and enterprise IT operations. I have led large-scale technology projects by coordinating across teams, ensuring processes are completed on time, with quality, and in a sustainable way.",
      "Today, my focus is not just completing projects, but developing solutions that bring long-term value to organizations, produce measurable results, and bring business goals and technology together.",
    ],
    sections: [
      {
        heading: "My Project Management Approach",
        paragraphs: [
          "I believe every project has its own unique dynamics. That's why, instead of sticking to a single methodology, I flexibly apply Agile, Hybrid and Waterfall approaches according to the needs of the project.",
          "In decision-making, I prioritize data-driven analysis, strong communication and transparent management, and I care about building a working culture that keeps teams focused on a shared goal. For me, a successful project is not just one delivered on time — it is a success story that is sustainable, reliable, and contributes to the organization's future.",
        ],
        link: { href: "/proje-yonetimi-yaklasimim", label: "Learn more about my project management methodology →" },
      },
      {
        heading: "Continuous Growth and Professional Approach",
        paragraphs: [
          "I believe in continuous professional development. With my internationally recognized PMP® (Project Management Professional) certification, I have formally validated my project management knowledge and competencies to an international standard. Alongside this, I closely follow new technologies, AI applications and modern project management approaches, and place importance on adapting them to real projects.",
          "On this website, I continue to share my experience, thoughts and blog posts on project management, digital transformation, information technology, leadership and professional development — contributing knowledge and value to the industry.",
        ],
        link: { href: "/blog", label: "Read my blog posts →" },
      },
    ],
    factsTitle: "Quick Facts",
    facts: [
      { label: "Location", value: "Istanbul, Turkey" },
      { label: "Experience", value: "10+ Years" },
      { label: "Expertise", value: "IT Project Management, Healthcare Informatics, Critical Infrastructure" },
      { label: "Certification", value: "PMP® (Project Management Institute)" },
      { label: "Languages", value: "Turkish (Native), English" },
    ],
    cta: "View My Experience",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;
  return { title: c.seoTitle, description: c.seoDescription };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <Container className="py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} />
          <p className="mt-6 text-lg font-semibold text-navy-950">
            {c.greeting}
          </p>
          <div className="prose-content mt-4">
            <p>{c.intro}</p>
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {c.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.link && (
                  <p>
                    <Link
                      href={section.link.href}
                      className="font-semibold text-accent-500 no-underline hover:text-navy-900"
                    >
                      {section.link.label}
                    </Link>
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/deneyimlerim">{c.cta}</Button>
          </div>
        </div>

        <aside className="space-y-4 h-fit rounded-2xl border border-navy-900/10 bg-slate-50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-950">
            {c.factsTitle}
          </h3>
          <dl className="mt-4 space-y-4">
            {c.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-medium text-slate-500">
                  {fact.label}
                </dt>
                <dd className="text-sm font-medium text-navy-950">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-6 block text-sm font-semibold text-accent-500 hover:text-navy-900"
          >
            {siteConfig.email}
          </a>
        </aside>
      </div>
    </Container>
  );
}
