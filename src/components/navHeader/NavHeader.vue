<template>
  <div id="header">
    <div>{{ num }}</div>
    <div>{{ name }}</div>
    <div>{{ obj }}</div>
    <button @click.once="print(10)">打印obj</button>
    <div>
      <a :[vName]="doSoming">hello</a>
      <button @[eventName]="updateHref">修改节点功能</button>
      <el-button @click="goto">跳转</el-button>
    </div>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from "vue";

export default {
  setup() {
    let router = useRouter()
    let num = ref(10)
    let name = ref('jack')
    let data = reactive({
      arr: [1, 2, 3],
      obj: {
        id: 2021,
        name: '徐凤年'
      },
      vName: '',
      eventName: 'click',
      doSoming: 'https://www.baidu.com'
    })
    let print = (val) => {
      console.log(data.obj.id + val)
    }
    let updateHref = () => {
      console.log('修改为链接');
      data.vName = 'href'
      data.eventName = 'focus'
    }

    /* 路由跳转 */
    let goto = ()=>{
      
    }

    return {
      num,
      name,
      ...toRefs(data),
      print,
      updateHref,
      goto
    }
  },
}
</script>

<style scoped lang="scss">

</style>
