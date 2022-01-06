<template>
    <div class="text-center">
        <div class="text-md lg:text-2xl mb-4">請於下欄中輸入您想註冊的網域<br />系統會為您確認是否可註冊</div>
        <div class="text-md md:text-2xl lg:text-3xl font-bold mb-4">
            <input class="p-2 w-54 border border-gray-400" type="text" v-model.trim="customURL"> .nycu.me
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="sent()">
          送出
        </button>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {ref} from "vue"
import {useCookie} from 'vue-cookie-next'
import axios from 'axios'
import config from "@/share/config"
import shared from "@/share/shared"

let baseURL = shared.getBaseURL()

export default {
    name: 'domainRegister',
    setup() {
      const cookie = useCookie()
      const customURL = ref("")

      const sent = async function() {
          let requestConfig = {
              headers: {
                  'Authorization': "Bearer " + cookie.getCookie("token")
              }
          }

          try {
              let result = await axios.post(baseURL + "/ddns/me/nycu/" + customURL.value, {}, requestConfig)
              console.log(result)
              location.replace(config.getHomepageURL() + "/domain")
          } catch(error) {
              if (error.response) {
                  let statusCode = error.response.status
                  console.log(statusCode)
                  if (statusCode == 401) {
                      cookie.removeCookie("token")
                      location.replace(config.getHomepageURL())
                  } else if (statusCode == 403) {
                      alert(error.response.data.msg)
                  }
              }
          }
      }

      return {customURL, sent}
  }
}
</script>

<style>
input {
    background-color: #f2f0f0;
}
</style>
