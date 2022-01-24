import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import logout from '../views/logout.vue'
import profile from '../views/profile.vue'
import domain from '../views/domain.vue'
import about from '../views/about.vue'

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
        },
        {
            path: '/logout',
            component: logout
        },
        {
            path: '/about',
            component: about
        }
    ]
})

export default router
