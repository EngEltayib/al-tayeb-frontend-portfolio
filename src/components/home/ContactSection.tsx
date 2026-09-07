import { LocalizedText } from "@/components/LocalizedText";

export function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-glow" aria-hidden="true" />
      <p className="contact-kicker"><LocalizedText en="Let’s work together" ar="لنعمل معًا" /></p>
      <h2 id="contact-heading">
        <LocalizedText
          en="Have a product challenge worth solving?"
          ar="لديك تحدٍ في منتج يستحق أن نعمل عليه؟"
        />
      </h2>
      <p className="contact-copy">
        <LocalizedText
          en="I’m open to full-time, part-time, freelance, and remote frontend opportunities."
          ar="أنا متاح لفرص Frontend بدوام كامل أو جزئي، والعمل الحر، والفرص عن بُعد."
        />
      </p>
      <div className="contact-actions">
        <a className="contact-primary" href="mailto:altayeb.kha@gmail.com"><LocalizedText en="Contact me" ar="تواصل معي" /> <span aria-hidden="true">↗</span></a>
        <a className="contact-secondary" href="https://linkedin.com/in/altayeb-khaled" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
      </div>
      <a className="contact-email" href="mailto:altayeb.kha@gmail.com">altayeb.kha@gmail.com</a>
    </section>
  );
}
