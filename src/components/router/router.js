import {createRouter, createWebHistory} from 'vue-router'
import login from "@/components/views/login";
import dashboardView from "@/components/views/dashboardView";

const routes = [
    {path: '/', component: login, name: 'login'},
    {path: '/dashboard', component: dashboardView, name: 'dashboard'}
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})

export default router;