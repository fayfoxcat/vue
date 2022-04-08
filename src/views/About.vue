<template>
  <div id="about">
    <h1>显示页面</h1>
    <div v-html="rawHtml"></div>
    <button @click='show'>打印类型</button>
    <span>{{ create_time.toLocaleString('cn', {hour12: false}) }}</span>
    <p>----------------------计算属性-----------------------------</p>
    <button @click='change'>移除，观察计算属性</button>
    <div>插值计算：{{ author.books.length > 0 ? 'Yes' : 'No' }}</div>
    <div>计算属性：{{ result }}</div>
    <div>now：{{ now }}</div>
    <button @click="updateTime">更新时间</button>
  </div>
</template>
<script>
import {reactive, toRefs} from "@vue/reactivity";
import _ from "lodash";
import {computed} from "vue";

export default {
  setup() {
    let data = reactive({
      id: 2021,
      count: 1105,
      type: 'top',
      create_time: new Date(),
      rawHtml: '<span style="color: rgba(0,166,255,0.2)"><span v-bind:title="id"></span>This should be red.</span>',
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      result: computed(() => data.author.books.length > 0 ? 'Yes' : 'No'),
      now: computed(() => Date.now())
    })
    let show = () => {
      _.debounce(function () {
        console.log(data.type)
      }, 100)
    }
    let updateTime = () => {
      data.create_time = new Date()
    }
    let change = () => {
      data.author.books.splice(0, 1)
    }
    return {
      ...toRefs(data),
      show,
      change,
      updateTime
    }
  }
}
</script>

<style scoped lang="scss">

</style>