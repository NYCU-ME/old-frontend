<template>
<div class="bg-white w-11/12 mb-20 text-center mx-auto">
    <div class="text-4xl font-medium mb-6">使用說明</div>
    <div class="my-2 border-2 hover:shadow-lg p-2 rounded-xl mx-auto w-2/3 md:w-1/2">
        <div class="font-medium text-xl">新增網域</div>
        <div class="text-md">
            點選「網域管理」最左邊的藍色按鈕「註冊新網域」後，在欄位中輸入想申請的網域按送出後即可
            <img class="my-1 mx-auto" src="@/assets/addDomain.png" />
        </div>
    </div>

    <div class="my-2 border-2 hover:shadow-lg p-2 rounded-xl mx-auto w-2/3 md:w-1/2">
        <div class="font-medium text-xl">刪除網域</div>
        <div class="text-md">
            在申請網域後，可以在「網域管理」的頁面中看到自己所申請的網域名稱、到期日等，按下刪除的圖示即可完成刪除操作
            <img class="my-1 mx-auto" src="@/assets/delete.png" />
        </div>
    </div>

    <div class="my-2 border-2 hover:shadow-lg p-2 rounded-xl mx-auto w-2/3 md:w-1/2">
        <div class="font-medium text-xl">網域續約</div>
        <div class="text-md">
            當網域即將在 7 天內過期時，會出現一個刷新按鈕，按下後即可續約該網域
            <img class="my-1 mx-auto" src="@/assets/renew.png" />
        </div>
    </div>

    <div class="my-2 border-2 hover:shadow-lg p-2 rounded-xl mx-auto w-2/3 md:w-1/2">
        <div class="font-medium text-xl">新增網域紀錄</div>
        <div class="text-md">
            在按下齒輪的按鈕後，會跳轉至網域紀錄的管理頁面
            在這個頁面中，可以在表格的上方找到一個藍色的按鈕「新增紀錄」，點開後填入相對應的資料即可
            <img class="my-1 mx-auto" src="@/assets/addRecord.png" />
        </div>
    </div>
</div>
</template>
<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {useCookie} from 'vue-cookie-next'
import {useRoute}  from 'vue-router'
import axios from 'axios'

let baseURL = import.meta.env.VITE_BASE_URL

export default {
    name: 'home',
    setup() {
        let route = useRoute()
        const cookie = useCookie()

        if (route.query.code != undefined) {
            axios.get(baseURL + "/oauth/" + route.query.code).then(
                (result) => {
                    cookie.setCookie("token", result.data.token)
                    location.replace(import.meta.env.VITE_HOMEPAGE_URL)
                }
            ).catch(
                (error) => {
                    if (error.response) {
                        let statusCode = error.response.status
                        console.log(statusCode)
                        alert("登入失敗")
                    }
                }
            )
        }
    }
}
</script>
