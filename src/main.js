import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import moment from 'moment'
import MintUI from 'mint-ui'

import VueLazyLoad from 'vue-lazyload'

import 'mint-ui/lib/style.min.css';


Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('./assets/img/common/placeholder.png')
})
Vue.use(MintUI);
axios.defaults.baseURL='http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.prototype.moment=moment;
Vue.prototype.qs=qs;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')