<template>
  <h2>人员登记系统</h2>

  <div class="people_list">
    <ul>
      <li>姓 名： <input type="text" v-model="userinfo.username" /></li>

      <li>年 龄： <input type="text" v-model="userinfo.age" /></li>

      <li>
        性 别：
        <input
          type="radio"
          name="sex"
          id="sex1"
          value="1"
          v-model="userinfo.sex"
        />
        <label for="sex1">男</label>

        <input
          type="radio"
          name="sex"
          id="sex2"
          value="2"
          v-model="userinfo.sex"
        />
        <label for="sex2">女</label>
      </li>

      <li>
        城 市:

        <select v-model="userinfo.city">
          <option
            v-for="(item, index) in userinfo.cityList"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </li>
      <li>
        爱 好：
        <span v-for="(item, index) in userinfo.hobby" :key="index">
          <input type="checkbox" :id="'ch_' + index" v-model="item.checked" />
          <label :for="'ch_' + index">{{ item.title }}</label>
        </span>
      </li>
      <li>
        备注：
        <textarea cols="30" rows="4" v-model="userinfo.mark"></textarea>
      </li>
    </ul>

    <button @click="doSubmit()" class="submit">获取表单的内容</button>

    <br />
    <br />
    <pre>
    {{ userinfo }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'demo5',
  data () {
    return {
      username: 'zhangsan',
      userinfo: {
        username: '',
        age: '',
        sex: '1',
        cityList: ['北京', '上海', '深圳'],
        city: '上海',
        hobby: [
          {
            title: '吃饭',
            checked: false
          },
          {
            title: '睡觉',
            checked: false
          },
          {
            title: '写代码',
            checked: true
          }
        ],
        mark: ''
      }
    }
  },
  methods: {
    doSubmit () {
      console.log(this.userinfo)
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
