<template>
    <template v-if="settingForm()">
        <div class="w-3/4 md:w-5/12 mx-auto mt-20">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-medium mx-auto p-2 rounded-lg m-2" @click="recordForm = !recordForm">新增紀錄</button>
        </div>

        <div class="flex flex-col w-3/4 md:w-5/12 mx-auto">
            <div class="-my-2 overflow-x-auto -mx-6 md:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full px-6 md:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-yellow-800">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-white">
                                        類型
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-white">
                                        內容
                                    </th>
                                    <th scope="col" class="text-sm text-left font-medium text-white relative px-6 py-3">
                                        TTL
                                    </th>
                                    <th scope="col" class="text-sm text-left font-medium text-white relative px-6 py-3">
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <template v-for="record in records" :key="record['id']">
                                    <tr>
                                        <td class="px-6 py-3">{{record["type"]}}</td>
                                        <td class="px-6 py-3">{{record["value"]}}</td>
                                        <td class="px-6 py-3">{{record["ttl"]}}</td>
                                        <td class="px-6 py-3">
                                            <img src="@/assets/trash-alt-solid.svg" class="align-middle inline mx-auto" width="25" height="25" @click="deleteRecord(record['type'], record['value'])"/>
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

    <div class="absolute top-0 w-full">
        <transition>
            <div v-if="recordForm" class="relative top-20 z-50 mx-auto p-3 w-2/3 md:w-1/3 rounded-lg">
                <div class="bg-gray-700 py-2 font-medium text-white text-xl md:text-2xl text-center w-full rounded-t-lg">新增紀錄</div>

                <div class="bg-white text-center p-4">
                    <div class="w-3/4 border-2 m-auto p-3 border-green-600">
                        <p class="text-lg">1. 請選擇紀錄的種類</p>
                        <select v-model="recordType" class="bg-white border-2 rounded-lg m-2 w-3/4 md:w-1/2">
                            <option value="A">A</option>
                            <option value="AAAA">AAAA</option>
                            <option value="CNAME">CNAME</option>
                            <option value="MX">MX</option>
                            <option value="TXT">TXT</option>
                        </select>
                    </div>
                </div>

                <div class="bg-white text-center p-4">
                    <div class="w-3/4 border-2 m-auto p-3 border-green-600">
                        2. 內容<br />
                        <input class="text-black bg-white border-2 p-1 w-3/4 overflow-hidden" v-model.trim="recordValue" /> <br />
                    </div>
                </div>

                <div class="bg-white text-center p-4">
                    <div class="w-3/4 border-2 m-auto p-3 border-green-600">
                        3. TTL<br />
                        <input class="text-black bg-white border-2 p-1 w-3/4 overflow-auto" placeholder="選填" v-model.trim="recordTTL"/> <br />
                        <span>請填 [1, 86400] 之間的數字<br /> 留空或不合法輸入的話會自動變成 5</span>
                    </div>
                </div>

                <div class="flex flex-wrap w-full bg-white rounded-b-lg px-2 py-2">
                    <button class="text-white py-1 px-2 block bg-blue-500 hover:bg-blue-700 m-auto" @click="addRecord">送出</button>
                    <button class="text-black py-1 px-2 block hover:bg-red-500 m-auto" @click="toggleRecord">關閉</button>
                </div>
            </div>
        </transition>
    </div>

    <div v-if="recordForm" @click="toggleRecord" class="opacity-50 bg-gray-600 absolute inset-0 w-full"></div>

    <div v-if="!settingForm()" class="flex flex-col w-3/4 md:w-5/12 mx-auto mt-20">
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
                                </th>
                                <th scope="col" class="text-sm text-left font-medium text-white relative px-6 py-3">
                                    操作
                                </th>
                                <th scope="col" class="text-sm text-left font-medium text-white relative px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <template v-for="domain in domains" :key="domain['id']">
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap align-middle text-md text-black font-medium">{{domain["domainName"]}}</td>
                                    <td class="px-4 py-3 whitespace-nowrap align-middle text-md text-black">{{domain["expDate"]}}</td>
                                    <td class="px-4 py-3 whitespace-nowrap text-md font-medium">
                                        <img src="@/assets/cog-solid.svg" class="align-middle inline mx-auto" width="25" height="25" @click="redirect(domain['id'])"/>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-md font-medium">
                                        <img src="@/assets/trash-alt-solid.svg" class="align-middle inline mx-auto" width="25" height="25" @click="releaseDomain(domain['id'])"/>
                                    </td>
                                    <td class="px-4 py-3 whitespace-nowrap text-md font-medium">
                                        <img v-if="needRenew(domain['id'])" @click="renew(domain['id'])" src="@/assets/sync-solid.svg" class="mx-auto align-middle inline" width="30" height="30"/>
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
import {reactive, ref} from "vue"
import axios from 'axios'
import {useCookie} from 'vue-cookie-next'
import shared from "@/share/shared"
import config from '@/share/config'
import { useRoute } from 'vue-router'

