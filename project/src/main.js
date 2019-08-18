// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'

import router from './router'


//import store from './store'
//全局引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import reset from './style/reset.less'

Vue.use(MintUI)
//按需引入
// import {Navbar, TabItem,TabContainer,} from 'mint-ui'
// Vue.component(Navbar.name,Navbar);
// Vue.component(TabItem.name,TabItem);
// Vue.component(TabContainer.name,TabContainer);
Vue.config.productionTip = false
//Axios请求拦截器
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('响应拦截器')
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
//原型链原型继承
Vue.prototype.$axios=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App:App },
  template: '<App/>'
})
