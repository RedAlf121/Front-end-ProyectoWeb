import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import { createPinia } from 'pinia';
import i18n from './languages';

createApp(App)
    .use(createPinia())
    .use(i18n)
    .use(router as any)
    .mount('#app');
