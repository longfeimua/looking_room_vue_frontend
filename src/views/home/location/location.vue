<template>
  <div>
    <div class="location">
      <div class="near">附近</div>
      <div @click="turnOnMap" class="map_btn">{{ mapVal.mes }}</div>
    </div>
    <div v-show="mapVal.if" class="map">
      <bmap @getCityName="getCityName"></bmap>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import bmap from "../location/map/map.vue";

export default {
  name: "location",
  components: {
    bmap,
  },
  setup(prop, content) {
    let mapVal = reactive({
      mes: "打开地图",
      if: false,
    });
    let turnOnMap = function () {
      if (mapVal.if) {
        mapVal.if = false;
        mapVal.mes = "打开地图";
      } else {
        mapVal.if = true;
        mapVal.mes = "关闭地图";
      }
    };
    let cityName = ref("");
    let getCityName = function (val) {
      cityName.value = val;
    };
    content.emit("getCityName", cityName);

    return {
      turnOnMap,
      mapVal,
      getCityName,
      cityName,
    };
  },
};
</script>

<style scoped>
.location {
  width: 12rem;
  height: 2.5rem;
  margin: 0 auto;
  margin-top: 2rem;
  overflow: hidden;
  border-radius: 1.25rem;
  color: white;
  font-weight: 800;
  font-size: 1.1rem;
}
.location > div {
  width: 6rem;
  height: 2.5rem;
  background-color: rgb(46, 46, 46);
  float: left;
  line-height: 2.5rem;
  text-align: center;
  cursor: pointer;
}
.location > div:hover {
  background-color: rgb(170, 64, 64);
}

/* 地图容器 */
.map {
  width: 40rem;
  height: 20rem;
  position: relative;
  left: calc(50% - 20rem);
}
</style>