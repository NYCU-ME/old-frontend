<template>
<div id="bg1" class="w-11/12 m-auto">
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>
    <h1> fhafhia</h1>

</div>
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

<style>
#bg1 {
    background-image: url('../assets/bg1.png');
}

</style>
