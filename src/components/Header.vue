<template>
  <el-col :span="24" id="main">
    <el-row>
      <el-col :span="16" :offset="6">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" class="el-col-3">主页</el-menu-item>
          <el-menu-item index="2" class="el-col-3">发现</el-menu-item>
          <el-submenu index="3" class="el-col-5" mode="vertical">
            <template slot="title">我的资产</template>
            <el-menu-item index="3-1">现金</el-menu-item>
            <el-menu-item index="3-2">储蓄</el-menu-item>
            <el-menu-item index="3-3">保险</el-menu-item>
          </el-submenu>
          <el-menu-item index="4" class="el-col-3">个人中心</el-menu-item>
          <el-menu-item index="5" class="el-col-3">关于我们</el-menu-item>
          <el-menu-item index="6" class="el-col-3">登录/注册</el-menu-item>
          <div class="el-col-3" id="search">
            <el-input></el-input>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
export default {
  name: 'Header'
}
</script>


<style scoped>

</style>