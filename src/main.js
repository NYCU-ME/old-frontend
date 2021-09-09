import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {VueCookieNext} from 'vue-cookie-next'
import './assets/tailwind.css';

let app = createApp(App)
app.use(router)
app.use(VueCookieNext)
app.mount('#app')
