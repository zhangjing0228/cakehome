import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUI from 'mint-ui' //导入MintUI的所有组件
import 'mint-ui/lib/style.min.css' //导入MintUI的样式文件
import moment from 'moment'//引入moment组件
// import '../static/js/flexible.js'




//通过Vue.use()方法将Mint UI注册为Vue的插件
Vue.use(MintUI);

//web服务器的端口号
axios.defaults.baseURL = 'http://127.0.0.1';
Vue.prototype.qs=qs;
Vue.prototype.moment=moment;
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
