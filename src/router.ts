import {createWebHistory,createRouter, Router, RouteRecordRaw} from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login/Login.vue';
import ForgotPassword from './views/Login/ForgotPassword.vue';
import Error404 from './components/Error/Error404.vue';
const routes: RouteRecordRaw[] = [
    
    {
        path: '/', 
        component: Login
    },
    {
        path: '/home',  
        name: 'home',
        component: Home,
    },
    {
        path: '/forgot-password',  
        name: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: '/:pathMatch(.*)*', 
        component: Error404
    }
];


const router: Router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;