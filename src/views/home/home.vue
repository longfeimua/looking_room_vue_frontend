<template>
  <div class="bg">
    <head-top :localCity="cityName.value"></head-top>
    <div class="slogan">
      <h2>你进来看就来对了</h2>
      <h2>小生得名公益中间网，锵锵锵...</h2>
    </div>
    <search-box></search-box>
    <location @getCityName="getCityName" />
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
    let cityName = ref("");
    let getCityName = function (val: any) {
      cityName.value = val;
    };
    return {
      getCityName,
      cityName,
    };
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