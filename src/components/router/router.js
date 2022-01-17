import {createRouter, createWebHistory} from 'vue-router'
import login from "@/components/views/login";
import dashboardView from "@/components/views/dashboardView";
import about from "@/components/views/about";
import clientRequestView from "@/components/views/clientRequestView";
import store from "@/components/store/userStore"
const routes = [
    {path: '/', component: login, name: 'login', meta:{ requiresAuth: false}},
    {path: '/about', component: about, name: 'about', meta:{ requiresAuth: false}},
    {path: '/dashboard', component: dashboardView, name: 'dashboard', meta:{ requiresAuth: true}},
    {path: '/requests', component: clientRequestView, name: 'requests', meta: { requiresAuth: true}}

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
function isAuth(){
    return store.getters.getUser != null;
}
router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth === true && !isAuth()) next({ name: 'login'})
    else next()
})


export default router;