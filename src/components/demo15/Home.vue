<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 21:39:15
 * @LastEditTime: 2021-06-05 21:41:08
-->
<template>
<div>
    首页模板--{{apiUrl}}
    <br>
    <br>
    <button @click="success">执行Mixin里面的方法</button>
    <br>
    <h3>关于Mixin的选项合并</h3>
    <br>
    msg:{{msg}}
    <br>
    <br>
    <button @click="run">执行run方法</button>
    <br>
    <br>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '首页'
    }
  },
  methods: {
    run () {
      alert('Home.vue里面的run方法')
    }
  }

}
</script>

<style lang="scss">

</style>
