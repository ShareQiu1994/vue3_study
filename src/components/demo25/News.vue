<template>
  <div class="content">
    <div class="left">
      <ul>
        <li><router-link to="/25/news/newslist">新闻列表</router-link></li>

        <li><router-link to="/25/news/newsadd">增加新闻</router-link></li>
      </ul>
    </div>

    <div class="right">
       <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">

</style>
