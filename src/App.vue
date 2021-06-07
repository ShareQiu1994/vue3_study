<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-03 18:08:03
 * @LastEditTime: 2021-06-06 21:50:14
-->
<template>
  <div id="nav">
    <router-link to="/">绑定数据</router-link> |
    <router-link to="/2">class和style</router-link> |
    <router-link to="/3">方法和事件对象</router-link> |
    <router-link to="/4">dom操作</router-link> |
    <router-link to="/5">MVVM代替dom操作</router-link> |
    <router-link to="/6">js表达式 v-if v-show</router-link> |
    <router-link to="/7">todoList + localstorage</router-link> |
    <router-link to="/8">父子组件传值</router-link> |
    <router-link to="/9">组件单向数据流</router-link> |
    <router-link to="/10">父子组件相互调用</router-link> |
    <router-link to="/11">$emit\mitt组件传值</router-link> |
    <router-link to="/12">组件双向数据/slots</router-link> |
    <router-link to="/13">生命周期\keep-alive</router-link> |
    <router-link to="/14">Axios\jsonp\防抖</router-link> |
    <router-link to="/15">baseMixin</router-link> |
    <router-link to="/16">teleport模态框</router-link> |
    <router-link to="/17">compositionApi(上)</router-link> |
    <router-link to="/18">compositionApi(下)</router-link> |
    <router-link to="/19">provide/inject多层组件传参</router-link> |
    <router-link to="/20">typescript(上)</router-link> |
    <router-link to="/21">typescript(下)</router-link> |
    <router-link to="/22">路由(一)</router-link> |
    <router-link to="/23">路由(二)</router-link> |
    <router-link to="/24">路由(三)</router-link> |
    <router-link to="/25">路由(四)</router-link> |
  </div>

  <!--
    keep-alive组件属性
    include - string | RegExp | Array。只有名称匹配的组件会被缓存。
    exclude - string | RegExp | Array。任何名称匹配的组件都不会被缓存。
    max - number | string。最多可以缓存多少组件实例。
  -->

  <router-view v-slot="{ Component }">
    <!-- <transition> -->
    <keep-alive :include="['demo13']">
      <component :is="Component" />
    </keep-alive>
    <!-- </transition> -->
  </router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
