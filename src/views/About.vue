<template>
  <div id="about">
    <h1>显示页面</h1>
    <div v-html="rawHtml"></div>
    <button @click='show'>打印类型</button>
  </div>
</template>
<script>
import {createApp} from "vue";
import {reactive, toRefs} from "@vue/reactivity";

export default {
  setup() {
    let data = reactive({
      id: 2021,
      count: 1105,
      type: 'top',
      rawHtml: '<span style="color: red"><span v-bind:title="id"></span>This should be red.</span>'
    })
    let show = () => {
      console.log(data.type)
    }
    return {
      ...toRefs(data),
      show
    }
  }
}

createApp({
  data() {
    return {
      id: 2021,
      count: 1105,
      type: 'top'
    }
  },
  methods: {
    show() {
      console.log(this.type)
    }
  },
  created() {
    console.log('count is: ' + this.count)
  }
})
</script>

<style scoped lang="scss">

</style>