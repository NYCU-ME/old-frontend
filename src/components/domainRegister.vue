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

export default {
  name: 'domainRegister',
  setup() {
      const customURL = ref("")
      const sent = async function() {
          console.log(customURL.value);
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
