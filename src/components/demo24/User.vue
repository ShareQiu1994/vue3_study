<template>
  <div>
    User组件
    <br />
    <br />
    <br />
    <router-link :to="{name:'userinfo',params:{id:123}}">跳转到用户详情</router-link>

    <br>
    <br>
    <router-link :to="{name:'userinfo',params:{id:456}}">跳转到用户详情</router-link>
    <br>
    <br>
    <button @click="this.$router.push({ name: 'userinfo', params: { id: 678 }})">js跳转到usreinfo--命名路由</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">
//cnpm install -D sass-loader node-sass
</style>