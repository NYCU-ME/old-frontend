<template>
    <div class="flex flex-col w-5/12 m-auto mt-20">
        <div class="-my-2 overflow-x-auto -mx-6 md:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full px-6 md:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-700">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-white">
                                    網域名稱
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-white">
                                    到期日
                                </th>
                                <th scope="col" class="text-sm text-left font-medium text-white relative px-6 py-3">
                                    操作
                                    <span class="sr-only">編輯</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <template v-for="item in domains" :key="item['id']">
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap align-middle"><div class="text-md font-medium text-gray-900">{{item["domainName"]}}</div></td>
                                    <td class="px-4 py-3 whitespace-nowrap align-middle"><div class="text-md text-gray-900">{{item["expDate"]}}</div></td>
                                    <td class="px-4 py-3 whitespace-nowrap text-md font-medium">
                                        <img src="@/assets/setting.png" class="align-middle inline" width="30" height="30" @click="toggle(item['id'])"/>
                                        <img v-if="needRenew(item['id'])" @click="renew(item['id'])" src="@/assets/renew.png" class="ml-2 align-middle inline" width="30" height="30"/>
                                    </td>
                                </tr>
                                <tr v-if="show[item['id']]">
                                    <td class="px-4 py-3 align-middle text-md font-medium text-gray-900" colspan="3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
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
        let domains = ""
        let cookie = useCookie()
        let show = {}
        let requestConfig = {
            headers: {
                'Authorization': "Bearer " + cookie.getCookie("token")
            }
        }

        try {
            let result = await axios.get(baseURL + "/auth", requestConfig)
            domains = result.data.domains

            domains = reactive(domains)
            for (let i = 0; i < domains.length; ++i) {
                show[domains[i]["id"]] = false
            }
            show = reactive(show)
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

        function needRenew(idx) {
            for (let i = 0; i < domains.length; ++i) {
                if (domains[i]["id"] == idx) {
                    var s = domains[i]["expDate"]
                    var diff = Date.parse(s) - Date.parse(new Date().toUTCString())

                    if (diff / 1000 < 60 * 60 * 24 * 7) {
                        return true
                    } else {
                        return false
                    }
                }
            }
            return false
        }

        async function renew(idx) {
            for (let i = 0; i < domains.length; ++i) {
                if (domains[i]["id"] == idx) {
                    let domainNames = domains[i]["domainName"].split(".")
                    domainNames = domainNames.reverse()
                    let currentURL = baseURL + "/renew"
                    for (let j = 0; j < domainNames.length; ++j) {
                        currentURL = currentURL + "/" + domainNames[j]
                    }

                    try {
                        let result = await axios.post(currentURL, {}, requestConfig)
                        console.log(result)
                        location.replace(config.getHomepageURL() + "/domain")
                    } catch(error) {
                        if (error.response) {
                            let statusCode = error.response.status
                            console.log(statusCode)
                            if (statusCode == 401) {
                                cookie.removeCookie("token")
                                alert("Not logged\n")
                                location.replace(config.getHomepageURL())
                            } else if (statusCode == 403) {
                                alert(error.response.data.msg)
                            }
                        }
                    }
                }
            }
        }

        function toggle(idx) {
            show[idx] = !show[idx]
        }

        return {domains, needRenew, renew, show, toggle}
    }
}
</script>
