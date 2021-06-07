<template>
<v-header @send="getChild"></v-header>
<br>
<br>
<hr>
<br>
<br>
<v-login @submit="doLogin">
</v-login>
</template>

<script>
import Header from './Header4'
import Login from './Login4'
export default {
  data () {
    return {
      title: '首页组件'
    }
  },
  methods: {
    getChild (data) {
      alert(data + 'home')
    },
    doLogin (data) {
      console.log(data)
    }
  },
  components: {
    'v-header': Header,
    'v-login': Login
  }
}
</script>

<style lang="scss">

</style>
