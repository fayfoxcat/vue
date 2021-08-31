<template>
  <div id="about">
    <h1>This is an about page</h1>
    <button @click='show'>显示</button>
  </div>
</template>
<script>
import {createApp} from "vue";

export default {

}

createApp({
  data() {
    return {
      id: 2021,
      type: 'top'
    }
  },
  methods: {
    show() {
      console.log(this.type)
    }
  }
}).mount("#about")
</script>

<style scoped lang="scss">

</style>