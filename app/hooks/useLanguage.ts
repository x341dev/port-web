import { useState, useEffect } from 'react';
import type { Language } from '~/lib/translations';

export function useLanguage() {
  const [lang, setLang] = useState<Language>('es');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && ['es', 'en', 'ca'].includes(savedLang)) {
      setLang(savedLang);
    }
    setIsLoaded(true);
  }, []);

  const changeLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const toggleLang = () => {
    const langOrder: Language[] = ['es', 'en', 'ca'];
    const currentIndex = langOrder.indexOf(lang);
    const nextIndex = (currentIndex + 1) % langOrder.length;
    changeLang(langOrder[nextIndex]);
  };

  return { lang, changeLang, toggleLang, isLoaded };
}
