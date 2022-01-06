<script>
// @ is an alias to /src
import shared from '@/share/shared'
import {useCookie} from "vue-cookie-next"
import config from "@/share/config"

export default {
    name: 'logout',
    setup() {
        const cookie = useCookie()
        if (cookie.isCookieAvailable("token")) cookie.removeCookie("token")
        location.replace(config.getHomepageURL())
    }
}
</script>
