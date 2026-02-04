import { useMemo } from "react";
import { useLanguage } from "./useLanguage";

// Import all translations statically
import en from "../locales/en.json";
import sk from "../locales/sk.json";
import ru from "../locales/ru.json";
import ua from "../locales/ua.json";

const translations = { en, sk, ru, ua };

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  // Get current translations based on language
  const t = useMemo(() => {
    return translations[currentLanguage] || translations.en;
  }, [currentLanguage]);

  // Helper function to get nested translation by key path
  // Example: translate("menu.aboutMe") => "About Me"
  const translate = useMemo(() => {
    return (keyPath, fallback = "") => {
      const keys = keyPath.split(".");
      let result = t;

      for (const key of keys) {
        if (result && typeof result === "object" && key in result) {
          result = result[key];
        } else {
          return fallback || keyPath;
        }
      }

      return result || fallback || keyPath;
    };
  }, [t]);

  return { t, translate };
};

export default useTranslation;