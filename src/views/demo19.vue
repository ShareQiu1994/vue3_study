<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 12:51:46
 * @LastEditTime: 2021-06-06 12:58:06
-->
<template>
<h1>我是app组件(爷组件)--{{title}}</h1>
<br>
<button @click="setTitle">执行方法改变爷组件的title</button>
<br><br>
<input type="text" v-model="username" />
{{username}}
<br><br>
<Home />
</template>

<script>
import Home from '../components/demo19/Home'
import {
  ref,
  reactive,
  provide,
  toRefs
} from 'vue'
export default {
  name: 'App',
  setup () {
    const title = ref('app爷组件里面的title')
    const userinfo = reactive({
      username: '张三',
      age: 20
    })
    const setTitle = () => {
      title.value = 'App爷组件里面改变后的Title'
    }

    provide('title', title)
    provide('userinfo', userinfo)
    return {
      title,
      setTitle,
      ...toRefs(userinfo)
    }
  },
  components: {
    Home
  }

}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
