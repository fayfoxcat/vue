<template>
  <div class="main">
    <div class="footer">
      <span class="footer_left">已选/总计：</span>
      <span class="footer_right">{{ taskMap.selected }} / {{ taskMap.count }}</span>
      <el-button size="mini" class="footer_btn" @click="clear_selected">清除已选</el-button>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from '@vue/reactivity'
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    let data = reactive({
      taskMap: store.state.taskMap
    })

    let clear_selected = () => {
      console.log(store.state.taskMap)
    }

    return {
      ...toRefs(data),
      clear_selected
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  margin: 0 auto;
  width: 22%;
  padding: 20px 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #eeeeee;

  .footer {
    display: flex;
    justify-content: space-between;

    .footer_left {
      height: 30px;
      line-height: 30px;
    }

    .footer_right {
      height: 30px;
      line-height: 30px;
    }
  }

}
</style>
