<template>
  <h1>租房信息网</h1>
  <ul>
    <li v-for="value in arr.arrs" :key="value">{{value}}</li>
  </ul>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
export default {
  name: "name",
  setup() {
    const count = ref(66);
    const arr = reactive({
      num: 68,
      name: "san",
      arrs:[4123,4,3214,32,4,321,4,321,4,3214]
    });

    console.log(count.value);

    return {
      count,
      arr,
    };
  },
};
</script>

<style scoped>
</style>