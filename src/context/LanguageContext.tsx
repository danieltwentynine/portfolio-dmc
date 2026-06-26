import { createContext, useContext, useState } from "react";
import { translations, Language, Translations } from "../i18n/translations";

function readStoredLanguage(): Language {
  const stored = localStorage.getItem("lang");
  return stored === "en" || stored === "pt" ? stored : "en";
}

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: translations.en,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(readStoredLanguage);

  const toggleLang = () => {
    const next: Language = lang === "en" ? "pt" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
