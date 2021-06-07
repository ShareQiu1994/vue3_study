<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 14:30:36
 * @LastEditTime: 2021-06-05 15:39:52
-->
<template>
<Home />
</template>

<script>
// 1、引入组件
import Home from '../components/demo12/Home'
export default {
  name: 'demo12',
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
