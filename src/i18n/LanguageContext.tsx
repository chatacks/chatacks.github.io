import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Lang, TranslationStrings } from "./types";
import { en } from "./en";
import { ptBR } from "./pt-BR";

const STORAGE_KEY = "portfolio-lang";

const translations: Record<Lang, TranslationStrings> = { en, "pt-BR": ptBR };

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt-BR") return stored;
  } catch {}
  return "en";
}

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends string
        ? K
        : T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : never;
    }[keyof T & string]
  : never;

export type TranslationKey = NestedKeyOf<TranslationStrings>;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: () => "",
});

function getByPath(obj: Record<string, unknown>, path: string): string {
  const value = path
    .split(".")
    .reduce<unknown>((acc, key) => (acc as Record<string, unknown>)?.[key], obj);
  return typeof value === "string" ? value : path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt-BR" ? "pt-BR" : "en";
  }, [lang]);

  const t = useCallback(
    (key: TranslationKey): string => {
      return getByPath(
        translations[lang] as unknown as Record<string, unknown>,
        key,
      );
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t }),
    [lang, setLang, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
