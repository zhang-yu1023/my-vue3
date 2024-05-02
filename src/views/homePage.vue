<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-sub-menu index="2">
            <template #title>功能</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="3" disabled>分类</el-menu-item>
          <el-menu-item index="4">帮助</el-menu-item>
          <!-- <el-menu-item index="5">Orders</el-menu-item> -->
        </el-menu>
      </el-header>

      <el-container>
        <el-aside width="200px">目录</el-aside>
        <el-main>
          <article class="article">
            <section class="section">section</section>
          </article>
        </el-main>
      </el-container>
    </el-container>
    <!-- <nav class="nav"><i class="el-icon-s-home"></i>首页</nav>
      <nav class="nav"><i class="el-icon-arrow-down"></i>功能</nav>
      <nav class="nav"><i class="el-icon-s-management"></i>分类</nav>
      <nav class="nav"><i class="el-icon-question"></i>帮助</nav>

      <nav class = "nav login">登陆<i class = "el-icon-user"></i></nav> -->

    <!-- <nav class="nav" >退出<i class="el-icon-user-solid"></i></nav> -->
    <!-- </header> -->
  </div>
  <div class="login-content" style="display: none">
    <i class="el-icon-close"></i>
    <div class="form">
      <form action="/" method="post">
        <h3
          style="
            text-align: center;
            border-bottom: 2px solid black;
            padding-bottom: 20px;
          "
        >
          密码登陆
        </h3>
        <p>
          <label for="name">账号 </label
          ><input type="number" placeholder="请输入账号" required />
        </p>
        <p>
          <label for="password"> 密码 </label
          ><input
            type="password"
            placeholder="请输入密码"
            id="password"
            required
          />
        </p>
      </form>
      <p>
        <button style="margin: 10px 35px 0px 35px">注册</button>
        <button style="margin: 10px 35px 0px 35px">登陆</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-aside {
  // padding: 0 20px;
  // background-color: #00000068;
}

/* 媒体查询：在小屏幕上进行布局调整 */
@media screen and (max-width: 600px) {
  header {
    flex-direction: column;
    align-items: center;
  }
}

.mask {
  /* mask-image: url(./H5/images/black.png); */
  mask: linear-gradient(90deg, #00000068, #00000068);
  /* 使用渐变来做遮罩 */
  pointer-events: none;
  /* 点击事件失效 */
  z-index: 20;
  display: block;
}

.login-content {
  position: absolute;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  left: 50%;
  top: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  z-index: 99999;
}

.form {
  padding: 20px;
}

p {
  padding: 0 80px 0 80px;
  font-size: large;
}

.el-icon-close {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
