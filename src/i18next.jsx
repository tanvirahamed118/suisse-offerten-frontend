// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en";
import gr from "./translation/gr";
import fr from "./translation/fr";

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      gr: {
        translation: gr,
      },
      fr: {
        translation: fr,
      },
    },
    lng: "gr", // Default language
    fallbackLng: "gr", // Fallback language in case the current language cannot be found
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
