import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContextType, ThemeMode, LanguageCode } from '@/types';

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeMode) || 'dark';
  });
  const [language, setCurrentLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as LanguageCode) || 'pt';
  });
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    const transitionClass = theme === 'light' ? 'light-to-dark' : 'dark-to-light';
    
    // Criar overlay de transição
    const overlay = document.createElement('div');
    overlay.className = `theme-transition-overlay ${transitionClass}`;
    document.body.appendChild(overlay);
    
    // Forçar reflow para garantir que o elemento está no DOM
    overlay.offsetHeight;
    
    // Iniciar animação
    requestAnimationFrame(() => {
      overlay.classList.add('animating');
    });
    
    // Mudar tema no início da animação
    setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }, 150); // Timing otimizado para 1s de animação
    
    // Remover overlay após animação com cleanup
    setTimeout(() => {
      if (overlay && overlay.parentNode === document.body) {
        overlay.style.animation = 'none';
        document.body.removeChild(overlay);
      }
    }, 1050); // Pequena margem após a animação
  };

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
    // Apply theme to document
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const value: AppContextType = {
    theme,
    toggleTheme,
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
