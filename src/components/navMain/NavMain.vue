<template>
  <div id="main">
    <el-input placeholder="添加代办事项" size="medium" v-model="value" @keydown="add_task">
    </el-input>
    <div v-for="(item, index) in tasks" :key="index">
      <div class="item">
        <el-checkbox v-model="item.complete" :label="item.title"></el-checkbox>
        <el-button size="mini" class="del_task">移除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "@vue/reactivity";

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
#main {
  margin: 50px auto 0 auto;
  padding: 10px;
  width: 20%;
  background-color: #eeeeee;

  .item {
    height: 35px;
    line-height: 35px;

    .del_task {
      margin: auto 15px;
    }
  }
}

</style>
