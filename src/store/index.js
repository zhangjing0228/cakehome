import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '../router';
import {MessageBox} from 'mint-ui';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    	//标识用户是否已经登录,1表示已登录,0表示未登录
		isLogined:localStorage.getItem('isLogined') || 0,
		//存储登录用户的相关信息
		userInfo:JSON.parse(localStorage.getItem('userInfo')) || {},
  },
  mutations: {
    changeAge(state){
      state.age ++;
   },
   addProduct(state,payload){
    console.log(state);
    console.log(payload);
    state.products.push(payload);
   },
  //  登录
   login_mutations(state,payload){
     state.isLogined=1;
     state.userInfo=payload;
   },
   // 注销
		logout_mutations(state){
			// 修改登录状态为0
			state.isLogined = 0;
			// 修改登录用户的相关信息为空对象
			state.userInfo = {};
		}
  },
  actions: {
    getServerData(context){
			//console.log(context);
			//console.log('-------------------------');
			//异步请求
			// console.log(this);
			axios.get('/data').then(res=>{
					//console.log(res.data.results);
					context.commit('addProduct',res.data.results);
			});
		},
		login_actions(context,payload){
			//向服务器发送异步请求
			axios.post('/login',payload).then(res=>{
				//登录成功
				if(res.data.code == 1){
					//提交Mutations
					context.commit('login_mutations',res.data.userInfo);
					//将用户的登录状态保存到webstorage中
					localStorage.setItem('isLogined',1);
					localStorage.setItem('userInfo',JSON.stringify(res.data.userInfo));
					//页面跳转					
					router.push('mycenter');
				} else {
					//显示警示对话框
					MessageBox('登录提示','用户名或密码错误')
				}
			});
			//console.log(payload);
			//console.log('现在要发送请求，以实现用户的登录操作了');
		}
  },
  modules: {
  }
})
