<template>
  <div>
    <div class="top">
      <!-- logo -->
      <div class="logo_loc">
        <a class="logo" href="">
          <img src="../../../assets/logo.png" alt="" />
          <h1>Looking Room</h1>
        </a>
        <!-- 定位图标 -->
        <div class="location_icon_box">
          <span class="iconfont icon-dingwei"></span>
          <span>{{ localCity }}</span>
        </div>
      </div>
      <ul class="top-list">
        <li>LOOOOK</li>
        <li>租房</li>
        <li>二手房</li>
        <li>新房</li>
        <li>关于</li>
        <li>支持</li>
      </ul>
      <div class="login_register">
        <span class="iconfont icon-wode"></span>
        <span @click="loginBtn">登录</span>
        /
        <span @click="registerBtn">注册</span>
      </div>
    </div>
    <login @closeBtn="closeBtn" v-if="showLoginPage"></login>
    <register @closeBtn="closeBtn" v-if="showRegisterPage"></register>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import login from "./login/login.vue";
import register from "./register/register.vue";
import { loadBaiDuMap } from "../location/map/bmap";

export default {
  name: "headTop",
  components: {
    login,
    register,
  },
  setup(prop, content) {
    /* 登陆注册组件展示 */
    let showLoginPage = ref(false);
    let showRegisterPage = ref(false);
    let loginBtn = function () {
      showLoginPage.value = true;
    };
    let registerBtn = function () {
      showRegisterPage.value = true;
    };
    /* map城市信息获取，加载bmap */
    let localCity = ref("北京市");
    onMounted(() => {
      loadBaiDuMap().then((res) => {
        function myFun(result) {
          localCity.value = result.name;
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
      });
    });
    return {
      showLoginPage,
      loginBtn,
      registerBtn,
      showRegisterPage,
      localCity,
    };
  },
  methods: {
    closeBtn: function (val) {
      this.showLoginPage = val;
      this.showRegisterPage = val;
    },
  },
};
</script>

<style scoped>
.top {
  height: 4rem;
  padding: 0.5rem;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  color: white;
}

.logo_loc {
  display: flex;
  align-items: center;
}

.logo {
  padding: 0 0.5rem;
}

.logo_loc .location_icon_box {
  height: 24px;
  border: 2px solid white;
  border-radius: 20px;
  display: inline-block;
  padding: 0px 8px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
}

ul > li {
  display: inline-block;
  padding: 0 0.5rem;
  font-weight: 400;
  cursor: pointer;
}
ul > li:hover {
  font-weight: bold;
}

h1 {
  font-size: 0;
}

.logo > img {
  width: 5rem;
}
.login_register > span {
  cursor: pointer;
}

.login_register .iconfont {
  font-size: 1rem;
  padding: 0 2px;
  cursor: initial;
}
</style>