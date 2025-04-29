import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import es from './es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      english: { translation: en },
      espanol: { translation: es }
    },
    lng: 'espanol',
    fallbackLng: 'english',
    interpolation: { escapeValue: false }
  });

export default i18n;
