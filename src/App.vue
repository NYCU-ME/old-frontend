<template>
    <div class="shadow w-full bg-white md:py-3 pt-3 md:text-2xl">
        <div class="flex justify-between">
            <div class="md:flex">
                <router-link class="ml-3 md:mr-3 lg:py-1" to="/">NYCU.ME</router-link>
            </div>
            <div class="md:flex hidden">
                <router-link class="md:ml-3 lg:py-1" to="/domainManage">網域管理</router-link>
                <router-link class="md:ml-3 lg:py-1" to="/domainRegister">網域註冊</router-link>
                <router-link class="md:ml-3 mr-3 lg:py-1" to="/login">登入</router-link>
            </div>

            <div class="md:hidden flex mr-3">
                <button @click="showMobileMenu()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>
        </div>


        <div class="bg-gray-300 mt-2" :class="{hidden: data.isHidden}">
            <router-link class="block py-2 text-center border" to="/login">登入</router-link>
            <router-link class="block py-2 text-center border" to="/domainManage">網域管理</router-link>
            <router-link class="block py-2 text-center border" to="/domainRegister">網域註冊</router-link>
        </div>
    </div>

    <div class="mb-10"></div>
    <router-view/>
</template>

<script>
import {reactive} from "vue"

export default {
  name: 'App',
  setup() {
      let data = reactive({
          isHidden: true
      })
      function showMobileMenu() {
          if (data.isHidden) data.isHidden = false
          else data.isHidden = true
      }
      return {data, showMobileMenu}
  }
}
</script>

<style>
a.router-link-exact-active {
    font-weight: bold;
}
</style>
