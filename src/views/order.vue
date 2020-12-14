<template>
  <div class="homes">
    <el-container>
      <el-aside width="199px">
        <el-menu :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">订单管理2</el-menu-item>
              <el-menu-item index="1-2">订单管理2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>发票管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">发票管理1</el-menu-item>
              <el-menu-item index="1-2">发票管理2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>售后服务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">售后服务1</el-menu-item>
              <el-menu-item index="1-2">售后服务2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.homes {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    .el-aside {
      background-color: #fff;
      color: #333;
      line-height: 200px;
      .el-menu {
        width: 200px;
        .el-submenu {
          width: 200px;
          .el-submenu__title {
            width: 200px;
          }
        }
      }
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
  }
}
</style>