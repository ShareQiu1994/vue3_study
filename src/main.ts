/*
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-03 18:08:03
 * @LastEditTime: 2021-06-05 21:39:53
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
import Storage from './models/storage'
import baseMixin from './mixin/baseMixin'

const app = createApp(App).use(store).use(router)

app.config.globalProperties.Axios = Axios // this.Axios
app.config.globalProperties.Storage = Storage // this.Storage
app.config.globalProperties.fetchJsonp = fetchJsonp

// 全局配置mixin
app.mixin(baseMixin)

app.mount('#app')
