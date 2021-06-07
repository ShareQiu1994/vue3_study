<template>
  <div>
    {{ msg }}
    <br /><br />
    <button @click="getMsg">获取msg的值</button>
    <br /><br />
    <button v-on:click="setMsg">设置msg的值</button>

    <br /><br />
    <h3>{{ title }}</h3>
    <button v-on:click="setTitle('111')">设置Title的值1</button>
    <br />
    <br />
    <button v-on:click="setTitle('2222')">设置Title的值2</button>
    <br />
    <br />
    <button @click="run()">执行run方法实现方法调用方法</button>

    <br />
    <br />
    <button data-aid="123" cc="cc2222" @click="eventFn($event)">
      事件对象
    </button>
    <br />
    <br />
    <button @click="warn('传入的参数', $event)">Submit</button>
    <br />
    <br />
    <button @click="one(), two(), setMsg()">点击按钮一次执行多个方法</button>
    <br />
    <br />
    <a href="http://www.baidu.com" target="_blank" @click="afn1($event)"
      >跳转链接1</a
    >
    <br /><br />
    <a href="http://www.baidu.com" target="_blank" @click.prevent="afn2()"
      >跳转链接2</a
    >

    <br />
    <br />
    <input type="text" @keyup="doSearch1($event)" />
    <br />
    <br />
    <input type="text" @keyup.enter="doSearch2()" />
  </div>
</template>

<script>
export default {
  name: 'demo3',
  data () {
    return {
      msg: '你好vue',
      title: '我是一个标题'
    }
  },
  methods: {
    getMsg () {
      alert(this.msg)
    },
    setMsg () {
      this.msg = '我是改变后的msg'
    },
    setTitle (data) {
      this.title = data
    },
    run () {
      this.getMsg()
    },
    eventFn (e) {
      console.log(e)
      e.srcElement.style.background = 'red'
      // 获取自定义属性
      console.log(e.srcElement.dataset.aid)
      console.log(e.srcElement)
      console.log(e.srcElement.getAttributeNode('cc').value)

      // e.preventDefault();
      // e.stopPropagation();
    },
    warn (message, event) {
      console.log(event)
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    one () {
      console.log('one')
    },
    two () {
      console.log('two')
    },
    afn1 (e) {
      e.preventDefault()
    },
    afn2 () {},
    doSearch1 (e) {
      console.log(e)
      console.log(e.keyCode)
      if (e.keyCode == 13) {
        alert('按了回车键')
      }
    },
    doSearch2 () {
      alert('按了回车键')
    }
  }
}
</script>

<style>
</style>
