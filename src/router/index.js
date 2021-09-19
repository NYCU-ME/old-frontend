import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import profile from '../views/profile.vue'
import domain from '../views/domain.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes :  [
        {
            path: '/',
            component: home
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/profile',
            component: profile
        },
        {
            path: '/domain',
            component: domain
        }
    ]
})

export default router
