<template>
  <HomePage></HomePage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue';
import HomePage from "./views/homePage.vue";

export default defineComponent({
  name: "App",
  components: {
    HomePage,
  },
});
</script>

<style>
* {
  margin: 0;
}
</style>
