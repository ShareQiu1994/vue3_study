<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 11:08:06
 * @LastEditTime: 2021-06-06 12:47:10
-->
<template>
<div>
    Home组件
    <br>
    <br>
    <Login />
    <br>
    <hr>
    <br>
    <Search />
    <br>
    <hr>
    <br>
    <User :message="msg" />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</div>
</template>

<script>
import Login from './Login'
import Search from './Search'
import User from './User'
export default {
  name: 'Home组件',
  data () {
    return {
      msg: '我是home组件的msg'
    }
  },
  methods: {
    run () {
      alert('run')
    }
  },
  components: {
    Login,
    Search,
    User
  }
}
</script>
