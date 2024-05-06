<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <div>
       <slot name="top"></slot>
      
       <div v-for="item in data">
        <slot :data="item"></slot>
       </div>
       <slot name="bot"></slot>
    </div>
  </div>
  <div>First root element</div>
    <div>Second root element</div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
type names = {
  name:string,
  age:number
}
const data = reactive<names[]>([{
  name:"松鼠爱吃花生米",
  age:16
},
{
  name:"松鼠爱吃花生米",
  age:16
},
{
  name:"松鼠爱吃花生米",
  age:16
}])

const count = ref(0)
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
