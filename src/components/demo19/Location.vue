<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 12:50:39
 * @LastEditTime: 2021-06-06 12:57:14
-->
<template>
<div>
    <h3>Location组件(孙组件)</h3>
    <br>
    {{title}}
    <br>
    <br>
    username:{{userinfo.username}}
    <br>
    age:{{userinfo.age}}
    <p>provider inject实现父子组件传值的时候，子组件改变数据也会影响父组件</p>
    <input type="text" v-model="userinfo.username">
</div>
</template>

<script>
import {
  inject
} from 'vue'
export default {
  setup () {
    const title = inject('title')
    const userinfo = inject('userinfo')
    return {
      title,
      userinfo
    }
  }
}
</script>

<style lang="scss">
h2 {
    text-align: center;
}
</style>
