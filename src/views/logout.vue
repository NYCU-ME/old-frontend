<script>
import {useCookie} from 'vue-cookie-next'
// @ is an alias to /src
export default {
  name: 'Logout',
  setup() {
      const cookie = useCookie()
      cookie.removeCookie("token")
      location.replace("https://www.nycu.me")
  }
}
</script>
