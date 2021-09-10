<template>
    <div class="bg-indigo-500 shadow w-full md:py-3 pt-3 md:text-2xl text-white">
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

        <div class="bg-gray-300 mt-2 bg-indigo-500 text-white md:hidden" :class="{hidden: isHidden}">
            <router-link class="block py-2 text-center border" to="/login">登入</router-link>
            <router-link class="block py-2 text-center border" to="/domainManage">網域管理</router-link>
            <router-link class="block py-2 text-center border" to="/domainRegister">網域註冊</router-link>
        </div>
    </div>

    <div class="mb-4"></div>
    <router-view/>

</template>

<script>
import {ref} from "vue"

export default {
  name: 'App',
  setup() {
      const isHidden = ref(true)
      function showMobileMenu() {
          isHidden.value = isHidden.value ^ true;
      }
      return {isHidden, showMobileMenu}
  }
}
</script>

<style>
a.router-link-exact-active {
    font-weight: bold;
}
</style>
