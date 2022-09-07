import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import { authGuard } from '@/_helpers/auth-guard.js'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: authGuard
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
