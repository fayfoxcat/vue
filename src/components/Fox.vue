<template>
  <div id="Fox">
    <div>问题在哪儿？</div>
    <div>id: {{ id }}</div>
    <div>name: {{ name }}</div>
    <button @click="add()">Add</button>
  </div>
</template>

<script>
import { createApp } from "vue";
createApp(Counter).mount("#fox");
export default {
  name: "Fox",
};

const Counter = {
  data() {
    return {
      id: 10,
      name: "徐凤年",
    };
  },
  methods: {
    add() {
      this.id++;
      console.log(this.id);
    },
  },
};
</script>

<!-- 添加"scoped"属性只限制CSS到该组件 -->
<style scoped>
h1 {
  list-style-type: none;
  padding: 0;
  display: inline-block;
  margin: 0 10px;
  color: #42b983;
}
</style>
