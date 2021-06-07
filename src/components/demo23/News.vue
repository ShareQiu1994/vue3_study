<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-06 18:32:09
 * @LastEditTime: 2021-06-06 18:47:28
-->
<template>
  <div>
    News组件

    <ul>
        <li v-for="(item, index) in list" :key="index">
            <router-link  :to="`/23/newscontent?aid=${index}`"> {{item}}</router-link>
              <!-- <router-link  :to="`/23/newsdetail/${index}`"> {{item}}</router-link> -->
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//data数据的接口
interface News {
  list: string[];
}
export default defineComponent({
  data() {
    return {
        list:[]
    } as News;
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.list.push(`我是第${i}个新闻`);
    }
  },
});
</script>

<style lang="scss">
//cnpm install -D sass-loader node-sass
</style>
