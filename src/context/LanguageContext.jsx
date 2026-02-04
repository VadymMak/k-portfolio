import { createContext, useState, useEffect } from "react";
import { detectCountry, filterLanguagesByCountry } from "../utils/geoLocation";

// All available languages
const ALL_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "sk", label: "Slovenčina" },
  { code: "ru", label: "Русский" },
  { code: "ua", label: "Українська" },
];

const LANGUAGE_STORAGE_KEY = "ak_selected_language";

// Create context
const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [availableLanguages, setAvailableLanguages] = useState(ALL_LANGUAGES);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize: load saved language and detect country
  useEffect(() => {
    const initLanguage = async () => {
      // 1. Check localStorage for saved language
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

      // 2. Detect country and filter languages
      const country = await detectCountry();
      const filtered = filterLanguagesByCountry(ALL_LANGUAGES, country);
      setAvailableLanguages(filtered);

      // 3. Set language (saved > browser > default)
      if (savedLanguage && filtered.some((lang) => lang.code === savedLanguage)) {
        // Use saved language if it's still available (not filtered out)
        setCurrentLanguage(savedLanguage);
      } else if (savedLanguage && !filtered.some((lang) => lang.code === savedLanguage)) {
        // Saved language was filtered out (e.g., Russian user moved to Ukraine)
        // Fall back to English
        setCurrentLanguage("en");
        localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
      } else {
        // No saved language - try to detect from browser
        const browserLang = navigator.language?.slice(0, 2).toLowerCase();
        const matchedLang = filtered.find(
          (lang) => lang.code === browserLang || 
          (browserLang === "uk" && lang.code === "ua") // Ukrainian browser code is 'uk'
        );
        
        if (matchedLang) {
          setCurrentLanguage(matchedLang.code);
          localStorage.setItem(LANGUAGE_STORAGE_KEY, matchedLang.code);
        } else {
          // Default to English
          setCurrentLanguage("en");
        }
      }

      setIsLoading(false);
    };

    initLanguage();
  }, []);

  // Change language and save to localStorage
  const changeLanguage = (code) => {
    if (availableLanguages.some((lang) => lang.code === code)) {
      setCurrentLanguage(code);
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    }
  };

  // Get current language label
  const getCurrentLanguageLabel = () => {
    return (
      availableLanguages.find((lang) => lang.code === currentLanguage)?.label ||
      "English"
    );
  };

  const value = {
    currentLanguage,
    availableLanguages,
    changeLanguage,
    getCurrentLanguageLabel,
    isLoading,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;