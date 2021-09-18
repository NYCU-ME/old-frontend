<script>
// @ is an alias to /src
import shared from '@/share/shared'

export default {
    name: 'login',
    setup() {
        location.replace(shared.getLoginURL())
    }
}
</script>
