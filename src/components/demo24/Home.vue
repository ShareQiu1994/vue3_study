<template>
  <div>
    Home组件--{{ title }}
   
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title:"我是一个首页组件"
    };
  },
  methods: {
   
  },
});
</script>

<style lang="scss">

</style>