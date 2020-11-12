import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import qs from 'qs';
import moment from 'moment';
//导入MintUI的所有组件

import MintUI from 'mint-ui';
//导入MintUI的样式文件
import 'mint-ui/lib/style.min.css';

//通过Vue.use()方法将Mint UI注册为Vue的插件
Vue.use(MintUI);
axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.prototype.moment = moment;
Vue.prototype.qs = qs;
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
