<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 14:47:54
 * @LastEditTime: 2021-06-05 14:52:47
-->
<template>
<div class="login">
    <input type="text" v-model="username" placeholder="用户名" />
    <br>
    <br>
    <input type="text" v-model="password" placeholder="密码" />
    <br>
    <br>
    <button @click="doLogin">执行登录</button>
</div>
</template>

<script>
import event from '../models/event'
export default {
  emits: {
    submit: ({
      username,
      password
    }) => {
      if (username != '' && password != '') {
        return true
      } else {
        console.error('用户名密码不能为空')
        return false
      }
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin () {
      // alert("doLogin")
      this.$emit('submit', {
        username: this.username,
        password: this.password
      })
    }
  },
  mounted () {
    // 监听广播
    event.on('toLogin', (data) => {
      console.log(data)
    })
  }

}
</script>

<style lang="scss">
.login {
    padding: 20px;
}
</style>
