import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './data/translations/fr.json';
import en from './data/translations/en.json';

const isBrowser = typeof window !== 'undefined';
const storedLanguage = isBrowser ? localStorage.getItem('adam-hannachi-lang') : null;
const browserLanguage = isBrowser ? window.navigator.language.split('-')[0] : 'fr';
const defaultLanguage = storedLanguage || (browserLanguage === 'fr' ? 'fr' : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en }
    },
    lng: defaultLanguage,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

if (isBrowser) {
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('adam-hannachi-lang', lng);
    document.documentElement.setAttribute('lang', lng);
  });

  document.documentElement.setAttribute('lang', defaultLanguage);
}

export default i18n;
