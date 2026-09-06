"use client";

import { useEffect, useState } from "react";

export type Locale = "en" | "ar";

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const sync = () => setLocale(document.documentElement.dataset.locale === "ar" ? "ar" : "en");
    sync();
    window.addEventListener("portfolio-locale-change", sync);
    return () => window.removeEventListener("portfolio-locale-change", sync);
  }, []);

  return locale;
}

export function LocalizedText({ en, ar }: { en: React.ReactNode; ar: React.ReactNode }) {
  const locale = useLocale();
  return <>{locale === "ar" ? ar : en}</>;
}

export function LocaleSection({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const activeLocale = useLocale();
  if (activeLocale !== locale) return null;
  return <>{children}</>;
}

export function LanguageToggle() {
  const locale = useLocale();

  const toggle = () => {
    const next: Locale = locale === "en" ? "ar" : "en";
    localStorage.setItem("portfolio-locale", next);
    document.documentElement.dataset.locale = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    window.dispatchEvent(new Event("portfolio-locale-change"));
  };

  return (
    <button className="language-toggle" type="button" onClick={toggle} aria-label="Switch language">
      {locale === "en" ? "ع" : "EN"}
    </button>
  );
}
