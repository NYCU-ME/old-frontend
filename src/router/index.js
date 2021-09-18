import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import logout from '../views/logout.vue'
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
            path: '/logout',
            component: logout
        },
        {
            path: '/domain',
            component: domain
        }
    ]
})

export default router
