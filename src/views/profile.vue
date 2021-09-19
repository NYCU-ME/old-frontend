<template>
    <div class="text-center">
        <div class="text-9xl">WIP</div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="logOut">
          登出
        </button>
    </div>

</template>

<script>
import {useCookie} from "vue-cookie-next"
import config from "@/share/config"

export default {
    name: 'profile',
    setup() {
        const cookie = useCookie()

        const logOut = function() {
            if (cookie.isCookieAvailable("token")) cookie.removeCookie("token")
            location.replace(config.getHomepageURL())
        }

        return {logOut}
    }
}
</script>
