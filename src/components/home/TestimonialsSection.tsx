"use client";

import { useEffect, useState } from "react";
import { LocalizedText, useLocale } from "@/components/LocalizedText";

const testimonials = [
  {
    name: "Hassan Basheer",
    nameAr: "حسن بشير",
    role: "Frontend Developer · AlexApps",
    roleAr: "Frontend Developer · AlexApps",
    linkedin: "https://www.linkedin.com/in/hassan-basheer-hb/",
    initials: "HB",
    quote: "Working with Al-Tayeb was a great experience. He is passionate, detail-oriented, technically strong, and handles complex problems calmly. He would be a valuable addition to any team.",
    quoteAr: "العمل مع الطيب كان تجربة ممتازة. هو شغوف، يهتم بالتفاصيل، وقوي تقنيًا، ويتعامل مع المشكلات المعقدة بهدوء. سيكون إضافة قوية لأي فريق.",
  },
  {
    name: "Mohamed Helmy",
    nameAr: "محمد حلمي",
    role: "Senior Backend Developer · AlexApps",
    roleAr: "Senior Backend Developer · AlexApps",
    linkedin: "https://www.linkedin.com/in/mohamed-helmy-99b190123/",
    initials: "MH",
    quote: "Al-Tayeb is technically strong, reliable, and consistently delivers high-quality work. He is also respectful and genuinely great to work with—any team would be fortunate to have him.",
    quoteAr: "الطيب قوي تقنيًا، شخص يعتمد عليه، ويقدم شغلًا بجودة عالية باستمرار. كما أنه محترم ومريح جدًا في التعامل، وسيكون إضافة مميزة لأي فريق.",
  },
  {
    name: "Khaled Elnaghi",
    nameAr: "خالد الناجي",
    role: "Former Senior · AlexApps",
    roleAr: "Senior سابق · AlexApps",
    linkedin: "https://www.linkedin.com/in/khaidelnaghi/",
    initials: "KE",
    pending: true,
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const locale = useLocale();
  const ar = locale === "ar";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-heading-row">
        <div>
          <p className="testimonials-kicker"><LocalizedText en="Testimonials" ar="توصيات" /></p>
          <h2 id="testimonials-heading"><LocalizedText en="What people say about me" ar="ماذا يقول عني من عملت معهم" /></h2>
        </div>
        <div className="testimonials-count" aria-hidden="true">0{active + 1} / 0{testimonials.length}</div>
      </div>

      <article className="testimonial-card" key={testimonial.name} aria-live="polite">
        <div className="testimonial-avatar" aria-hidden="true">{testimonial.initials}</div>
        <div className="testimonial-body">
          {testimonial.pending ? (
            <div className="testimonial-placeholder">
              <span className="testimonial-placeholder-icon">▧</span>
              <p><LocalizedText en="Recommendation screenshot will be added here." ar="سيتم إضافة صورة التوصية هنا." /></p>
            </div>
          ) : (
            <blockquote>“{ar ? testimonial.quoteAr : testimonial.quote}”</blockquote>
          )}
          <div className="testimonial-author">
            <div>
              <strong>{ar ? testimonial.nameAr : testimonial.name}</strong>
              <span>{ar ? testimonial.roleAr : testimonial.role}</span>
            </div>
            <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </article>

      <div className="testimonial-controls" aria-label="Testimonials navigation">
        <button type="button" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button>
        <div className="testimonial-dots">
          {testimonials.map((item, index) => <button className={index === active ? "active" : ""} type="button" key={item.name} onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} />)}
        </div>
        <button type="button" onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next testimonial">→</button>
      </div>
    </section>
  );
}
