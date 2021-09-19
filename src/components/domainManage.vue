<template>
    <div class="flex flex-wrap mt-4 justify-center">
        <div class="card p-4 mx-3 mb-3 bg-white shadow-xl w-auto md:w-3/12" v-for="item in domains" :key="item['id']">
            <div class="text-center mt-2 font-medium text-2xl md:text-3xl">{{item['domain']}}</div>
            <div class="text-center font-normal text-base md:text-lg">{{item['expDate']}}</div>
            <div class="flex p-2 justify-center">
                <button class="p-2 mr-2 rounded bg-blue-500 hover:bg-blue-700 font-bold text-white text-center">
                    Edit
                </button>
                <button class="p-2 rounded bg-red-500 hover:bg-red-700 font-bold text-white">Renew</button>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive} from "vue"
import axios from 'axios'
import {useCookie} from 'vue-cookie-next'
import shared from "@/share/shared"
import config from '@/share/config'

let baseURL = shared.getBaseURL()

export default {
    name: 'domainManage',
    async setup() {
        let domains = []

        let cookie = useCookie()
        let requestConfig = {
            headers: {
                'Authorization': "Bearer " + cookie.getCookie("token")
            }
        }

        try {
            let result = await axios.get(baseURL + "/auth", requestConfig)
            domains = result.data.domains
            domains = reactive(domains)
        } catch(error) {
            if (error.response) {
                let statusCode = error.response.status
                console.log(statusCode)
                if (statusCode == 401) {
                    cookie.removeCookie("token")
                    location.replace(config.getHomepageURL())
                }
            }
        }
        return {domains}
    }
}
</script>
