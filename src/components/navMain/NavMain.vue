<template>
  <div>
    <input placeholder="添加代办事项" v-model="value" @keydown="add_task" />
    <div v-if="(item, index) in tasks" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete" />
        <span>{{ item.title }}</span>
        <button class="del_task">移除</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  setup() {
    let data = reactive({
      value: "",
      tasks: [
        {
          id: 1,
          title: "默认事项",
          complete: true,
        },
        {
          id: 2,
          title: "代办事项",
          complete: false,
        },
      ],
    });
    let add_task = () => {
      console.log("添加了一个任务事项");
    };
    let del_task = () => {
      console.log("移除了一个任务事项");
    };
    return {
      ...toRefs(data),
      add_task,
      del_task,
    };
  },
};
</script>

<style scoped lang="scss">
 .item {
   height: 35px;
 }
</style>
