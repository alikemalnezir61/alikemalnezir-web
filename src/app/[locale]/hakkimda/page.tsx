import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

const copy = {
  tr: {
    eyebrow: "Hakkımda",
    title: "Teknoloji ve Yönetim Arasında Köprü Kuran Bir Proje Yöneticisi",
    intro:
      "10 yılı aşkın süredir bilgi teknolojileri proje yönetimi ve sağlık bilgi sistemleri (HBYS) alanında çalışıyorum. Kariyerim boyunca büyük ölçekli sağlık kurumları ve kritik altyapı projelerinde; teknik becerilerimi yönetimsel yaklaşımla birleştirerek operasyonel süreçlerin iyileştirilmesine katkı sağladım.",
    paragraphs: [
      "Kızılay Sağlık A.Ş, Liv Hospital ve Rönesans Holding gibi kurumlarda; altyapı yönetimi, HBYS entegrasyon süreçleri, HIMSS akreditasyon çalışmaları ve ekip yönetimi konularında güçlü bir liderlik sergiledim. Şu anda şehir hastaneleri kapsamında büyük ölçekli ICT projelerinin proje yöneticiliğini yürütüyorum.",
      "Agile Scrum yöntemlerini kullanarak projelerin her aşamasını titizlikle takip ederken, müşteri taleplerini hızlıca değerlendirip verimli sonuçlar elde ediyorum. Teknik uzmanlığımın yanı sıra takım çalışmasına yatkın, çözüm odaklı ve proaktif bir çalışma anlayışına sahibim.",
      "PMP® sertifikam ile proje yönetimi bilgi ve yetkinliklerimi uluslararası standartlarda belgelendirdim. Agile, Hybrid ve Waterfall metodolojilerini projenin doğasına uygun şekilde bir arada kullanıyorum.",
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
    title: "A Project Manager Bridging Technology and Management",
    intro:
      "I have been working in IT project management and healthcare information systems (HIS) for over 10 years. Throughout my career, I have contributed to improving operational processes in large-scale healthcare institutions and critical infrastructure projects by combining technical skills with a management-oriented approach.",
    paragraphs: [
      "At organizations such as Kızılay Sağlık A.Ş, Liv Hospital and Rönesans Holding, I demonstrated strong leadership in infrastructure management, HIS integration processes, HIMSS accreditation efforts and team management. I currently manage large-scale ICT projects within city hospitals.",
      "Using Agile Scrum methods, I closely track every phase of a project while quickly evaluating and implementing client requirements to achieve efficient results. Beyond technical expertise, I bring a collaborative, solution-oriented and proactive working style.",
      "With my PMP® certification, I have formally validated my project management knowledge and competencies to an international standard. I combine Agile, Hybrid and Waterfall methodologies depending on the nature of each project.",
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
  return { title: c.eyebrow, description: c.intro };
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
          <p className="mt-6 text-lg leading-8 text-slate-600">{c.intro}</p>
          <div className="prose-content mt-6">
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/deneyimlerim">{c.cta}</Button>
          </div>
        </div>

        <aside className="rounded-2xl border border-navy-900/10 bg-slate-50 p-6 h-fit">
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
