<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 21:48:55
 * @LastEditTime: 2021-06-06 21:50:54
-->
<template>
  <div class="content">
    <div class="left">
      <ul>
        <li><router-link to="/25/user/userlist">用户列表</router-link></li>

        <li><router-link to="/25/user/useradd">增加用户</router-link></li>
      </ul>
    </div>

    <div class="right">
       <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">

</style>
