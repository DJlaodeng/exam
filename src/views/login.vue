<template>
  <div class="login">
    <el-form :model="formLabelAlign">
      <el-form-item>
        <h1>UNI-ADMIN</h1>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="formLabelAlign.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="formLabelAlign.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formLabelAlign: {},
    };
  },
  methods: {
    login() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", this.formLabelAlign)
        .then((res) => {
          console.log(res);
          if (res.data.data.status !== 1) {
            this.$message.error(res.data.msg);
          } else {
            sessionStorage.setItem("token", res.data.data.token);
            this.$router.push("/index");
            this.$message.success(res.data.msg);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  .el-form {
    width: 400px;
    height: 300px;
    border: 1px solid #eee;
    margin: 200px auto;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    .el-button {
      width: 100%;
    }
  }
}
</style>