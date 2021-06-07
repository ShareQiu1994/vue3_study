<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="setMsg()">触发方法设置msg的值</button>
    <br />
    <br />

    <button @click="getMsg()">触发方法获取msg的值</button>

    <br />
    <br />
    <div class="red"></div>

    <br />
    <button @click="changeClass()">改变class</button>
    <br />
    <div :class="myClass"></div>

    <h2>class绑定多个动态属性：</h2>
    <div :class="{ active: isActive, red: isRed }">div</div>

    <div class="blue" :class="{ active: isActive }">div</div>

    <br />

    <div :class="[errorClass, baseClass]">div</div>

    <br />

    <div :class="[flag ? baseClass : errorClass]">三目运算绑定class</div>
    <h2>绑定多个style</h2>

    <br />
    <div :style="'color:' + color">绑定style</div>
    <br />

    <div :style="{ color: activeColor, fontSize: fontSize }">绑定多个style</div>
    <br />
    <div :style="styleObject">绑定多个style</div>
    <br />
    <br />

    <div :style="[baseStyles, orangeStyle]">绑定多个style</div>
    <br />
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ aaa: index == 0, bbb: index == 1 }"
      >
        {{ item }}
      </li>
    </ul>
    <br />

    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :style="[index == 0 ? styleRed : null, index == 1 ? styleBlue : null]"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo2',
  data () {
    return {
      msg: '你好vue',
      myClass: 'red',
      isActive: true,
      isRed: false,
      errorClass: 'error',
      baseClass: 'base',
      flag: true,
      color: 'red',
      activeColor: 'blue',
      fontSize: '20px',
      styleObject: {
        color: 'red',
        fontSize: '43px'
      },
      baseStyles: {
        width: '100px',
        height: '100px',
        fontSize: '18px'
      },
      orangeStyle: {
        background: 'orange'
      },
      list: ['马总', '刘总', '李总', '马总1', '刘总1', '李总1'],
      styleRed: {
        color: 'red'
      },
      styleBlue: {
        color: 'blue'
      }
    }
  },
  methods: {
    setMsg () {
      this.msg = '我是改变后的msg'
    },
    getMsg () {
      alert(this.msg)
    },
    changeClass () {
      this.myClass = 'blue'
    }
  }
}
</script>

<style>
.base {
  width: 300px;
  height: 300px;
}

.active {
  display: block;
  font-size: 30px;
  color: orange;
}

.error {
  background: orange;
  font-size: 30px;
  color: red;
}

.red {
  background: red;
  width: 100px;
  height: 100px;
}

.blue {
  background: blue;
  width: 100px;
  height: 100px;
}

.aaa {
  color: red;
}

.bbb {
  color: blue;
}
</style>
