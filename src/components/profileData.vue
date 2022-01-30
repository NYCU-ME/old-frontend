<template>
    <div class="w-min md:p-2 p-1 m-2 shadow">
        <p class="md:text-2xl text-xl bg-gray-500 text-center text-white">基本資訊</p>
        學號 <div class="md:text-2xl text-sm">{{profile["username"]}}</div>
        信箱 <div class="md:text-2xl text-sm">{{profile["email"]}}</div>
    </div>
</template>

<script>
import {useCookie} from "vue-cookie-next"
import config from "@/share/config"
import {reactive} from "vue"
import axios from 'axios'
import shared from "@/share/shared"

let baseURL = shared.getBaseURL()

export default {
    name: 'profileData',
    async setup() {
        const cookie = useCookie()
        let profile = ""

        let requestConfig = {
            headers: {
                'Authorization': "Bearer " + cookie.getCookie("token")
            }
        }

        await axios.get(baseURL + "/auth", requestConfig)
        .then(response => {
            profile = reactive(response.data)
        })
        .catch(error => {
            if (error.response) {
                let statusCode = error.response.status
                console.log(statusCode)
                if (statusCode == 401) {
                    cookie.removeCookie("token")
                    location.replace(config.getHomepageURL())
                }
            }
        })

        return {profile}
    }
}
</script>
