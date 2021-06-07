/*
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-03 18:08:03
 * @LastEditTime: 2021-06-06 21:58:50
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import demo1 from '../views/demo1.vue'
import demo2 from '../views/demo2.vue'
import demo3 from '../views/demo3.vue'
import demo4 from '../views/demo4.vue'
import demo5 from '../views/demo5.vue'
import demo6 from '../views/demo6.vue'
import demo7 from '../views/demo7.vue'
import demo8 from '../views/demo8.vue'
import demo9 from '../views/demo9.vue'
import demo10 from '../views/demo10.vue'
import demo11 from '../views/demo11.vue'
import demo12 from '../views/demo12.vue'
import demo13 from '../views/demo13.vue'
import demo14 from '../views/demo14.vue'
import demo15 from '../views/demo15.vue'
import demo16 from '../views/demo16.vue'
import demo17 from '../views/demo17.vue'
import demo18 from '../views/demo18.vue'
import demo19 from '../views/demo19.vue'
import demo20 from '../views/demo20.vue'
import demo21 from '../views/demo21.vue'
import demo22 from '../views/demo22.vue'
import demo23 from '../views/demo23.vue'
import demo24 from '../views/demo24.vue'
import demo25 from '../views/demo25.vue'
const routes = [
  {
    path: '/',
    alias: '/1',
    name: 'demo1',
    component: demo1
  },
  {
    path: '/2',
    name: 'demo2',
    component: demo2
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/3',
    name: 'demo3',
    component: demo3
  },
  {
    path: '/4',
    name: 'demo4',
    component: demo4
  },
  {
    path: '/5',
    name: 'demo5',
    component: demo5
  },
  {
    path: '/6',
    name: 'demo6',
    component: demo6
  },
  {
    path: '/7',
    name: 'demo7',
    component: demo7
  },
  {
    path: '/8',
    name: 'demo8',
    component: demo8
  },
  {
    path: '/9',
    name: 'demo9',
    component: demo9
  },
  {
    path: '/10',
    name: 'demo10',
    component: demo10
  },
  {
    path: '/11',
    name: 'demo11',
    component: demo11
  },
  {
    path: '/12',
    name: 'demo12',
    component: demo12
  },
  {
    path: '/13',
    name: 'demo13',
    component: demo13
  },
  {
    path: '/14',
    name: 'demo14',
    component: demo14
  },
  {
    path: '/15',
    name: 'demo15',
    component: demo15
  },
  {
    path: '/16',
    name: 'demo16',
    component: demo16
  },
  {
    path: '/17',
    name: 'demo17',
    component: demo17
  },
  {
    path: '/18',
    name: 'demo18',
    component: demo18
  },
  {
    path: '/19',
    name: 'demo19',
    component: demo19
  },
  {
    path: "/20",
    name: "demo20",
    component: demo20
  },
  {
    path: "/21",
    name: "demo21",
    component: demo21
  },
  {
    path: "/22",
    name: "demo22",
    component: demo22,
    children:[
      { path: '', component: () => import( '../components/demo22/Home.vue')},
      { path: 'news',component: () => import( '../components/demo22/News.vue')},
      { path: 'user', component: () => import( '../components/demo22/User.vue')},
    ]
  },
  {
    path: "/23",
    name: "demo23",
    component: demo23,
    children:[
      { path: '', component: () => import( '../components/demo23/Home.vue')},
      { path: 'news',component: () => import( '../components/demo23/News.vue')},
      { path: 'newscontent',component: () => import( '../components/demo23/NewsContent.vue')},
      { path: 'newsdetail/:aid',component: () => import( '../components/demo23/NewsContent.vue')},
      { path: 'user', component: () => import( '../components/demo23/User.vue')},
    ]
  },
  {
    path: "/24",
    name: "demo24",
    component: demo24,
    children:[
      { path: '', redirect:"/24/home" },  //路由重定向
      { path: 'home', component: () => import( '../components/demo24/Home.vue')},
      { path: 'news', component: () => import( '../components/demo24/News.vue'),  name:"news",alias:["n","c"]}, // alias 路由别名 通过 /24/n /24/c 都可以访问
      { path: 'user',  component: () => import( '../components/demo24/User.vue') , alias:"people"},
      { path: 'userinfo/:id',name:"userinfo",alias:"/u/:id", component: () => import( '../components/demo24/UserInfo.vue') },
      { path: 'newscontent',name:"content" , component: () => import( '../components/demo24/NewsContent.vue')  },
    ]
  },
  {
    path: "/25",
    name: "demo25",
    component: demo25,
    children:[
      { path: '', redirect: "/25/home" },  //路由重定向
      { path: 'home', component: () => import( '../components/demo25/Home.vue') },
      {
          path: 'news', component: () => import( '../components/demo25/News.vue'),
          children: [
              { path: '', redirect: "/25/news/newslist" },
              { path: 'newslist', component: () => import( '../components/demo25/News/NewsList.vue') },
              { path: 'newsadd', component: () => import( '../components/demo25/News/NewsAdd.vue') },

          ]
      },
      {
          path: 'user', component: () => import( '../components/demo25/User.vue'),
          children: [
              { path: '', redirect: "/25/user/userlist" },
              { path: 'userlist', component: () => import( '../components/demo25/User/UserList.vue') },
              { path: 'useradd', component: () => import( '../components/demo25/User/UserAdd.vue') },
          ]
      },
  ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
