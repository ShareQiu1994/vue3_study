<template>
<div class="date-picker">
    <input type="date" v-bind="$attrs" />
</div>
</template>

<script>
export default {
  inheritAttrs: false, // 禁用默认继承
  data () {
    return {

    }
  }
}
</script>
