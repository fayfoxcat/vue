<template>
  <div id="Fox">
    <div>问题在哪儿？</div>
    <div>id: {{ id }}</div>
    <div>name: {{ name }}</div>
    <button @click="back">返回</button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import {useRouter,useRoute} from "vue-router";

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
    /* router是全局的路由对象 */
    let router = useRouter()
    /* 当前组件的路由对象 */
    let route = useRoute()
    /* query传递过来的参数全部转换为字符串类型 */
    console.log(route.query.name)
    let data = reactive({
      id:'12',
      name:'徐凤年',
    })

    let back = ()=>{
      router.back()
    }
    return {
      back,
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
