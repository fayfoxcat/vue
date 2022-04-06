<template>
  <div id="home" class="home">
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import NavHeader from "@/components/navHeader/NavHeader";
import NavMain from "@/components/navMain/NavMain";
import NavFooter from "@/components/navFooter/NavFooter";

export default defineComponent({
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

});
</script>
