<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 16:01:41
 * @LastEditTime: 2021-06-06 16:02:34
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
    <br>
  <br>
  <hr>
  <br>
  <br>
  <User />
  <br>
  <br>
  <br>
  <br>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '../components/demo21/Home.vue';
import News from '../components/demo21/News.vue';
import User from '../components/demo21/User.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
    News,
    User
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
