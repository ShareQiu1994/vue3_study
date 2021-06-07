<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 11:08:06
 * @LastEditTime: 2021-06-06 12:47:00
-->
<template>
<div>
    <h2>Watch监听数据前后变化</h2>
    <input type="text" v-model="keyword">
     <br>
      <br>
      {{message}}
    <br>
     <br>
    {{keyword}}
</div>
</template>

<script>
import {
  ref,
  watch,
  onMounted,
  onUpdated
} from 'vue'
export default {
  props: ['message'],
  setup (props) {
    console.log(props)
    console.log('setup')
    const keyword = ref('')

    watch(keyword, (newData, oldData) => {
      console.log(newData, oldData)
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    return {
      keyword
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  }
}
</script>
