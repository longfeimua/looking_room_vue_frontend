<template>
  <div>
    <input type="text"  placeholder="输入要查找的地点、房型" v-model="boxValue.val" />
    <button>搜索</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "search-box",
  setup() {
    const boxValue = reactive({
      val:'',
      date: new Date().getTime(),
    });

    return {
      boxValue,
    };
  },
};
</script>

<style scoped>
</style>