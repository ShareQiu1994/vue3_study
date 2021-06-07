<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-04 22:12:34
 * @LastEditTime: 2021-06-05 10:05:10
-->
<template>
  <Home />
  <br />
  <hr />
  <br />
  <User />
</template>

<script>
// 1、引入组件
import Home from '../components/Home'
import User from '../components/User'
export default {
  name: 'demo8',
  data () {
    return {
      msg: 'app根组件'
    }
  },
  components: {
    // 2、挂载组件
    Home,
    User
  }
}
</script>

<style lang="scss">
h2 {
  text-align: center;
}
</style>
