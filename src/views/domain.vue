<template>
    <div class="text-center">
        <div class="text-md lg:text-2xl mb-4">請於下欄中輸入您想註冊的網域<br />系統會為您確認是否可註冊</div>
        <div class="text-md md:text-2xl lg:text-3xl font-bold mb-4">
            <input class="p-2 w-52 border border-gray-400" type="text" v-model.trim="customUrl"> .nycu.me
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="sent()">
          送出
        </button>
    </div>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {ref} from "vue"

export default {
  name: 'domain',
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
input {
    background-color: #f2f0f0;
    padding: 5px;
}
</style>
