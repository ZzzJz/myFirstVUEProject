// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import storeConfig from './vuex/store'
//引用API文件
import api from './api/index.js'
//将API方法绑定到全局
Vue.prototype.$api = api

import utils from './utils/index.js'
Vue.prototype.$utils = utils

Vue.config.productionTip = false

//配置百度编辑器
import '../static/ue/ueditor.config.js'
import '../static/ue/ueditor.all.min.js'
import '../static/ue/lang/zh-cn/zh-cn.js'
import '../static/ue/ueditor.parse.min.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
