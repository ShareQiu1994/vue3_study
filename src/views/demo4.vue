<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-04 17:22:40
 * @LastEditTime: 2021-06-04 17:22:49
-->
<template>
  <h2>人员登记系统</h2>

  <div class="people_list">
    <ul>
      <li>姓 名： <input type="text" id="username" /></li>

      <li>年 龄： <input type="text" ref="age" /></li>
    </ul>

    <button @click="doSubmit()" class="submit">获取表单的内容</button>
  </div>
</template>

<script>
export default {
  name: 'demo4',
  data () {
    return {
      peopleInfo: ''
    }
  },
  methods: {
    doSubmit () {
      // 原生js
      var usernameObj = document.querySelector('#username')
      alert(usernameObj.value)

      /*
            1、定义ref  <input type="text" ref="age" />
            2、this.$refs.名称
            */
      alert(this.$refs.age.value)
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
}

h2 {
  text-align: center;
}

.people_list {
  width: 400px;
  margin: 40px auto;
  padding: 40px;
  border: 1px solid #eee;
}

.people_list li {
  height: 50px;
  line-height: 50px;
}

.submit {
  float: right;
  margin-top: 10px;
}
</style>
