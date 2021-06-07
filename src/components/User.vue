<template>
<header>我是用户组件的头部</header>
<br>

<ul>
    <li v-for="(item,index) in list" :key="index">
        {{item}}
    </li>
</ul>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    for (var i = 0; i < 10; i++) {
      this.list.push(`我是第${i}条数据`)
    }
  }
}
</script>

<style lang="scss">
ul {
    list-style: none;
}
</style>
