<template>
    <domainManage :domains="domains"></domainManage>
    <domainRegister> </domainRegister>
</template>

<script>
// @ is an alias to /src
import state from '@/share/state'
import config from '@/share/config'
import domainRegister from '@/components/domainRegister.vue'
import domainManage from '@/components/domainManage.vue'
import {useCookie} from 'vue-cookie-next'
import axios from 'axios'
import shared from "@/share/shared"

let baseURL = shared.getBaseURL()

export default {
    name: 'domain',
    components: {
        domainRegister,
        domainManage
    },
    setup() {
        const {isLogin} = state;
        if (isLogin() == false) {
            alert("尚未登入")
            location.replace(config.getHomepageURL())
        }

        let domains = []
        let cookie = useCookie()
        let requestConfig = {
            headers: {
                'Authorization': "Bearer " + cookie.getCookie("token")
            }
        }
        axios.get(baseURL + "/auth", requestConfig).then(
            (result) => {
                domains = result.data["domains"]
                console.log(result.data)
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

        return {domains}
    }
}
</script>

<style>
input {
    background-color: #f2f0f0;
}
</style>
