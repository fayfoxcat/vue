<template>
  <div id="Fox">
    <div>问题在哪儿？</div>
    <div>id: {{ id }}</div>
    <div>name: {{ name }}</div>
    <button @click="add()">Add</button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  // 组件名称
  name: "Fox",
  // 来自父组件的传值
  props: {

  },
  // 定义子组件
  components: {

  },
  setup() {
    let data = reactive({
      id:'12',
      name:'徐凤年',
    })

    let add = ()=>{
      console.log('add!')
    }
    return {
      add,
      ...toRefs(data)
    }
  },
});
</script>

<!-- 添加"scoped"属性只限制CSS到该组件 -->
<style scoped>
h1 {
  list-style-type: none;
  padding: 0;
  display: inline-block;
  margin: 0 10px;
  color: #42b983;
}
</style>
