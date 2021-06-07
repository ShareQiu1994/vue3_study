<template>
<div>
    <h1>{{ msg }}</h1>
    <h3>一、绑定数据</h3>
    <p>绑定对象：{{ userinfo.username }}--{{ userinfo.age }}</p>
    <p>
        {{ h2 }}
    </p>
    <p>绑定html: <span v-html="h2"></span></p>

    <h3>二、绑定属性</h3>
    <br />
    <img v-bind:src="logoSrc" alt="itying" />
    <br />
    <img :src="logoSrc" alt="itying" />

    <br />

    <div title="你好vue">鼠标放上去试试1</div>

    <br />
    <div :title="title">鼠标放上去试试2</div>

    <h3>三、绑定动态属性</h3>

    <a v-bind:[myHref]="'http://www.baidu.com'">跳转百度</a>
    <br />

    <a :[myHref]="myLink">跳转到itying</a>

    <h3>四、循环遍历数组</h3>

    <ul>
        <li v-for="(item, index) in list1" :key="index">
            {{ item }}--{{ index }}
        </li>
    </ul>

    <br />

    <ul>
        <li v-for="(item, index) in list2" :key="index">
            {{ item.title }}
        </li>
    </ul>

    <br />
    <br />
    <ul>
        <li v-for="(item, index) in list3" :key="index">
            {{ item.cate }}
            <ol>
                <li v-for="(i, k) in item.list" :key="k">
                    {{ i.title }}
                </li>
            </ol>
        </li>
    </ul>
    <br />
    <h3>五、循环遍历对象</h3>
    <ul>
        <li v-for="(value, attr, index) in myObject" :key="index">
            {{ attr }}---{{ value }}--{{ index }}
        </li>
    </ul>
    <br /><br />
</div>
</template>

<script>
export default {
  name: 'demo1',
  data () {
    return {
      msg: '你好vue',
      userinfo: {
        username: '张三',
        age: '20'
      },
      h2: '<h2>你好vue 我是一个html标签</h2>',
      logoSrc: 'https://www.itying.com/themes/itying/images/logo.gif',
      title: '自定义属性值',
      myHref: 'href',
      myLink: 'http://www.itying.com',
      list1: ['马总', '刘总', '李总'],
      list2: [{
        title: '新闻111'
      },
      {
        title: '新闻2222'
      },
      {
        title: '新闻3333'
      },
      {
        title: '新闻444'
      }
      ],
      list3: [{
        cate: '国内新闻',
        list: [{
          title: '国内新闻11111'
        },
        {
          title: '国内新闻2222'
        }
        ]
      },
      {
        cate: '国际新闻',
        list: [{
          title: '国际新闻11111'
        },
        {
          title: '国际新闻2222'
        }
        ]
      }
      ],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2020-03-22'
      }
    }
  }
}
</script>

<style>
h1 {
    text-align: center;
    color: #666;
}
</style>
