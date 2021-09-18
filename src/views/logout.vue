<script>
import {useCookie} from 'vue-cookie-next'
import state from '@/share/state'
import config from '@/share/config'
// @ is an alias to /src
export default {
  name: 'Logout',
  setup() {
      const {isLogin} = state
      const cookie = useCookie()
      if (isLogin()) cookie.removeCookie("token")
      location.replace(config.getCurrentUrl())
  }
}
</script>
