<template>
  <div class="index">
    <el-container>
      <el-header>
        <h1>UNI-ADMIN</h1>
        <el-menu
          router
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/homes">首页</el-menu-item>
          <el-menu-item index="/goods">商品</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
          <el-menu-item index="/vip">会员</el-menu-item>
          <el-menu-item index="/set">设置</el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              ADMIN</template
            >
            <el-menu-item>修改</el-menu-item>
            <el-menu-item @click="out()">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    out() {
      sessionStorage.clear();
      this.$message.success("退出成功！");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
  .el-header {
    width: 100%;
    background-color: #545c64;
    color: #fff;
    line-height: 60px;

    .el-menu {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .el-container {
    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
  }
}
</style>