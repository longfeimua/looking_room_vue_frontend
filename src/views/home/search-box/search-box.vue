<template>
  <div>
    <div class="ser_box">
      <input
        class="search_box"
        type="text"
        placeholder="输入要查找的地点、房型"
        v-model="boxValue.val"
      />
      <div class="search_btn">
        <span class="iconfont icon-sousuo"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "search-box",
  setup() {
    const boxValue = reactive({
      val: "",
      date: new Date().getTime(),
    });

    return {
      boxValue,
    };
  },
};
</script>

<style scoped>
.ser_box {
  height: 3rem;
  width: 26rem;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0.3rem;
  box-shadow: 0.3rem 0.3rem 0.3rem rgb(97, 97, 97);
}
.search_box {
  width: 20rem;
  height: 3rem;
  border: 0;
  padding-left: 1rem;
  /* 清除输入框默认效果 */
  outline: none;
  float: left;
}
.search_btn {
  width: 5rem;
  height: 3rem;
  background-color: rgb(125, 125, 223);
  cursor: pointer;
  text-align: center;
  line-height: 3rem;
  float: left;
}

.search_btn:hover {
  background-color: rgb(58, 176, 223);
}

.search_btn .iconfont {
  font-size: 2rem;
  color: white;
}
</style>