import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageCode } from '../types';

interface AppContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const { i18n } = useTranslation();
  const [language, setCurrentLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as LanguageCode) || 'pt';
  });
  const [isLoading, setIsLoading] = useState(true);

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Set initial language
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [i18n, language]);

  useEffect(() => {
    // Force dark theme
    document.body.setAttribute('data-theme', 'dark');
  }, []);

  const value: AppContextType = {
    language,
    setLanguage,
    isLoading,
    setIsLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export { AppContext };