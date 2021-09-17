<template>
    <div class="text-center">
        <div class="text-md lg:text-2xl mb-4">請於下欄中輸入您想註冊的網域<br />系統會為您確認是否可註冊</div>
        <div class="text-md md:text-2xl lg:text-3xl font-bold mb-4">
            <input class="bg-gray-300" type="text" v-model.trim="customUrl" placeholder=" 英文字母或數字或符號"> .nycu.me
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="sent()">
          送出
        </button>
    </div>
</template>

<script>
// @ is an alias to /src
import {ref} from "vue"


export default {
  name: 'domainRegister',
  setup() {
      const customUrl = ref("")
      const sent = async function() {
          console.log(customUrl.value);
      }

      return {customUrl, sent}
  }
}
</script>

<style>
input::-webkit-input-placeholder {
    font-size: 22px;
}
</style>
