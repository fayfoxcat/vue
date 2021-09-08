<template>
  <div class="main">
    <div class="footer">
      <span class="footer_left">已选/总计：{{ taskMap.selected }} / {{ taskMap.count }}</span>
      <el-button size="mini" class="footer_right" @click="clear_selected">清除已选</el-button>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from '@vue/reactivity'
import {useStore} from "vuex";
import {computed} from "vue";
import mitt from "mitt";

export default {
  setup() {
    const store = useStore();
    const emitter = mitt()
    let data = reactive({
      taskMap: {}
    })

    data.taskMap = computed(() => {
      let tasks = store.state.tasks;
      let select_count = tasks.filter(x => x.complete).map((value, index) => index);
      return {
        select_count: select_count,
        selected: select_count.length,
        count: tasks.length
      };
    });

    /* 清除所选任务 */
    let clear_selected = () => {
      emitter.emit('batchDelete',1)
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
    .footer_left {
      height: 30px;
      line-height: 30px;
    }

    .footer_right {
      float: right;
    }
  }

}
</style>
