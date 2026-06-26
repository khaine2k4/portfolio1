"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { translations, type Locale, type Dict } from "@/data/translations";

type LanguageContextType = {
  lang: Locale;
  setLang: (l: Locale) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to English on first visit.
  const [lang, setLangState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "vi") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Locale) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  const toggle = () => setLang(lang === "en" ? "vi" : "en");

  const t = translations[lang] as Dict;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within a LanguageProvider");
  return ctx;
}
