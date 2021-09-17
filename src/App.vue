<template>
    <div id="navbar" class="shadow w-full md:py-3 pt-3 pb-3 md:text-xl text-gray-400">
        <div class="flex justify-between items-center">
            <div class="md:flex">
                <router-link class="ml-6 text-2xl text-white align-middle md:mr-3 lg:py-1" to="/">NYCU.ME</router-link>
            </div>
            <div class="md:flex hidden">
                <router-link class="md:ml-3 lg:py-1" to="/domainManage">網域管理</router-link>
                <router-link class="md:ml-3 lg:py-1" to="/domainRegister">網域註冊</router-link>
                <router-link v-if="isLogin()" class="md:ml-3 mr-3 lg:py-1" to="/logout">登出</router-link>
                <router-link v-else class="md:ml-3 mr-3 lg:py-1" to="/login">登入</router-link>
            </div>

            <div class="md:hidden flex mr-3">
                <button @click="showMobileMenu()" class="border border-gray-400 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>
        </div>

        <div class="text-left md:hidden mt-3 ml-6" :class="{hidden: isHidden}">
            <router-link v-if="isLogin()" class="block py-2" to="/logout">登出</router-link>
            <router-link v-else class="block py-2" to="/login">登入</router-link>
            <router-link class="block py-2" to="/domainManage">網域管理</router-link>
            <router-link class="block py-2" to="/domainRegister">網域註冊</router-link>
        </div>
    </div>

    <div class="mb-4"></div>
    <router-view/>

</template>

<script>
import {ref} from "vue"
import {useCookie} from 'vue-cookie-next'

export default {
  name: 'App',
  setup() {
      const isHidden = ref(true)
      const cookie = useCookie()

      function showMobileMenu() {
          isHidden.value = isHidden.value ^ true;
      }

      function isLogin() {
          if (cookie.isCookieAvailable("token")) {
              return true;
          } else {
              return false;
          }
      }

      return {isHidden, showMobileMenu, isLogin}
  }
}
</script>

<style>
a.router-link-exact-active {
    color: white;
}

#navbar {
    background-color: #343a40;
}
</style>
