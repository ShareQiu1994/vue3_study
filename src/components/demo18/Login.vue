<template>
<div>
    <h2>获取用户信息 Computer演示</h2>
    <input type="text" v-model="firstName" placeholder="firstName" />
    <br>
    <br>
    <input type="text" v-model="lastName" placeholder="lastName" />

    <br>
    <br>
    {{fullName}}

    <br>
    <br>
    <input type="text" v-model="score" placeholder="判断是否及格" />
    <br>
    <br>
    {{pass}}

    <br>
    <br>
    <h2>原始对象</h2>
    <br>
    <input type="text" v-model="obj.username" placeholder="username" />
    {{obj.username}}
</div>
</template>

<script>
import {
  reactive,
  toRefs,
  computed
  // readonly
} from 'vue'
export default {
  setup () {
    // 非响应式的数据   原始对象
    const obj = {
      username: '张三',
      age: ''
    }
    // 响应式的数据
    const userinfo = reactive({
      firstName: '李',
      lastName: '',
      score: 78
    })
    // readonly传入一个对象（响应式或普通）或 ref，返回一个原始对象的只读代理。一个只读的代理是“深层的”，对象内部任何嵌套的属性也都是只读的。
    // userinfo = readonly(userinfo)

    const fullName = computed(() => {
      return userinfo.firstName + ' ' + userinfo.lastName
    })
    const pass = computed(() => {
      if (userinfo.score >= 60) {
        return '及格'
      } else {
        return '不及格'
      }
    })
    return {
      ...toRefs(userinfo),
      fullName,
      pass,
      obj
    }
  }

}
</script>

<style lang="scss">
h2 {
    text-align: center;
}
</style>
