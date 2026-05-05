import { useContext } from "react";
import { LanguageContext } from "@/i18n/LanguageContext";
import type { Lang, TranslationKey } from "@/i18n/types";

export function useLang(): {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
} {
  return useContext(LanguageContext);
}
