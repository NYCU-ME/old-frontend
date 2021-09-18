<template>
    <domainRegister> </domainRegister>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
// @ is an alias to /src
import state from '@/share/state'
import config from '@/share/config'
import domainRegister from '@/components/domainRegister.vue'
import {useCookie} from 'vue-cookie-next'
import axios from 'axios'
import shared from "@/share/shared"

let baseURL = shared.getBaseURL()

export default {
    name: 'domain',
    components: {
        domainRegister
    },
    setup() {
        const {isLogin} = state;
        if (isLogin() == false) {
            alert("尚未登入")
            location.replace(config.getHomepageURL())
        }

        let cookie = useCookie()
        let requestConfig = {
            headers: {
                'Authorization': "Bearer " + cookie.getCookie("token")
            }
        }
        axios.get(baseURL + "/auth", requestConfig).then(
            (result) => {
                console.log(result)
            }
        ).catch(
            (error) => {
                if (error.response) {
                    let statusCode = error.response.status
                    console.log(statusCode)
                    if (statusCode == 401) {
                        cookie.removeCookie("token")
                        location.replace(config.getHomepageURL())
                    }
                }
            }
        )

    }
}
</script>

<style>
input {
    background-color: #f2f0f0;
}
</style>
