<template>
<div class="home">
    我是一个Home组件
    <br>
    <br>
    <button @click="isShow=!isShow">挂载/卸载组件</button>
    <br>
    <br>
    <keep-alive>
        <life-cycle v-if="isShow"></life-cycle>
    </keep-alive>
</div>
</template>

<script>
import LifeCycle from './LifeCycle'
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {

  },
  components: {
    LifeCycle
  }

}
</script>

<style lang="scss">
.home {
    padding: 20px;
}
</style>
