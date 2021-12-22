import {createRouter, createWebHistory} from 'vue-router'
import login from "@/components/views/login";
import dashboardView from "@/components/views/dashboardView";
//const fb = require('@/components/scripts/firebaseConfig.js')

const routes = [
    {path: '/', component: login, name: 'login'},
    {path: '/dashboard', component: dashboardView, name: 'dashboard', meta:{ requiresAuth: true}}
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})
/*
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth.currentUser

    if (requiresAuth && !currentUser) next({ path: '/login', query: { redirect: to.fullPath } })
    else if (!requiresAuth && currentUser) next('/')
    else if (!requiresAuth && !currentUser) next()
    else next()
})
*/
export default router;