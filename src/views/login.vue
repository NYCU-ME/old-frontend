<script>
// @ is an alias to /src

export default {
    name: 'login',
    setup() {
        location.replace(import.meta.env.VITE_LOGIN_URL)
    }
}
</script>
