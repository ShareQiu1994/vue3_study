<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 14:30:05
 * @LastEditTime: 2021-06-05 14:30:12
-->
<template>
<v-header ref="header"> </v-header>

<br />
<br />

<hr />
<br />
我是Home组件(父组件)
<br><br>
msg:{{msg}}
<br><br>
<button @click="getChildMsg">获取子组件里面的数据</button>
<br>
<br>
<button @click="getChildFn">执行子组件的方法</button>
<br><br>
<button @click="setChildMsg">修改子组件里面的msg</button>
<br><br>
</template>

<script>
import MyHeader from './Header3'
export default {
  data () {
    return {
      msg: '我是home组件的msg'
    }
  },
  methods: {
    run () {
      alert('我是home组件里面的run方法')
    },
    getChildMsg () {
      // 获取子组件的数据
      alert(this.$refs.header.msg)
    },
    getChildFn () {
      // 执行子组件的方法
      this.$refs.header.run()
    },
    setChildMsg () {
      this.$refs.header.msg = '我是父组件修改后的msg'
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
