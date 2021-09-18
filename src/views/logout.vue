<script>
import {useCookie} from 'vue-cookie-next'
import state from '@/share/state'
import config from '@/share/config'

export default {
    name: 'Logout',
    setup() {
        const {isLogin} = state
        const cookie = useCookie()
        if (isLogin()) cookie.removeCookie("token")
        location.replace(config.getHomepageURL())
    }
}
</script>
