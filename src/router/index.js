import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import domainRegister from '../views/domainRegister.vue'
import domainManage from '../views/domainManage.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes :  [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/domainRegister',
            component: domainRegister
        },
        {
            path: '/domainManage',
            component: domainManage
        }
    ]
})

export default router
