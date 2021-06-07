<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 11:08:06
 * @LastEditTime: 2021-06-06 12:27:47
-->
<template>
<div>
    <h2>watchEffect Watch</h2>
    <br>
    num={{num}}
    <br>
    count={{count}}
</div>
</template>

<script>
// 1、watchEffect
// import {
//     reactive,
//     toRefs,
//     watchEffect
// } from "vue";
// export default {
//     setup() {
//         let data = reactive({
//             num: 1,
//             count: 1
//         })
//         watchEffect(() => {
//             console.log(`num=${data.num}`)
//         })
//         setInterval(() => {
//             data.count++
//         }, 1000)
//         return {
//             ...toRefs(data)
//         }
//     }
// }

// 2、watch

import {
  reactive,
  toRefs,
  watch
} from 'vue'
export default {
  setup () {
    const data = reactive({
      num: 1,
      count: 1
    })
    watch(data, () => {
      console.log('data.num=' + data.num)
    })
    setTimeout(() => {
      data.num++
    }, 1000)

    return {
      ...toRefs(data)
    }
  }
}
</script>
