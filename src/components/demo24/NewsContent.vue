<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 21:11:32
 * @LastEditTime: 2021-06-06 21:20:36
-->
<template>
  <div>
    NewsContent组件
    <br>
<br>
    <button @click="goHome">js跳转路由-跳转到home组件</button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {

    }
  },mounted(){
    // this.$route.params 获取动态路由的传值
    // console.log(this.$route.params)

    // this.$route.query 获取get传值
    // console.log(this.$route.query)
  },methods:{
    goHome(){
      //js跳转路由
      this.$router.push({
           path: '/24/home'
      })
    }
  }

});
</script>

<style lang="scss">

</style>
