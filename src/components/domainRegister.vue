<template>
    <div class="absolute top-13 left-0">
        <button class="bg-blue-500 hover:bg-blue-700 m-2 text-white font-bold py-2 px-2 rounded-full" @click="registerForm = !registerForm">
            <img src="@/assets/plus-solid.svg" class="align-middle inline" width="20" height="20"/> &nbsp;<div class="align-middle inline">註冊新網域</div>
        </button>
    </div>

    <div class="absolute top-0 w-full">
        <transition>
            <div v-if="registerForm"  class="relative top-64 z-50 mx-auto p-3 w-72 md:w-96 rounded-lg">
                <div class="bg-gray-700 py-2 font-medium text-white text-xl md:text-2xl text-center w-full rounded-t-lg">新增網域</div>

                <div class="py-2 px-4 bg-white w-full text-center text-md md:text-xl">
                    請於下方欄位輸入你想申請的網域 <br />
                    <input class="text-black m-auto" v-model.trim="customURL"/> .nycu.me
                </div>
                <div class="flex flex-wrap w-full bg-white rounded-b-lg px-2 py-2">
                    <button class="text-white py-1 px-2 block bg-blue-500 hover:bg-blue-700 m-auto" @click="sent">送出</button>
                    <button class="text-black py-1 px-2 block hover:bg-red-500 m-auto" @click="registerForm = !registerForm">關閉</button>
                </div>

            </div>
        </transition>
    </div>

    <div v-if="registerForm" @click="registerForm = !registerForm" class="opacity-50 bg-gray-600 absolute inset-0 w-full"></div>
</template>

<script>
// @ is an alias to /src
import {ref} from "vue"
import {useCookie} from 'vue-cookie-next'
import axios from 'axios'

let baseURL = import.meta.env.VITE_BASE_URL

export default {
    name: 'domainRegister',
    setup() {
      const cookie = useCookie()
      const customURL = ref("")
      const registerForm = ref(false)

      const sent = async function() {
          let requestConfig = {
              headers: {
                  'Authorization': "Bearer " + cookie.getCookie("token")
              }
          }

          try {
              let result = await axios.post(baseURL + "/domains/me/nycu/" + customURL.value, {}, requestConfig)
              console.log(result)
              location.replace(import.meta.env.VITE_HOMEPAGE_URL + "/domain")
          } catch(error) {
              if (error.response) {
                  let statusCode = error.response.status
                  console.log(statusCode)
                  if (statusCode == 401) {
                      cookie.removeCookie("token")
                      alert("Not logged\n")
                      location.replace(import.meta.env.VITE_HOMEPAGE_URL)
                  } else if (statusCode == 403) {
                      alert(error.response.data.msg)
                  }
              }
          }
      }

      return {customURL, sent, registerForm}
  }
}
</script>

<style>
input {
    background-color: #f2f0f0;
}

.v-enter-active, .v-leave-active {
    transition: all 0.6s ease;
}

.v-enter-from, .v-leave-to {
    opacity: 0;
}

.v-enter-from {
    transform: translateY(-300%);
}

.v-leave-to {
    transform: translateY(-300%);
}


.v-enter-to, .v-leave-from {
    opacity: 1;
}
</style>
