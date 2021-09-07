<template>
    <div class="main">
        <div class="footer">
          <span class="footer_left">已选/总计：</span>
          <span class="footer_right">{{seleter}} / {{count}}</span>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
  props(){

  },
  setup(){
    let data = reactive({
      seleter:5,
      count: 20,
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped lang="scss">
  .main{
    margin: 0 auto;
    width: 22%;
    padding: 20px 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #eeeeee;
    .footer{
      display: flex;
      justify-content: space-between;
      .footer_left{
        height: 30px;
        line-height: 30px;
      }
      .footer_right{
        height: 30px;
        line-height: 30px;
      }
    }

  }
</style>
