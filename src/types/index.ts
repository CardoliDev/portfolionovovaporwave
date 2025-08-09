export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface PersonalInfo {
  name: string;
  title: string[];
  description: string;
  avatar?: string;
  resume?: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  accent: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  image?: string;
  url?: string;
}

export type ThemeMode = 'light' | 'dark';

export type LanguageCode = 'pt' | 'en' | 'fr';

export interface AppContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
