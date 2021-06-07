<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 10:40:02
 * @LastEditTime: 2021-06-05 18:31:40
-->
<template>
  <Home />
</template>

<script>
// 1、引入组件
import Home from '../components/Home2'
export default {
  name: 'demo9',
  data () {
    return {
      msg: 'app根组件'
    }
  },
  // 2、挂载组件
  components: {
    Home
  }
}
</script>

<style lang="scss">
</style>
