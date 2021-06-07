<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 14:30:05
 * @LastEditTime: 2021-06-05 14:39:20
-->
<template>
我是头部组件(子组件)
<br><br>
msg:{{msg}}
<br><br>
<button @click="getParentMsg">获取父组件里面的数据</button>
<br>
<br>
<button @click="getParentFn">执行父组件的方法</button>
<br>
<br>
<button @click="setParentMsg">修改父组件的数据</button>
<br>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是子组件的msg'
    }
  },
  methods: {
    run () {
      alert('我是子组件里面的run方法')
    },
    getParentMsg () {
      // 获取父组件的数据
      alert(this.$parent.msg)
    },
    getParentFn () {
      // 执行父组件的方法
      this.$parent.run()
    },
    setParentMsg () {
      this.$parent.msg = '修改后的msg'
    }
  }
}
</script>

<style lang="scss">
h2 {
    text-align: center;
}
</style>
