"use client";

import Image from "next/image";
import Link from "next/link";
import { LocalizedText, useLocale } from "@/components/LocalizedText";

const experiences = [
  {
    company: "AutoZad",
    companyAr: "AutoZad",
    eyebrow: "Saudi automotive startup · Concurrent role",
    eyebrowAr: "شركة سعودية ناشئة للسيارات · عمل متزامن",
    period: "May 2026 — Present",
    role: "Frontend Developer · Remote",
    roleAr: "Frontend Developer · عن بُعد",
    logo: "/images/companies/autozad.svg",
    link: "https://staging.almuthana.co/ar",
    bullets: [
      {
        en: "Building customer and admin workflows for vehicle listing, inspection, auctions, and payments.",
        ar: "بناء تدفقات العملاء والإدارة لإدراج السيارات والفحص والمزادات والمدفوعات.",
      },
      {
        en: "Turning evolving product requirements and REST API contracts into maintainable frontend features.",
        ar: "تحويل متطلبات المنتج وعقود REST APIs المتغيرة إلى خصائص Frontend قابلة للصيانة.",
      },
      {
        en: "Contributing to business discussions, product decisions, and workflow details—not only implementation.",
        ar: "المشاركة في مناقشات الـBusiness وقرارات المنتج وتفاصيل تدفقات العمل، وليس التنفيذ التقني فقط.",
      },
      {
        en: "Supporting deployment and investigating behavior across testing and production environments.",
        ar: "دعم النشر والتحقق من اختلاف السلوك بين بيئات Testing وProduction.",
      },
    ],
  },
  {
    company: "AlexApps",
    companyAr: "AlexApps",
    eyebrow: "Alexandria, Egypt",
    eyebrowAr: "الإسكندرية، مصر",
    period: "May 2025 — Present",
    role: "Frontend Developer · Full-time Remote",
    roleAr: "Frontend Developer · دوام كامل عن بُعد",
    logo: "/images/companies/alexapps.webp",
    link: "https://alexforprog.com/en/",
    bullets: [
      {
        en: "Working within product teams to deliver production SaaS dashboards across service, offers, and restaurant platforms.",
        ar: "العمل داخل فرق المنتج لتطوير لوحات تحكم SaaS إنتاجية لمنصات الخدمات والعروض والمطاعم.",
      },
      {
        en: "Implementing OTP authentication, RBAC, protected routes, and permission-aware navigation.",
        ar: "تنفيذ مصادقة OTP وRBAC والمسارات المحمية والتنقل المبني على الصلاحيات.",
      },
      {
        en: "Taking ownership of features and solving client problems closely from requirement clarification through delivery.",
        ar: "تحمل مسؤولية الخصائص وحل مشاكل العملاء عن قرب، من توضيح المتطلبات وحتى التسليم.",
      },
      {
        en: "Building Tap Payments, multi-step onboarding, filtering, pagination, search, and bilingual flows.",
        ar: "بناء Tap Payments وOnboarding متعدد الخطوات والتصفية وتقسيم الصفحات والبحث والتدفقات ثنائية اللغة.",
      },
    ],
  },
];

export function ExperienceSection() {
  const locale = useLocale();
  const ar = locale === "ar";

  return (
    <section className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-heading-row">
        <div>
          <p className="experience-kicker"><LocalizedText en="Career journey" ar="المسيرة المهنية" /></p>
          <h2 id="experience-heading"><LocalizedText en="Experience" ar="الخبرة" /></h2>
          <p className="experience-statement"><LocalizedText en="Where product thinking meets frontend engineering." ar="حيث يلتقي فهم المنتج مع هندسة الواجهات الأمامية." /></p>
          <p className="experience-summary"><LocalizedText en="1.5+ years building SaaS dashboards and business-critical frontend workflows in production." ar="خبرة عملية تزيد عن عام ونصف في بناء لوحات تحكم SaaS وتدفقات Frontend أساسية داخل منتجات فعلية." /></p>
        </div>
        <Link className="experience-more" href="/about"><LocalizedText en="Full experience" ar="عرض الخبرة كاملة" /> <span aria-hidden="true">↗</span></Link>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="experience-logo-wrap">
              {experience.logo ? (
                experience.link ? <a href={experience.link} target="_blank" rel="noopener noreferrer"><Image className="experience-logo" src={experience.logo} alt={`${experience.company} logo`} width={180} height={56} /></a> : <Image className="experience-logo" src={experience.logo} alt={`${experience.company} logo`} width={180} height={56} />
              ) : (
                <div className="experience-logo-fallback" aria-hidden="true">SA</div>
              )}
            </div>
            <div className="experience-content">
              <div className="experience-meta">
                <div>
                  <p className="experience-eyebrow">{ar ? experience.eyebrowAr : experience.eyebrow}</p>
                  <div className="experience-title-line">
                    <h3>{ar ? experience.companyAr : experience.company}</h3>
                    {experience.link && <a className="experience-website" href={experience.link} target="_blank" rel="noopener noreferrer"><LocalizedText en="Visit website" ar="زيارة الموقع" /> <span aria-hidden="true">↗</span></a>}
                  </div>
                  <p className="experience-role">{ar ? experience.roleAr : experience.role}</p>
                </div>
                <time>{experience.period}</time>
              </div>
              <ul>
                {experience.bullets.map((bullet) => <li key={bullet.en}>{ar ? bullet.ar : bullet.en}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
