<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 21:49:03
 * @LastEditTime: 2021-06-06 21:49:34
-->
<template>
  <ul class="header">
    <li>
      <router-link to="/25">首页</router-link>
    </li>
    <li>
      <router-link to="/25/news">新闻</router-link>

    </li>
    <li>
      <router-link to="/25/user">用户</router-link>
    </li>
  </ul>
  <div class="content">

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
*{
  margin: 0px;
  padding: 0px;
}
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

.content {
  display: flex;
  .left {
    width: 200px;
    min-height: 400px;
    border-right: 1px solid #eee;
    padding-top: 20px;
    ul {
      list-style: none;
      li {
        margin-bottom: 20px;
        text-align:center;
      }
    }
  }
  .right {
    flex: 1;
  }
}

</style>
