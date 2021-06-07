<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 16:29:49
 * @LastEditTime: 2021-06-06 18:25:52
-->
<template>
  <ul class="header">
    <li>
      <router-link to="/22">首页</router-link>
    </li>
    <li>
      <router-link to="/22/news">新闻</router-link>
    </li>
    <li>
      <router-link to="/22/user">用户</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">

.header{
  width: 100%;
  height: 44px;
  line-height: 44px;
  list-style: none;
  background: #000;
  color: #fff;
  li{
    display: inline-block;
    margin-right: 20px;
    color: #fff;
    a{
      color: #fff;
    }
  }
}
</style>
