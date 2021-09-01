<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div>{{num}}</div>
    <div>{{name}}</div>
    <!-- <div>{{data.obj}}</div> -->
    <div>{{obj}}</div>
    <button @click="print(10)">打印obj</button>

    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import { defineComponent ,ref ,reactive,toRefs} from "vue";
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

export default defineComponent({
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

  setup() {
    let num = ref(10)
    let name = ref('jack')
    let data = reactive({
      arr:[1,2,3],
      obj:{
        id:2021,
        name:'徐凤年'
      }
    })
    let print = (val)=>{
        console.log(data.obj.id+val)
    } 
    return {
      num,
      name,
      // data,
      ...toRefs(data),
      print
    }
  },
});
</script>
