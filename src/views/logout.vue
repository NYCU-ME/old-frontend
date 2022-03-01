<script>
// @ is an alias to /src
import {useCookie} from "vue-cookie-next"

export default {
    name: 'logout',
    setup() {
        const cookie = useCookie()
        if (cookie.isCookieAvailable("token")) cookie.removeCookie("token")
        location.replace(import.meta.env.VITE_HOMEPAGE_URL)
    }
}
</script>
