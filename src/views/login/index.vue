<template>
  <div class="wrapper">
    <form action="#" id="login">
      <div>
        <input
          type="text"
          id="account"
          v-model="account"
          placeholder="Account Name"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <!-- <div>
        <label for=""></label>
        <input class="btn" type="submit" value="提交" @click.prevent="login" />
        <input class="btn" type="reset" value="重置" @click.prevent="reset" />
      </div> -->
      <div class="login" key="" @click.prevent="login">
        <h2 class="title">Log In</h2>
      </div>
      <div class="sign">
        <h2 class="title">
          No Account? <a href="#" @click="myLogon">Sign Up.</a>
        </h2>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (this.account && this.password) {
        try {
          await this.$api.login(
            `account=${this.account}&password=${this.password}`
          );
          this.Cookie.setCookie("username", this.account);
          this.$router.push("/main");
        } catch (error) {
          this.$toast({ msg: error, type: "err" });
        }
      } else {
        this.$toast({ msg: "错误信息：请输入用户名或者密码", type: "err" });
      }
    },
    reset() {
      this.account = "";
      this.password = "";
    },
    myLogon() {
      this.$router.push("/logon");
    },
  },
};
</script>

<style scoped>
@import "./index.css";
</style>