let baseURL = shared.getBaseURL()

export default {
    name: 'domainManage',
    async setup() {
        const route = useRoute()

        let recordTTL = ref(null)
        let recordValue = ref(null)
        let recordType = ref(null)

        let recordForm = ref(false)
        let records = ""
        let domains = ""
        let cookie = useCookie()
        let requestConfig = {
            headers: {
                'Authorization': "Bearer " + cookie.getCookie("token")
            }
        }

        // basic funtion
        function settingForm() {
            if (route.query.idx != undefined) return true
            else return false
        }

        function getDomainNames(domainNames) {
            let result = domainNames.split(".")
            result = result.reverse()
            return result
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

        function redirect(idx) {
            let url = config.getHomepageURL() + "/domain?idx=" + idx
            window.location.replace(url)
        }

        // Get domains
        // if route.data.domains != undefined then get records too
        try {
            let result = await axios.get(baseURL + "/auth", requestConfig)
            domains = result.data.domains

            if (settingForm()) {
                for (let i = 0; i < domains.length; ++i) {
                    if (domains[i]["id"] == route.query.idx) {
                        records = reactive(domains[i]["records"])
                    }
                }
            }

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

        // release the domain according to the index of domain
        async function releaseDomain(idx) {
            for (let i = 0; i < domains.length; ++i) {
                if (domains[i]["id"] == idx) {
                    let domainNames = getDomainNames(domains[i]["domainName"])
                    let currentURL = baseURL + "/domains"
                    for (let j = 0; j < domainNames.length; ++j) {
                        currentURL = currentURL + "/" + domainNames[j]
                    }

                    try {
                        let result = await axios.delete(currentURL, requestConfig)
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

        // renew the domain according to the index of domain
        async function renew(idx) {
            for (let i = 0; i < domains.length; ++i) {
                if (domains[i]["id"] == idx) {
                    let domainNames = getDomainNames(domains[i]["domainName"])
                    let currentURL = baseURL + "/renew"
                    for (let j = 0; j < domainNames.length; ++j) {
                        currentURL = currentURL + "/" + domainNames[j]
                    }

                    try {
                        let result = await axios.post(currentURL, {}, requestConfig)
                        console.log(result)
                        location.replace(config.getHomepageURL() + "/domain")
                    } catch (error) {
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

        // toggle add record dialog
        function toggleRecord() {
            recordForm.value = !recordForm.value
            recordTTL.value = null
            recordValue.value = null
            recordType.value = null
        }

        // add record
        async function addRecord() {
            let currentURL = baseURL + "/ddns"
            let domainNames = ""

            for (let i = 0; i < domains.length; ++i)
                if (domains[i]["id"] == route.query.idx) domainNames = getDomainNames(domains[i]["domainName"])

            for (let i = 0; i < domainNames.length; ++i)
                currentURL = currentURL + "/" + domainNames[i]

            currentURL = currentURL + "/records/" + recordType.value + "/" + recordValue.value

            let requestData = {

            }
            if (recordTTL.value != null) {
                requestData["ttl"] = recordTTL.value
            }

            try {
                let result = await axios.post(currentURL, requestData, requestConfig)
                console.log(result)
                redirect(route.query.idx)
            } catch (error) {
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

        async function deleteRecord(type, value) {
            let currentURL = baseURL + "/ddns"
            let domainNames = ""

            for (let i = 0; i < domains.length; ++i)
                if (domains[i]["id"] == route.query.idx) domainNames = getDomainNames(domains[i]["domainName"])

            for (let i = 0; i < domainNames.length; ++i)
                currentURL = currentURL + "/" + domainNames[i]

            currentURL = currentURL + "/records/" + type + "/" + value

            try {
                let result = await axios.delete(currentURL, requestConfig)
                console.log(result)
                redirect(route.query.idx)
            } catch (error) {
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

        return {domains, needRenew, renew, redirect, releaseDomain, records, settingForm, recordForm, recordTTL, recordValue, addRecord, recordType, toggleRecord, deleteRecord}
    }
}
</script>
