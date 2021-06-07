<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 10:37:59
 * @LastEditTime: 2021-06-05 10:47:56
-->
<template>
  <v-header
    :title="title"
    :msg="'我是父亲组件的msg'"
    :count="num"
    :userinfo="userinfo"
    :home="this"
    ref="header"
  >
  </v-header>
  <button @click="childrenFn">调用子组件方法</button>
</template>

<script>
import MyHeader from './Header'
export default {
  data () {
    return {
      title: '首页',
      num: 10,
      userinfo: {
        username: '张三',
        age: 20
      },
      list: ['马总', '刘总']
    }
  },
  methods: {
    run () {
      alert('我是home组件的run方法')
    },
    childrenFn () {
      console.log(this.$refs.header)
      this.$refs.header.run()
    }
  },
  components: {
    'v-header': MyHeader
  }
}
</script>

<style lang="scss">
h2 {
  text-align: center;
}
</style>
