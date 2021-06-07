<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 15:39:18
 * @LastEditTime: 2021-06-05 15:41:41
-->
<template>
<input type="text" :value="keyword" @input="$emit('update:keyword',$event.target.value)" placeholder="请输入内容" />
</template>

<script>
export default {
  props: ['keyword']
}
</script>

<style lang="scss" scoped >
input {
    width: 400px;
    height: 32px;
    line-height: 32px;
}
</style>
