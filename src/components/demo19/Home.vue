<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 12:50:39
 * @LastEditTime: 2021-06-06 12:56:47
-->
<template>
<div>
    <h2>Home组件(父组件) {{userinfo.username}}</h2>
    <br>
    <br>
    <Location />
    <br>
    <br>

</div>
</template>

<script>

import {
  inject
} from 'vue'

import Location from './Location'

export default {
  name: 'Home组件',
  setup () {
    const title = inject('title')
    const userinfo = inject('userinfo')
    return {
      title,
      userinfo
    }
  },
  data () {
    return {
      msg: '我是home组件的msg'
    }
  },
  components: {
    Location
  }
}
</script>
