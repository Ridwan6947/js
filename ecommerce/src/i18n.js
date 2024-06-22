// i18n.js

import { createI18n } from 'vue-i18n';

import en from './language/en.json';
import es from './language/es.json';

const messages = {
  en,
  es
};

const i18n = createI18n({
  locale: 'en', 
  fallbackLocale: 'en',
  messages 
});

export default i18n;
