<template>
    <div id="navbar" class="md:flex items-center shadow w-full p-3 text-gray-400 bg-[#343a40]">
        <div class="grow flex justify-between items-center">
            <!-- brand -->
            <div class="mr-auto">
                <router-link class="text-2xl text-white" to="/">NYCU.ME</router-link>
            </div>

            <!-- toggle button -->
            <div class="md:hidden flex">
                <button class="border border-gray-400 p-1" @click="toggleMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- navs -->
        <ul class="navs mt-2 md:mt-0 md:flex gap-x-6" :class="{ hidden: isMobileMenuHidden }">
            <li v-if="isLogin()" class="py-1">
                <router-link to="/domain">網域管理</router-link>
            </li>
            <li v-if="isLogin()" class="py-1">
                <router-link to="/profile">個人資訊</router-link>
            </li>
            <li class="py-1">
                <router-link to="/about">關於我們</router-link>
            </li>
            <li class="py-1">
                <router-link v-if="isLogin()" to="/logout">登出</router-link>
                <router-link v-else to="/login">登入</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import state from '@/share/state'

// The mobile menu state is not shared with other components.
// Therefore no need to save it globally; instead, use a local var.
const { /* toggleMobileMenu, isMobileMenuHidden, */ isLogin } = state

const isMobileMenuHidden = ref(true)
function toggleMobileMenu() {
    isMobileMenuHidden.value = !isMobileMenuHidden.value
}
</script>

<style lang="scss">
/* what is this @@? 
a.router-link-exact-active {
    color: white;
}
*/

#navbar {
    // Merged into #navbar class list
    // background-color: #343a40;

    .navs {
        a {
            @apply hover:opacity-80;
        }
    }
}
</style>
