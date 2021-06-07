<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 15:32:18
 * @LastEditTime: 2021-06-06 15:35:20
-->
<template>
  <div>
    News--{{ title }}

    <br />
    <br />
    count={{ count }}

    <br />
    <br />
    <button @click="setCount">改变Count</button>
    <br />
    <br />
    {{ reverseTitle }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//data数据的接口
interface News {
  title: string;
  description: string;
  count: number;
  content?: string;
}
// let newsData:News={
//     title:"我是一个新闻",
//     description:"我是一个新闻的描述",
//     count:12
// }

let newsData = {
  title: "我是一个新闻",
  description: "我是一个新闻的描述",
  count: 12,
} as News;

export default defineComponent({
  data() {
    return newsData;
  },
  methods: {
    setCount(): void {
      this.count = 123;
    },
  },
  computed: {
    reverseTitle(): string {
      return this.title.split("").reverse().join("");
    },
  },
});
</script>

<style lang="scss">
//cnpm install -D sass-loader node-sass
</style>
