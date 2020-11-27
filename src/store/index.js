import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '../router';
import {MessageBox} from 'mint-ui';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: [
            // {
            //     classify_id: 1,
            //     goods_img:
            //         "//gd4.alicdn.com/imgextra/i2/726671139/O1CN01UsYSFL1KHhdcGkTfo_!!726671139.jpg_400x400.jpg",
            //     goods_name:
            //         "连衣裙ins夏chic2019新款很仙的法国小众吊带网纱超仙a字裙两件套",
            //     goods_id: 61,
            //     shop_name: "恋上公主",
            //     sales_num: 1,
            //     price: "105.00",
            // },
            // {
            //     classify_id: 2,
            //     goods_img:
            //         "//gd3.alicdn.com/imgextra/i3/726671139/O1CN01P4vwli1KHhdYOfl9j_!!726671139.jpg_400x400.jpg",
            //     goods_name:
            //         "防晒衬衫女长袖薄款设计感小众百搭外穿2019新款超薄透气雪纺衬衣",
            //     goods_id: 62,
            //     shop_name: "恋上公主",
            //     sales_num: 2,
            //     price: "116.00",
            // },
            // {
            //     classify_id: 2,
            //     goods_img:
            //         "//gd2.alicdn.com/imgextra/i1/726671139/O1CN010EFA6U1KHhdODcpz0_!!726671139.jpg_400x400.jpg",
            //     goods_name:
            //         "2019网红时尚连衣裙很仙的夏款网纱小清新温柔波点吊带T恤裙套装",
            //     goods_id: 63,
            //     shop_name: "恋上公主",
            //     sales_num: 3,
            //     price: "129.00",
            // },
            // {
            //     classify_id: 4,
            //     goods_img:
            //         "//gd4.alicdn.com/imgextra/i4/726671139/O1CN01nonA501KHhctJZ7Tk_!!726671139.jpg_400x400.jpg",
            //     goods_name:
            //         "新款衬衫女时尚洋气超仙设计感小众2019长袖收腰雪纺韩版chic衬衣",
            //     goods_id: 64,
            //     shop_name: "恋上公主",
            //     sales_num: 3,
            //     price: "69.00",
            // },
        ],
        //标识用户是否已经登录,1表示已登录,0表示未登录
        isLogined: localStorage.getItem('isLogined') || 0,
        //存储登录用户的相关信息
        userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    },
    mutations: {
        changeAge(state) {
            state.age++;
        },
        addCart(state, info) {
            // 1.查看是否添加过
            const oldInfo = state.cartList.find(item => item.fid === info.fid)

            // 2.+1或者新添加
            if (oldInfo) {
                oldInfo.count += 1
            } else {
                info.count = 1
                info.checked = true
                state.cartList.push(info)

                console.log("=========")
                console.log(state.cartList)
            }
        },
        addProduct(state, payload) {
            console.log(state);
            console.log(payload);
            state.products.push(payload);
        },
        //  登录
        login_mutations(state, payload) {
            state.isLogined = 1;
            state.userInfo = payload;
        },
        // 注销
        logout_mutations(state) {
            // 修改登录状态为0
            state.isLogined = 0;
            // 修改登录用户的相关信息为空对象
            state.userInfo = {};
        }
    },
    actions: {
        getServerData(context) {
            //console.log(context);
            //console.log('-------------------------');
            //异步请求
            // console.log(this);
            axios.get('/data').then(res => {
                //console.log(res.data.results);
                context.commit('addProduct', res.data.results);
            });
        },
        login_actions(context, payload) {
            //向服务器发送异步请求
            context.commit('login_mutations', payload);
            //将用户的登录状态保存到webstorage中
            localStorage.setItem('isLogined', 1);
            localStorage.setItem('userInfo', JSON.stringify(payload));
        }
    },
    getters: {
        cartList(state) {
            return state.cartList
        },
        cartCount(state, getters) {
            return getters.cartList.length
        }
    },
    modules: {}
})
