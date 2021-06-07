<template>
<h2>生命周期函数演示</h2>
<br>
<br>
<button @click="msg='改变后的值'">改变msg</button>

<div id="msg">
    {{msg}}
</div>

<br><br>

<div class="tab_info">
    <ul class="tab_header">
        <li v-for="(item,index) in posts" :key="index" :class="{'active':currentIndex===index}" @click="currentIndex=index">
            {{item.title}}
        </li>
    </ul>

    <div class="tab_content">
        <span v-html="content"></span>
    </div>

</div>

<br><br>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
      msg: '我是一个数据',
      posts: [{
        id: 1,
        title: 'Nodejs 教程',
        content: '<p>大地老师Nodejs系列教程有Nodejs基础、Nodejs Express、Nodejs Koa、Egg.js、Nest.js等</p>'
      },
      {
        id: 2,
        title: 'Golang教程',
        content: '<p>教程包括：Golang零基础入门进阶教程（50讲）、Beego基础、Mysql入门实战、Gorm入门、Gorm实战、Gorm关联查询、Golang+Beego+Grom仿小米商城项目（真实企业级项目实战）</p>'
      },
      {
        id: 3,
        title: 'Ionic5.x教程',
        content: '<p>Ionic4.x以后在 Angular、Vue、React基础上面做了一些封装，让我们可以用自己喜欢的框架，更快速和容易的开发移动的项目</p>'
      }
      ]
    }
  },
  computed: {
    content () {
      return this.posts[this.currentIndex].content
    }
  },
  beforeCreate () {
    console.log('实例刚刚被创建1')
  },
  created () {
    console.log('实例已经创建完成2')
  },
  beforeMount () {
    console.log('模板编译之前3')
  },
  mounted () {
    /* 请求数据，操作dom , 放在这个里面  mounted */
    var oDiv1 = document.querySelector('#msg')
    console.log('1-' + oDiv1.innerHTML)
    this.msg = '$nextTick演示'
    var oDiv2 = document.querySelector('#msg')
    console.log('2-' + oDiv2.innerHTML)
    this.$nextTick(() => {
      // 仅在渲染整个视图之后运行的代码
      var oDiv3 = document.querySelector('#msg')
      console.log('3-' + oDiv3.innerHTML)
    })

    console.log('模板编译完成4')
  },
  beforeUpdate () {
    console.log('数据更新之前')
  },
  updated () {
    console.log('数据更新完毕')
  },
  activated () {
    console.log('keep-alive 缓存的组件激活时调用')
  },
  deactivated () {
    console.log('keep-alive 缓存的组件停用时调用')
  },
  beforeUnmount () { // vue2.x中beforeDestroy
    /* 页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数 */
    console.log('实例销毁之前')
  },
  unmounted () { // vue2.x中destroyed
    console.log('实例销毁完成')
  }
}
</script>

<style lang="scss" scoped>
.h2 {
    text-align: center;
}

ul {
    list-style: none;
}

.tab_info {
    width: 600px;
    margin: 0 auto;
    border: 1px solid #eee;

    .tab_header {
        width: 100%;
        height: 40px;
        line-height: 40px;

        li {
            display: inline-block;
            margin: 0px 5px;
            background: #eee;
            text-align: center;
            padding: 0px 10px;
            cursor: pointer;

            &.active {
                background: red;
                color: #fff;
            }
        }
    }

    .tab_content {
        padding: 40px;
    }
}
</style>
