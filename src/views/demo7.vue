<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-04 21:34:34
 * @LastEditTime: 2021-06-05 10:05:24
-->
<template>
  <h2>Vue实现TodoList</h2>
  <div class="todolist">
    <input type="text" v-model="todo" @keyup.enter="addData()" />
    <hr />
    <h4>正在进行</h4>
    <ul>
      <template v-for="(item, index) in list" :key="index">
        <li v-if="!item.checked">
          <input
            type="checkbox"
            v-model="item.checked"
            @change="setTodolist()"
          />
          {{ item.title }}----
          <button @click="deleteData(index)">删除</button>
        </li>
      </template>
    </ul>

    <h4>已经完成</h4>
    <ul>
      <template v-for="(item, index) in list" :key="index">
        <li v-if="item.checked">
          <input
            type="checkbox"
            v-model="item.checked"
            @change="setTodolist()"
          />
          {{ item.title }}----
          <button @click="deleteData(index)">删除</button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import storage from '../models/storage'

export default {
  name: 'demo7',
  data () {
    return {
      todo: '',
      list: []
    }
  },
  methods: {
    addData () {
      this.list.push({
        title: this.todo,
        checked: false
      })
      this.todo = ''
      storage.set('todolist', this.list)
    },
    deleteData (key) {
      // alert(key)
      this.list.splice(key, 1)
      storage.set('todolist', this.list)
    },
    setTodolist () {
      storage.set('todolist', this.list)
    }
  },
  // 页面加载的时候触发的方法
  mounted () {
    const todolist = storage.get('todolist')
    if (todolist) {
      this.list = todolist
    }
    console.log('页面加载的时候触发的方法')
  }
}
</script>

<style lang="scss">
h2 {
  text-align: center;
}

.todolist {
  width: 500px;
  border: 1px solid #eee;
  margin: 0 auto;
  padding: 20px;

  h3 {
    color: red;
    font-size: 40px;
  }
}
</style>
