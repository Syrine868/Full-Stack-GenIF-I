import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEn from "./translations/en/common.json";
import translationFR from "./translations/fr/common.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
      react:{
            useSuspense: false,
    wait: false,
      },

    resources: {
      en: {
        translations: translationEn,
      },
      fr: {
        translations: translationFR,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;