<template>
    <domainRegister> </domainRegister>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
// @ is an alias to /src
import state from '@/share/state'
import config from '@/share/config'
import domainRegister from '@/components/domainRegister.vue'

export default {
  name: 'domain',
  components: {
      domainRegister
  },
  setup() {
      const {isLogin} = state;
      if (isLogin() == false) {
          alert("尚未登入")
          location.replace(config.getCurrentUrl())
      }
  }
}
</script>

<style>
input {
    background-color: #f2f0f0;
}
</style>
