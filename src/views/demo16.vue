<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 10:02:23
 * @LastEditTime: 2021-06-06 10:24:02
-->
<template>
<Home />

</template>

<script>
// 1、引入组件
import Home from '../components/demo16/Home'
export default {
  name: 'demo16',
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
* {
    padding: 0px;
    margin: 0px;
}
</style>
