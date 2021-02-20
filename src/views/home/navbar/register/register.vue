<template>
  <div>
    <div class="bgc">
      <div class="login_box">
        <h3>账号注册</h3>
        <div class="inputbox">
          <input type="text" placeholder="请输入账号" />
          <input type="password" placeholder="请输入密码" />
          <input type="password" placeholder="请再次输入密码" />
        </div>
        <div class="login_btn">注册</div>
        <div class="check">
          <input type="checkbox" name="" id="checkbox" />
          <p>我已阅读并同意《xxx政策》以及《xxx协议》</p>
        </div>
        <span v-on:click="closeRegisterPage" class="iconfont icon-close"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  setup() {
  },
  methods: {
    closeRegisterPage: function () {
      this.$emit("closeBtn", false);
    },
  },
};
</script>

<style scoped>
.bgc {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.342);
  position: fixed;
  top: 0;
}

.login_box {
  height: 25rem;
  width: 20rem;
  background-color: #fff;
  position: relative;
  left: calc(50% - 10rem);
  top: calc(50% - 12.5rem);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 10px rgba(68, 68, 68, 0.493);
  border-radius: 0.2rem;
}

.login_box h3 {
  text-align: center;
  padding: 1rem;
}
.inputbox {
  width: 15.6rem;
  text-align: center;
  margin: 0 auto;
}
.inputbox > input {
  height: 2rem;
  width: 15rem;
  padding: 0.2rem;
  outline: none;
}

/* 关闭按钮 */
.login_box .iconfont {
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.1rem;
  color: rgb(29, 29, 29);
  cursor: pointer;
}

.login_box .iconfont:hover {
  color: rgb(73, 73, 73);
  font-weight: 800;
}
.login_btn {
  width: 6rem;
  height: 2.5rem;
  background-color: rgb(102, 88, 185);
  margin: 1rem auto;
  border-radius: 0.3rem;
  cursor: pointer;

  text-align: center;
  line-height: 2.5rem;
  color: #fff;
  font-size: 1.3rem;
}

/* 政策协议复选框 */
.login_box .check p,
.login_box .check input {
  display: inline;
  font-size: 0.8rem;
}
.login_box .check {
  text-align: center;
}
</style>