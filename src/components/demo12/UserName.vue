<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 15:39:18
 * @LastEditTime: 2021-06-05 15:41:32
-->
<template>
<input type="text" :value="firstName" @input="$emit('update:firstName',$event.target.value)" placeholder="firstName" />
<br>
<br>
<input type="text" :value="lastName" @input="$emit('update:lastName',$event.target.value)" placeholder="lastName" />
</template>

<script>
export default {
  props: ['firstName', 'lastName']
}
</script>

<style lang="scss" scoped>
input {
    width: 100px;
    height: 32px;
    line-height: 32px;
}
</style>
