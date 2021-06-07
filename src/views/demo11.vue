<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 14:30:36
 * @LastEditTime: 2021-06-05 14:52:09
-->
<template>
<Home />
</template>

<script>
// 1、引入组件
import Home from '../components/Home4'
export default {
  name: 'demo11',
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
