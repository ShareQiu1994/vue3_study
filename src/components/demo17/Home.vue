<template>
<div>
    Home组件-{{msg}}

    <br>
    <button @click="run">执行run方法</button>
    <br>
    <br>
    <hr>
    <br>
    <br>
    {{title}}
    <br> <br>
    {{userinfo.username}}--{{userinfo.age}}
    <br> <br>
    <button @click="getTitle">获取title</button>
    <br> <br>
    <button @click="getUserName">获取username</button>
    <br> <br>
    <button @click="setTitle">设置title</button>
    <br> <br>
    <button @click="setUserName">设置username</button>

    <br>
    <br>
    <input type="text" v-model="title">
    <br>
    <br>
    <input type="text" v-model="userinfo.username">
    <br>
    <br>
    {{description}}
    <br>
    <input type="text" v-model="description">
    <br>
</div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs
} from 'vue'

export default {
  name: 'Home组件',
  setup () {
    // ref 定义响应式数据        定义字符串、Num、bool 、数组
    // reactive 定义响应式数据    定义对象
    var title = ref('我是一个标题')
    var userinfo = reactive({
      username: '张三',
      age: 20
    })
    var article = reactive({
      description: '我是一个新闻',
      click: 201
    })

    // 获取reactive里面定义的数据
    var getUserName = () => {
      alert(userinfo.username)
    }
    // 获取ref里面定义的数据
    var getTitle = () => {
      alert(title.value)
    }

    // 修改reactive里面定义的数据
    var setUserName = () => {
      userinfo.username = '李四'
    }
    // 修改ref里面定义的数据
    var setTitle = () => {
      title.value = '修改后的ref里面的title'
    }
    return {
      title,
      userinfo,
      getUserName,
      getTitle,
      setUserName,
      setTitle,
      // ...article  错误写法会导致article失去响应式
      ...toRefs(article) // 解构article 可以通过 description 直接访问 article.description的数据  不用写article.description
    }
  },
  data () {
    return {
      msg: '我是home组件的msg'
    }
  },
  methods: {
    run () {
      alert('run')
    }
  }
}
</script>
