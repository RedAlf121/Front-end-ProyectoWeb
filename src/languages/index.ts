import { createI18n } from "vue-i18n"
import en from './en.json';
import es from './es.json';

const messages = {
    en,
    es
}

const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: "en",
    messages
});

export default i18n;