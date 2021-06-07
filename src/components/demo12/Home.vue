<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-05 15:39:18
 * @LastEditTime: 2021-06-05 16:13:36
-->
<template>
<div class="home">
    我是一个Home组件
    <br>
    <br>
    <v-input v-model:keyword="keyword"></v-input>
    <br>
    {{keyword}}
    <br>
    <br>
    <!-- <v-input></v-input> -->
    <br>
    <br>
    <hr>
    <h2>username组件</h2>

    <user-name v-model:firstName="firstName" v-model:lastName="lastName"></user-name>
    <br>
    <br>
    {{firstName}}- {{lastName}}

    <br>
    <hr>

    <br>
    <v-button>提交</v-button>

    <br>
    <br>
    <v-button class="black">取消</v-button>

    <br>
    <br>
    <v-button class="primary" data-aid="123">确定</v-button>

    <br>
    <br>
    <v-button>
        <i>Icon</i>
        搜索
    </v-button>
    <br>
    <br>
    <v-button>
    </v-button>

    <br>
    <br>
    <hr>
    <h2>自定义 Attribute 继承</h2>
    <br>
    <date-picker data-time="2020-11-11" data-aid="1221"></date-picker>
</div>
</template>

<script>
import ItyingInput from './ItyingInput'
import UserName from './UserName'
import ItyingButton from './ItyingButton'
import DatePicker from './DatePicker'
export default {
  data () {
    return {
      keyword: '女装',
      firstName: '',
      lastName: ''
    }
  },
  methods: {

  },
  components: {
    'v-input': ItyingInput,
    UserName,
    'v-button': ItyingButton,
    DatePicker
  }

}
</script>

<style lang="scss">
.home {
    padding: 20px;
}
</style>
