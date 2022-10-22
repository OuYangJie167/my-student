import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/main";
import Login from "@/views/login";
import Logon from "@/views/logon";
import stuList from "@/views/stuList";
import addStu from "@/views/addStu";
import echart from "@/views/echart";
import notFound from "@/views/notFound";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/logon",
    component: Logon,
  },
  {
    path: "/main",
    component: Main,
    redirect: "/main/stuList",
    children: [
      {
        // /main/stuList
        path: "stuList",
        component: stuList,
        name: "stuList",
      },
      {
        path: "addStu",
        component: addStu,
        name: "addStu",
      },
      {
        path: "echart",
        component: echart,
        name: "echart",
      },
    ],
  },
  {
    path: "/notFound",
    component: notFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 路由守卫。
router.beforeEach((to, from, next) => {
  // / => login
  if (to.path === "/") {
    next("/login");
    return;
  }
  // 访问不存在的路径，跳转到notFound
  // 访问路径下没有对应的组件，说明是空路由
  if (to.matched.length === 0) {
    next("/notFound");
    return;
  }

  next();
});

export default router;
