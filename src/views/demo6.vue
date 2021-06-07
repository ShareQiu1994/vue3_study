<template>
  <h3>1、Vue3.x模板中使用JavaScript表达式</h3>

  <div>
    {{ a + 3 }}
    <br />
    <br />
    {{ a * 3 }}

    <br />
    <br />
    {{ a - 3 }}

    <br />
    <br />
    {{ flag ? "this is true" : "this is false" }}
    <br />
    <br />
    {{ flag ? name1 : name2 }}

    <br />
    <br />
    {{ message.split("").reverse().join("") }}

    <br />
    <br />
    {{ name1.split("").reverse().join("") }}
  </div>
  <h3>2、 v-if v-else v-else-if v-show</h3>

  <div>
    <div v-if="flag == true">this is true</div>
    <br />
    <br />

    <span v-if="flag == true">this is true</span>
    <span v-else>this is false</span>

    <br />
    <br />

    <span v-if="Math.random() > 0.5"> 大于0.5 </span>
    <span v-else> 小于0.5 </span>

    <br />
    <br />
    <div v-if="type == 'A'">A</div>
    <div v-else-if="type == 'B'">B</div>
    <div v-else-if="type == 'C'">C</div>
    <div v-else>Not A/B/C</div>

    <br />
    <br />
    <template v-if="flag">
      <hr />
      <span>这是一个sapn</span>
      <div>这是一个div</div>
      <hr />
    </template>
  </div>

  <h3>3、 v-if v-show</h3>
  <div>
    <h5 v-if="flag">v-if 显示</h5>
    <h5 v-show="flag">v-show 显示</h5>
  </div>

  <h3>4、 计算属性</h3>
  <div>
    {{ reverseMsg }}
    <br />
    <br />
    <button @click="setMsg()">改变msg的值</button>

    <br />
    <hr />
    <input type="text" v-model="keyword" placeholder="请输入关键词" />
    <ul>
      <li v-for="(item, index) in searchData" :key="index">{{ item }}</li>
    </ul>

    <br />
    <br />

    <br />
    <br />
  </div>

  <h3>5、 watch监听数据变化</h3>
  <div>
    <input type="text" v-model="firstName" placeholder="firstName" />
    <br />
    <br />
    <input type="text" v-model="lastName" placeholder="lastName" />
    <br />
    {{ fullName }}

    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: 'demo6',
  data () {
    return {
      a: 12,
      flag: false,
      message: '三国演义',
      name1: '张三',
      name2: '李四',
      type: 'N',
      listData: ['apple', 'banana', 'orange', 'pear'],
      keyword: '',
      firstName: '',
      lastName: '',
      fullName: ''
    }
  },
  methods: {
    setMsg () {
      this.message = '大家好'
    }
  },
  computed: {
    reverseMsg () {
      return this.message.split('').reverse().join('')
    },
    searchData () {
      var tempArr = []

      this.listData.forEach((value) => {
        if (value.indexOf(this.keyword) != -1 && this.keyword != '') {
          tempArr.push(value)
        }
      })
      return tempArr
    }
    // fullName() {
    //     return this.firstName + " " + this.lastName
    // }
  },
  watch: {
    firstName: function (value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName: function (value) {
      this.fullName = this.firstName + ' ' + value
    }
  }
}
</script>

<style>
h2 {
  text-align: center;
}
</style>
