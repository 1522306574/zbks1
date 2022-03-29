<template>
  <div>
    <el-container>
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu
          background-color="rgb(50, 64, 87)"
          text-color="#fff"
          :router="true"
        >
          <el-menu-item class="item">
            <i class="el-icon-menu"> </i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="2" class="item">
            <template slot="title">
              <i class="el-icon-document-remove"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">多层列表</el-menu-item>
              <el-menu-item index="2-2">多层文章式例</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <!-- 面包屑 -->
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item
                v-for="(item, index) in this.$route.meta"
                :key="index"
                >{{ item }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>
          <!-- 图像下拉 -->
          <div>
            <el-dropdown>
              <img src="@/assets/logo.png" alt="" class="img" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <!--  -->
        </el-header>
        <el-main>
          <!-- 二级路由出口组件 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
.aside {
  height: 100vh;
}
.aside .item {
  background: rgb(50, 64, 87);
  color: white;
}
.aside .item:hover {
  background: #f5f5f5;
}
.aside .item span {
  color: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eff2f7;
}
.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>