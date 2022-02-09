import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueCookieNext } from 'vue-cookie-next'
import './assets/tailwind.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faLink } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(faLink)
/* add font awesome icon component */

let app = createApp(App)
app.use(router)
app.use(VueCookieNext)
app.component('fa', FontAwesomeIcon)
app.mount('#app')

VueCookieNext.config({ expire: '1d' })
