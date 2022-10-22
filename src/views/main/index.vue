<template>
  <div class="mian-container">
    <div class="header">
      <div class="logo">
        <img src="@/assets/image/logo.png" alt="" />
        <span>渡</span>
        <span>一</span>
        <span>教</span>
        <span>育</span>
      </div>
      <ul class="user">
        <li class="username" id="username">{{ this.username }}</li>
        <router-link to="/login" class="logout" tag="li">退出</router-link>
      </ul>
    </div>
    <div class="left-menu">
      <dl class="menu">
        <dt>学生管理</dt>
        <router-link
          tag="dd"
          :to="{ name: 'stuList' }"
          exact-active-class="active"
          >学生列表
        </router-link>
        <router-link tag="dd" to="/main/addStu" exact-active-class="active">
          新增学生
        </router-link>
        <router-link tag="dd" to="/main/echart" exact-active-class="active">
          学生图表
        </router-link>
      </dl>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      path: "",
    };
  },
  created() {
    const username = this.Cookie.getCookie("username");
    if (username) {
      this.username = username.username;
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    switchClass(val) {
      console.log(val);
    },
  },
};
</script>

<style>
@import "./index.css";
</style>
