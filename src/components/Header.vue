<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 10:37:59
 * @LastEditTime: 2021-06-05 10:47:07
-->
<template>
<h2>{{title}}</h2>

<br><br>
{{msg}}
<br><br>
{{count}}
<br><br>
{{userinfo.username}}---{{userinfo.age}}
<br><br>
<button @click="getParentTitle">获取父组件的数据</button>
<br><br>
{{home.title}}
<br>
<ul>
    <li v-for="(item,index) in home.list" :key="index">{{item}}</li>
</ul>

<button @click="runParentFn">执行父组件的方法</button>
<br>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getParentTitle () {
      alert(this.title)
    },
    runParentFn () {
      this.home.run()
    },
    run () {
      alert('子组件方法')
    }
  },
  props: ['title', 'msg', 'count', 'userinfo', 'home']
}
</script>

<style lang="scss">
h2 {
    text-align: center;
}
</style>
