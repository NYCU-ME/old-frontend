<template>
<div></div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {useCookie} from 'vue-cookie-next'
import {useRoute}  from 'vue-router'
import {ref, reactive} from "vue"

export default {
  name: 'Home',
  setup() {
      let route = useRoute()
      const {setCookie} = useCookie()
      setCookie("code", route.query.code)
      console.log(route.query.code)
  }
}
</script>
