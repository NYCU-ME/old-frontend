<script>
// @ is an alias to /src
let client_id = "29ZuGjlHp2R4ctu7lKc6jwLLJjfxrXnuK7LzD55Z"

export default {
  name: 'login',
  setup() {
      let s = "https://id.nycu.edu.tw/o/authorize/?client_id=" + client_id + "&response_type=code&scope=profile"
      location.replace(s)
  }
}
</script>
