<template>
    <div class="md:w-2/4 w-3/4 md:p-2 p-1 m-2 border-4 border-indigo-500/50 text-center">
        <p class="md:text-2xl text-xl bg-gray-400">基本資訊</p>
        學號 <div class="md:text-2xl text-sm">{{domains["username"]}}</div>
        信箱 <div class="md:text-2xl text-sm">{{domains["email"]}}</div>
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
        let domains = ""

        let requestConfig = {
            headers: {
                'Authorization': "Bearer " + cookie.getCookie("token")
            }
        }

        await axios.get(baseURL + "/auth", requestConfig)
        .then(response => {
            domains = reactive(response.data)
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

        return {domains}
    }
}
</script>
