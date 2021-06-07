<template>
<div class="home">
    <button @click="isVisible=true">弹出一个模态对话框</button>

    <modal :visible="isVisible" :title="title" @close-modal="isVisible=false">

    </modal>
</div>
</template>

<script>
import Modal from './Modal'
export default {
  data () {
    return {
      title: '用户登录',
      isVisible: false
    }
  },
  components: {
    Modal
  }

}
</script>

<style lang="scss">
.home {
    position: relative;
}
</style>
