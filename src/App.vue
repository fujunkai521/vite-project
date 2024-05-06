<script setup lang="ts">

import { msgBox } from './common/messageBox.js'

const alert = () => {
  msgBox()
}
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  <div @click="alert">弹窗显示</div>
  </div>

  <!-- <button>变量切换</button> -->


  <!-- <HelloWorld msg="Vite + Vue" >
    <template v-slot:top>
      <div>我是父组件的数据，我偏要插入1111</div>
    </template>
    <template v-slot="{data}">
      <div>{{ data.name }}</div>
    </template>
    <template v-slot:bot>
      <div>我是父组件的数据，我偏要插入2222</div>
    </template>
  </HelloWorld> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#app{
  background-color: var(--bg1);
}
</style>
