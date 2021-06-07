<template>
<v-header :title="title"> </v-header>

<br>
<hr>
<br>
<button @click="setTitle">改变title 单向数据流演示</button>
</template>

<script>
import MyHeader from './Header2'
export default {
  data () {
    return {
      title: '你好vue'
    }
  },
  methods: {
    run () {
      alert('我是home组件的run方法')
    },
    setTitle () {
      this.title = '首页'
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
