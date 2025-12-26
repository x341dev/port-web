import { es } from './es';
import { en } from './en';
import { ca } from './ca';

export type Language = 'es' | 'en' | 'ca';

export const translations = {
  es,
  en,
  ca
};

export const getTranslation = (lang: Language) => translations[lang];
