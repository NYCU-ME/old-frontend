<template>
    <div>
        <div v-for="item in domains" :key='item["id"]'>
            {{item["domain"]}}
            {{item["expDate"]}}
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
