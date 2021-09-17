import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import logout from '../views/logout.vue'
import domainRegister from '../views/domainRegister.vue'
import domainManage from '../views/domainManage.vue'

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
            path: '/domainRegister',
            component: domainRegister
        },
        {
            path: '/domainManage',
            component: domainManage
        },
        {
            path: '/logout',
            component: logout
        }
    ]
})

export default router
