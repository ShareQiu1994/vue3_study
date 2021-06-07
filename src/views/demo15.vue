<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 21:40:21
 * @LastEditTime: 2021-06-05 21:43:53
-->
<template>
<Home />
<br>
<hr>
<br>

<News />
</template>

<script>
// 1、引入组件
import Home from '../components/demo15/Home'
import News from '../components/demo15/News'
export default {
  name: 'demo15',
  data () {
    return {
      msg: 'app根组件'
    }
  },
  // 2、挂载组件
  components: {
    Home,
    News
  }
}
</script>

<style lang="scss">
* {
    padding: 0px;
    margin: 0px;
}
</style>
