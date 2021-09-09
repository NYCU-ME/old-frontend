<template>
    <div class="text-center">
        <div class="text-md lg:text-2xl mb-4">請於下欄中輸入您想註冊的網域<br />系統會為您確認是否可註冊</div>
        <div class="text-md md:text-3xl lg:text-4xl font-bold mb-4">
            www. <input class="bg-gray-300 rounded-2xl" type="text" v-model.trim="data.code"> .nycu.me
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="sent()">
          送出
        </button>
    </div>
</template>

<script>
// @ is an alias to /src
import {reactive} from "vue"

export default {
  name: 'domainRegister',
  setup() {
      const data = reactive({
          code : ""
      })
      const sent = function() {
          console.log(data.code);
      }

      return {data, sent}
  }
}
</script>
