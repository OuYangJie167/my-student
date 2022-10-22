<template>
  <div class="not-found-container">
    <h3 class="t">404</h3>
    <p>
      您访问的页面已经丢失，请返回<router-link to="/login" class="active"
        >登录</router-link
      >页面
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  font-size: 1.1rem;
  color: #797979;
}

.not-found-container > .t {
  display: block;
  font-size: 10rem !important;
}
.active {
  cursor: pointer;
  color: rgb(100, 105, 135);
  margin: 0 8px;
  font-size: 1.4rem;
}
.active:hover {
  color: rgb(10, 105, 135);
}
</style>
