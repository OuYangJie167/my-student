<template>
  <div class="wrapper">
    <form action="#" id="register">
      <div>
        <input
          type="text"
          id="username"
          name="username"
          v-model="username"
          placeholder="UserName"
        />
      </div>
      <div>
        <input
          type="text"
          id="account"
          name="account"
          v-model="account"
          placeholder="Account Name"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div>
        <input
          type="password"
          id="rePassword"
          name="rePassword"
          placeholder="rePassword"
          v-model="rePassword"
        />
      </div>
      <!-- <div>
        <label for=""></label>
        <input class="btn" type="submit" value="注册" @click.prevent="logon" />
        <input class="btn" type="reset" value="重置" />
      </div> -->
      <div class="sign">
        <h2 class="title" @click.prevent="logon">Sign Up.</h2>
      </div>
      <div class="login">
        <h2 class="title" @click="login">Login In.</h2>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      username: "",
      password: "",
      rePassword: "",
    };
  },
  methods: {
    async logon() {
      if (this.account && this.username && this.password && this.rePassword) {
        if (this.rePassword === this.password) {
          try {
            await this.$api.logon(
              `account=${this.account}&password=${this.password}&rePassword=${this.rePassword}&username=${this.username}`
            );
            const flag = window.confirm(
              "注册成功，点击确认后自动返回登陆界面！"
            );
            if (flag) {
              this.$router.push("/login");
            }
          } catch (error) {
            this.$toast({ msg: error, type: "err" });
          }
        } else {
          this.$toast({ msg: "两次密码不一致", type: "err" });
        }
      } else {
        this.$toast({ msg: "表单信息不全，请重新填写", type: "err" });
      }
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import "../login/index.css";
</style>
