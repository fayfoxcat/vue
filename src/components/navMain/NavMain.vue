<template>
  <div id="main">
    <el-input placeholder="添加代办事项" size="medium" v-model="value" @keydown.enter="add_task"></el-input>
    <el-scrollbar max-height="400px">
      <div v-for="(item, index) in tasks" :key="index">
        <div class="item">
          <el-checkbox class="item_checkbox" v-model="item.complete" :label="item.title"></el-checkbox>
          <el-button class="item_btn" size="mini" @click="del_task(index)">移除</el-button>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import {reactive, toRefs} from "@vue/reactivity";
import {ElMessage} from "element-plus";
import {computed, onMounted } from "vue";
import {useStore} from "vuex";

export default {
  setup(props, context) {
    const store = useStore();
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

    let taskMap = computed(() => {
      let tasks = data.tasks;
      let select_count = [];
      tasks.forEach(function (element, index) {
        if (element.complete === true) {
          select_count.push(index);
        }
      });
      return {
        select_count: select_count,
        selected: select_count.length,
        count: tasks.length
      };
    });

    let add_task = () => {
      if (data.value === "") {
        return ElMessage.warning({
          message: "事项名称不能为空！",
          type: "warning",
          center: true,
          showClose: true,
        });
      }
      data.tasks.push({
        title: data.value,
        complete: false,
      });
      data.value = "";
      store.commit('setTaskMap',taskMap.value)
    };

    let del_task = (index) => {
      data.tasks.splice(index, 1);
      store.commit('setTaskMap',taskMap.value)
      return ElMessage.success({
        message: "移除任务成功",
        type: "success",
        center: true,
        showClose: true,
      });
    };

    onMounted(() => {
      // console.log(context.attrs);
      // console.log(context.slots);
      // console.log(context.emit);
      context.emit
    });

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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 20px 10px;
  width: 22%;
  background-color: #eeeeee;

  .item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding-left: 20px;

    .item_checkbox {
      height: 30px;
      line-height: 30px;
    }

    .item_btn {
      display: none;
    }

    &:hover {
      background: #afd5fc;

      button {
        display: block;
      }
    }
  }
}
</style>
