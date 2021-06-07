<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 10:40:50
 * @LastEditTime: 2021-06-05 10:49:10
-->
<template>
<h2>{{title}}</h2>
<br>
<button @click="setTitle">改变父组件的title（错误）</button>
<br>
</template>

<script>
export default {
  data () {
    return {
      msg: 'msg'
    }
  },
  methods: {
    setTitle () {
      // 错误
      // this.title = "头部"
      this.msg = '你好msg'
      alert('子组件中没法改变props里面的值')
    }
  },
  props: {
    title: String
  }
}
</script>

<style lang="scss">
h2 {
    text-align: center;
}
</style>
