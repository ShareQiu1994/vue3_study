<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 18:32:09
 * @LastEditTime: 2021-06-06 18:46:39
-->
<template>
  <div>
    Home组件--{{ title }}
    <br />
    <br />

    <button @click="this.$router.push({ path: '/23/news' })">跳转到新闻</button>

    <br />
    <br />
     <button @click="this.$router.push({ path: '/23/newscontent',  query:{aid:14} })">跳转到新闻详情 get传值</button>

 <br />
    <br />
     <button @click="this.$router.push({ path: '/23/newsdetail/123'})">跳转到新闻详情 动态路由传值</button>

    <br />
    <br />
    <br />
    <button @click="setTitle">改变title</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
let title: string = "我是一个home组件";
export default defineComponent({
  data() {
    return {
      title,
      userinfo: {
        username: "张三",
      },
      age: 20,
      sex: "男",
    };
  },
  methods: {
    setTitle(): void {
      this.title = "this is title";
    },
  },
});
</script>

<style lang="scss">
//cnpm install -D sass-loader node-sass
</style>
