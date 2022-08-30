<template>
  <div>
    <!-- 布局容器 -->
    <el-container>
      <el-aside width="15.625rem">
        <div class="logo">
          <img src="../../public/img/Snipaste_2022-08-28_10-22-35.png" alt="" />
          <p>OA管理系统</p>
        </div>
        <!-- aside -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#7aabf6"
          text-color="#f1f6fe"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu
            :index="item.path"
            v-for="item in TheMainMenu"
            :key="item.id"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="citem in item.children" :key="citem.id">
              <el-menu-item :index="citem.path">{{ citem.name }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>基础配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>配置工作流</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>材料管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
        <!-- aside -->
      </el-aside>
      <el-main>
        <!-- 功能表头上部 -->
        <div class="UpperPartOfFunctionTableHead">
          <img src="../../public/img/Snipaste_2022-08-28_10-36-54.png" alt="" />
          <div class="UpperPartOfFunctionTableHeadRight">
            <img src="../../public/img/icon_gayamqjurn7/qizhi.png" alt="" />
            <img src="../../public/img/icon_gayamqjurn7/lingdang.png" alt="" />
            <img
              src="../../public/img/icon_gayamqjurn7/xinfengtianchong.png"
              alt=""
            />
            <img
              src="../../public/img/Snipaste_2022-08-28_11-16-53.png"
              alt=""
              @click="FullScreen()"
            />
            <img src="../../public/img/小人头.png" alt="" />
            <p>超级管理员</p>
            <div>10</div>
            <div>10</div>
            <div>10</div>
          </div>
        </div>
        <!-- 功能表头上部 -->

        <!-- <router-view/> -->
        <router-view />
        <!-- <router-view/> -->
      </el-main>
    </el-container>

    <!-- 布局容器 -->
  </div>
</template>

<script>
// import screenfull from 'screenfull'
export default {
  data() {
    return {
      TheMainMenu: [] //菜单栏数据
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
      if (keyPath == '/home' || keyPath == '/contract') {
        this.$router.push(key)
      }
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    //全屏按钮
    FullScreen() {
      console.log(1)
      // screenfull.toggle()
    }
  },
  created() {
    this.$axios.get('/effect/home/menu').then((res) => {
      // console.log(res.data.getmenu)
      this.TheMainMenu = res.data.getmenu
      console.log(this.TheMainMenu)
    })
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #7aabf6;
  color: #333;
  // text-align: center;
  // line-height: 200px;
  height: 98vh;
}
.el-main {
  background-color: #ffffff;
  color: #333;
  // text-align: center;
  // line-height: 160px;
  height: 98vh;
  padding: 0;
}
.logo {
  width: 16rem;
  height: 5.75rem;
  // background-color: red;
  display: flex;
  img {
    width: 3.25rem;
    height: 3.25rem;
    margin-left: 0.875rem;
    margin-top: 1.0625rem;
  }
  p {
    color: rgba(255, 255, 255, 100);
    font-size: 1.625rem;
    margin-left: 0.5625rem;
  }
}
.UpperPartOfFunctionTableHead {
  // position: fixed;

  width: 100%;
  height: 4.4375rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border: 0.0625rem solid #c2c2c2;

  img {
    margin-left: 0.875rem;
    margin-top: 0.6875rem;
    width: 3.125rem;
    height: 3.125rem;
  }
  .UpperPartOfFunctionTableHeadRight {
    width: 25%;
    height: 4.4375rem;
    line-height: 5rem;
    display: flex;
    align-items: center;
    position: relative;
    // background-color: red;
    img {
      width: 1.5rem;
      height: 1.5rem;
      padding: 0;
      margin: 0;
      margin-right: 1.3125rem;
      display: inline-block;
    }
    img:nth-child(2) {
      width: 2.25rem;
      height: 2.3125rem;
    }
    img:nth-child(5) {
      width: 2.1875rem;
      height: 2.375rem;
      margin-right: 0.625rem;
    }
    p {
      padding: 0;
      margin: 0;
      display: inline-block;
    }
    div:nth-child(7) {
      width: 1.25rem;
      height: 1.25rem;
      line-height: 1.0625rem;
      border-radius: 0.3125rem;
      background-color: #f77d6c;
      position: absolute;
      top: 0.9375rem;
      left: 0.875rem;
    }
    div:nth-child(8) {
      width: 1.25rem;
      height: 1.25rem;
      line-height: 1.0625rem;
      border-radius: 0.3125rem;
      background-color: #f4c438;
      position: absolute;
      top: 0.9375rem;
      left: 3.75rem;
    }
    div:nth-child(9) {
      width: 1.25rem;
      height: 1.25rem;
      line-height: 1.0625rem;
      border-radius: 0.3125rem;
      background-color: #c2c2fb;
      position: absolute;
      top: 0.9375rem;
      left: 7.25rem;
    }
  }
}
</style>
