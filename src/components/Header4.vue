<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 14:47:54
 * @LastEditTime: 2021-06-05 14:52:37
-->
<template>
<h2>头部组件

    --- <button @click="sendParent">执行父组件的自定义事件</button>

    ----- <button @click="sendLogin">触发登录组件里面的事件 实现传值</button>
</h2>
</template>

<script>
import event from '../models/event'
export default {
  data () {
    return {
      msg: '头部组件'
    }
  },
  methods: {
    sendParent () {
      // this.$emit("send")

      this.$emit('send', this.msg)
    },
    sendLogin () {
      // 广播事件
      event.emit('toLogin', {
        username: '张三',
        age: 20
      })
    }
  }

}
</script>

<style lang="scss">
h2 {
    text-align: center;
    background: #000;
    height: 44px;
    line-height: 44px;
    color: white;
}
</style>
