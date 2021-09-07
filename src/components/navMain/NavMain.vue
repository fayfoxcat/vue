<template>
  <div id="main">
    <input placeholder="添加代办事项" v-model="value" @keydown="add_task" />
    <div v-for="(item, index) in tasks" :key="index">
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
#main{
  margin: 50px auto 0 auto;
  padding: 10px;
  width: 20%;
  background-color: #eeeeee;
  .item {
    height: 35px;
  }
}

</style>
