import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import '@/assets/tailwind.css'
import FontAwesomeIcon from '@/awesomefont'
import App from '@/App.vue'
import router from '@/router'

let app = createApp(App)
app.use(router)
app.use(VueCookieNext)
app.component('fa', FontAwesomeIcon)
app.mount('#app')

VueCookieNext.config({ expire: '1d' })
