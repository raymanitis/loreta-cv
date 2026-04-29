import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  STORAGE_KEY,
  translations,
  pick,
} from "../i18n/translations";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s === "lv" || s === "en") return s;
    } catch (_) {
      /**/
    }
    return "en";
  });

  const setLang = useCallback((l) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch (_) {
      /**/
    }
  }, []);

  const tk = useCallback((obj) => pick(lang, obj), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang === "lv" ? "lv" : "en";
    document.title = pick(lang, translations.meta.title);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: translations, tk }), [
    lang,
    setLang,
    tk,
  ]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
