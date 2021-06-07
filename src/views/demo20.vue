<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 14:17:29
 * @LastEditTime: 2021-06-06 14:28:59
-->
<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <Home />

  <br>
  <br>
  <hr>
  <br>
  <br>
  <News />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '../components/demo20/Home.vue';
import News from '../components/demo20/News.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
    News
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
