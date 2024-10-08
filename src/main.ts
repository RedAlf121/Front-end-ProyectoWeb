import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import { createPinia } from 'pinia';
import i18n from './languages';
import PrimeVue from 'primevue/config';
import ToastService  from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import Tooltip from 'primevue/tooltip';
import 'primeicons/primeicons.css';
import {preset} from './config/preset.config';
import { VueQueryPlugin } from '@tanstack/vue-query';
import userStoreInstance from './store/userStore.ts';

createApp(App)
    .use(createPinia())
    .use(i18n)
    .use(router as any)
    .use(PrimeVue as any,{
        theme: {
            preset:preset,
            options: {
                darkModeSelector: 'false',
                cssLayer: false
            }
        }
    })
    .use(ToastService as any)
    .use(ConfirmationService as any)
    .use(VueQueryPlugin)
    .use(userStoreInstance as any)
    .directive('tooltip', Tooltip as any)
    .mount('#app');
