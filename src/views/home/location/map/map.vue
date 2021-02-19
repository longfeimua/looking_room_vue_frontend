<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { loadBaiDuMap } from "./bmap";
export default {
  name: "bmap",
  setup(prop, content) {

    
    onMounted(() => {
      loadBaiDuMap().then(() => {
        var map = new BMap.Map("container");
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);

        // 添加控件
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        map.addControl(new BMap.GeolocationControl());

        function myFun(result) {
          var cityName = result.name;
          map.setCenter(cityName);
          content.emit("getCityName",cityName)
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);

        var geolocation = new BMap.Geolocation();
        // 开启SDK辅助定位
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            console.log("您的位置：" + r.point.lng + "," + r.point.lat);
          } else {
            console.log("定位失败");
          }
        });
        //search
        function loationSearch(pla) {
          if (local) {
            local.search(pla);
          } else {
            var local = new BMap.LocalSearch(map, {
              renderOptions: { map: map },
            });

            local.search(pla);
          }
        }
        // loationSearch("天安门");
      });
    });
  },
};
</script>

<style scoped>
html,
body,
#container {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>