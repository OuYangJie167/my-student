// 管理服务器地址以及接口路径
export default {
  baseURL: "https://open.duyiedu.com", // 协议及地址
  login: "/api/student/stuLogin", // 登录
  logon: "/api/student/stuRegister", // 注册
  getStu: "/api/student/findByPage", // 按页查询学生信息
  updateStu: "/api/student/updateStudent", // 修改学生信息
  delStu: "/api/student/delBySno", // 删除某个学生
  addStu: "/api/student/addStudent", // 新增学生
  stuList: "/api/student/findAll", //查询所有学生
};
