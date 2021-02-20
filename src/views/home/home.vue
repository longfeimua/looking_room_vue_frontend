<template>
  <div class="bg">
    <head-top></head-top>
    <div class="slogan">
      <h2>你进来看就来对了</h2>
      <h2>小生得名公益中间网，锵锵锵...</h2>
    </div>
    <search-box></search-box>
    <location />
  </div>
</template>

<script lang="ts">
import searchBox from "./search-box/search-box.vue";
import headTop from "./navbar/headTop.vue";
import location from "./location/location.vue";
import { ref } from "vue";

export default {
  name: "home",
  components: {
    searchBox,
    headTop,
    location,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.bg {
  min-width: 55rem;
  background-color: rgb(175, 175, 175);
}
.slogan {
  margin: 0 auto;
  text-align: center;
}
</style>