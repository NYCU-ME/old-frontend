<template>
<div></div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {reactive} from "vue"
import {useCookie} from 'vue-cookie-next'
import {useRoute}  from 'vue-router'

export default {
  name: 'Home',
  setup() {
      let route = useRoute()
      const state = reactive({
          code : route.query.code
      })
      const {setCookie} = useCookie()
      setCookie("code", route.query.code)
      // this.$cookies.set("code", route.query.code)
      return {state}
  }
}
</script>
