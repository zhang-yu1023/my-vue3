<template>
  <div class="canvas-page">
    <canvas ref="myCanvas" @click="getPosition"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const myCanvas = ref<HTMLCanvasElement>();

// 绘制canvas
const drawCanvas = () => {
  console.log(myCanvas);

  // 确保获取到了canvas元素
  if (!myCanvas.value) return console.error("无法获取Canvas元素");
  const canvas = myCanvas.value;

  // 设置canvas的宽高
  canvas.width = 500;
  canvas.height = 500;

  // 获取Canvas绘制2D环境
  const ctx = canvas.getContext("2d");
  if (!ctx) return console.error("无法获取CanvasRenderingContext2D");

  // 定义后面绘制的图形的颜色
  ctx.fillStyle = "red";
  // 绘制矩形（矩形左上角坐标x，y，宽度，高度）
  ctx.fillRect(0, 0, 100, 100);
  
};

// 获取点击位置信息（x,y）
const getPosition = (event: any) => {
  console.log(event.x, event.y);
};
// 页面挂载后才能绘制
onMounted(() => {
  drawCanvas();
});
</script>

<style lang="scss" scoped>
.canvas-page {
  width: 100%;
  height: 100vh;
  display: block;
  justify-content: center;
  align-items: center;
  background-color: #dddddf;
  .main {
    width: 100px;
    height: 100px;
  }
}
</style>
