<template>
  <div id="main">
    <el-input placeholder="添加代办事项" size="medium" v-model="value" @keydown.enter="add_task">
    </el-input>
    <div v-for="(item, index) in tasks" :key="index">
      <div class="item">
        <el-checkbox v-model="item.complete" :label="item.title"></el-checkbox>
        <el-button size="mini" class="del_btn" @click="del_task(index)">移除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "@vue/reactivity";
import {ElMessage} from "element-plus";

export default {
  setup() {
    let data = reactive({
      value: "",
      tasks: [
        {
          title: "默认事项",
          complete: true,
        },
        {
          title: "代办事项",
          complete: false,
        },
      ],
    });
    let add_task = () => {
      if (data.value === '') {
        return ElMessage.warning({
          message: '事项名称不能为空！',
          type: 'warning',
          center: true,
          showClose: true
        })
      }
      data.tasks.push({
        title: data.value,
        complete: false
      })
      data.value = ''
    };
    let del_task = (index) => {
      data.tasks.splice(index, 1);
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
  border-radius: 5px;
  padding: 20px;
  width: 22%;
  background-color: #eeeeee;

  .item {
    height: 35px;
    line-height: 35px;

    .del_btn {
      margin: auto 15px;
    }
  }
}

</style>
