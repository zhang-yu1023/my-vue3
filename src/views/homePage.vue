<template>
  <div class="main-page">
    <header class="header">
      <nav class="nav"><i class="el-icon-s-home"></i>首页</nav>
      <nav class="nav"><i class="el-icon-arrow-down"></i>功能</nav>
      <nav class="nav"><i class="el-icon-s-management"></i>分类</nav>
      <nav class="nav"><i class="el-icon-question"></i>帮助</nav>

      <nav class="nav login">登陆<i class="el-icon-user"></i></nav>
      <!-- <nav class="nav" >退出<i class="el-icon-user-solid"></i></nav> -->
    </header>
    <div class="body">
      <aside class="aside">目录</aside>
      <article class="article">
        article

        <!-- <figure></figure> -->
        <section class="section">section</section>
      </article>
    </div>

    <footer class="footer">footer</footer>
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

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page {
  position: relative;
  width: calc(100% - 20px);
  /* height: 700px; */
  height: calc(100% - 20px);
  /* background: url(./H5/images/castle.jpg) no-repeat fixed top; */
  background-size: 100% 100%;
  padding: 10px;
  background-color: grey;
}

header {
  display: flex;
  flex-direction: row;
  width: 100%;
  /* height: 40px; */
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  /* overflow: hidden; */
}

header nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  /* background-color: pink; */
  /* background-color: rgba(255, 255, 255, 0.5); */
}

nav i {
  padding: 0 10px;
}

.login {
  position: absolute;
  right: 0;
}

.body {
  display: flex;
  flex-direction: row;
}

aside {
  width: calc(25% - 30px);
  margin-right: 10px;
  padding: 10px;
  height: calc(100% - 120px);
  /* background-color: antiquewhite; */
  background-color: rgba(255, 255, 255, 0.5);
}

article {
  width: calc(75% - 20px);
  padding: 10px;
  height: calc(100% - 120px);
  background-color: rgba(255, 255, 255, 0.5);
  /* background-color: rgb(178, 221, 149); */
}

footer {
  /* float: left; */
  width: 100%;
  height: 40px;
  margin-top: 10px;
  text-align: center;
  line-height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  /* background-color: rgb(239, 197, 139); */
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
