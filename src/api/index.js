import axios from "axios";
import URLs from "./URLs.js";

const appkey = "root123_1607126598790";

const ajax = axios.create({
  baseURL: URLs.baseURL,
  params: {
    appkey,
  },
});

// axios 拦截器
// 响应回来时，处理返回的数据结果
ajax.interceptors.response.use(
  (data) => {
    const newData = data.data;
    if (newData.status === "success") {
      return newData;
    }
    return Promise.reject(newData.msg);
  },
  (data) => Promise.reject(data)
);
// 登录
const login = (data) => ajax.post(URLs.login, `appkey=${appkey}&${data}`);
// 注册
const logon = (data) => ajax.post(URLs.logon, `appkey=${appkey}&${data}`);
// 按页查询学生
const getStu = (page, size) =>
  ajax.get(URLs.getStu, { params: { page, size } });
// 修改学生信息
const updateStu = (options) =>
  ajax.get(URLs.updateStu, {
    params: {
      ...options,
    },
  });
// 删除学生
const delStu = (sNo) =>
  ajax.get(URLs.delStu, {
    params: {
      sNo,
    },
  });
// 添加学生
const addStu = (stu) =>
  ajax.get(URLs.addStu, {
    params: {
      ...stu,
    },
  });
// 查询所有学生
const stuList = () => {
  ajax.get(URLs.stuList, `appkey=${appkey}`);
};

export default {
  login,
  logon,
  getStu,
  updateStu,
  delStu,
  addStu,
  stuList,
};
