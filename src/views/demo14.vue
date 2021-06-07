<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 20:41:54
 * @LastEditTime: 2021-06-05 20:45:40
-->
<template>
<News />
<br>
<br>
<hr>
<br>
<br>
<Baidu />
</template>

<script>
// 1、引入组件
import News from '../components/demo14/News'
import Baidu from '../components/demo14/Baidu'
export default {
  name: 'demo14',
  data () {
    return {
      msg: 'app根组件'
    }
  },
  // 2、挂载组件
  components: {
    News,
    Baidu
  }
}
</script>
