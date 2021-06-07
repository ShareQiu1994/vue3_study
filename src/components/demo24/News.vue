<template>
  <div>
    News组件  
    <ul>
        <li v-for="(item, index) in list" :key="index">
            <router-link  :to="{name:'content',query:{aid:index}}"> {{item}}</router-link>
        </li>
    </ul>
    <br>
    <br>
    <button @click="this.$router.push({name:'content',query:{aid:222}})">js跳转到content--命名路由</button>
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

</style>