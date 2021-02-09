<template>
  <head-top></head-top>
  <search-box></search-box>
</template>

<script lang="ts">
import searchBox from "./search-box/search-box.vue";
import headTop from "./navbar/headTop.vue";

export default {
  name: "name",
  components: {
    searchBox,
    headTop,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>