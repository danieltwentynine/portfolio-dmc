import { createContext, useContext, useState } from "react";
import { translations, Language, Translations } from "../i18n/translations";

function readStoredLanguage(): Language {
  const stored = localStorage.getItem("lang");
  return stored === "en" || stored === "pt" ? stored : "en";
}

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: translations.en,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(readStoredLanguage);

  const setLang = (next: Language) => {
    setLangState(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
