<template>
    <div>
        <mt-header title="填写订单">
            <router-link to="/cart" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="address" >
            <p class="address_home">
                重庆渝北区保利香槟花园B区
            </p >
            <span class="address_icon" slot="right">></span>
            <p class="address_user">
                小宝贝  15213717532
            </p>
            
        </div>
        <div class="address_list" v-for="(item,index) of list" :key="index">
            <p class="address_list_title">{{item.shop_name}}</p>
            <div>
                <div class="address_list_item">
                <img :src="'http:'+item.goods_img">
                <p>{{item.goods_name}}</p>
                </div>
                <p class="address_list_price">￥{{item.price}}</p>
                <div class="address_list_button">
                    <button @click="jian(item.sales_num,index)">-</button>
                    <input  :value="item.sales_num" disabled>
                    <button @click="add(item.sales_num,index)">+</button>
                </div>
            </div>
        </div>
        <div class="send">
            <ul >
                <li class="send_ps">
                    <p>配送</p>
                    <div class="send_ps_time">
                    <p>快递运输 </p> 
                    <p>预计11月20日24:00前送达</p>
                    </div>
                </li>
                <li class="send_ps">
                    <p>退换无忧</p>
                    <div class="send_ps_time">
                    <p>商家赠送 </p> 
                    <p>享运费补贴或免费取件服务</p>
                    </div>
                </li>
                <li class="send_ps">
                    <p>留言</p>
                    <div class="send_ps_time">
                    <input  type="text" placeholder="建议留言前先与商家沟通确认" name="" id="">
                    </div>
                </li>
             </ul>  
             <ul>  
                 <li class="send_ps">
                    <p>商品金额</p>
                    <div class="send_ps_money">
                    <p>￥459.00</p>
                    </div>
                </li>
                <li class="send_ps">
                    <p>退换无忧</p>
                    <div class="send_ps_money">
                    <p>￥0.00</p>
                    </div>
                </li>
                <li class="send_ps">
                    <p>运费</p>
                    <div class="send_ps_money">
                    <p>￥0.00</p>
                    </div>
                </li>
                <li class="send_ps">
                    <p>优惠券</p>
                    <div class="send_ps_money">
                    <p style="color:red">-￥10.00</p>
                    </div>
                </li>
             </ul>
           
        </div>
        <mt-tabbar>
           <p>￥429.00</p>
           <button @click="toDo()">提交订单</button>
         </mt-tabbar>
    </div>
</template>

<style scoped>
      body{
      margin: 0;
      padding: 0;
    }
   
  .mint-header{
		background-color:white;
		font-size: 18px;
        color: black;
		text-align: center;
		position: fixed;
		width: 100%;
		z-index: 100;
		left: 0;
        height: 50px;
	}
    .address{
         margin-top: 50px;
         width: 100%;
         position:fixed;
         background: linear-gradient(to bottom,#fff,#fbfbfb);
         padding: 15px;
    }
    .address>.address_home{
        font-size: 15px;
        font-weight: bolder;
    }
    .address>.address_user{
        font-size: 14px;
    }
    .address>.address_icon{
        margin-left: 330px;
    }
    .address_list{
        margin-top: 130px;
        position: fixed;
    }
    .address_list_title{
        font-size: 14px;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
    }
    .address_list_item{
        display: flex;
        padding-left:15px;
        font-size: 14px;
    }
    .address_list_item>img{
        width: 100px;
        height: 100px;
        padding-right: 10px;
    }
    .address_list_button{
        margin-left: 70%;
        margin-top:-5%;
        
    }
    .address_list_button>input{
        width: 30px;
        height: 30px;
        text-align: center;
        border:0
        
    }
    .address_list_price{
        margin-left: 35%;
        margin-top:-15%;
        color:red;
        font-weight: bolder;
    }
    .address_list_button>button{
         width: 30px;
        height: 30px;
        text-align: center;
        border: none;
    }
    .send{
        margin-top: 290px;
        position: fixed;
        font-size: 14px;
        font-weight: border;
    }
    .send .send_ps{
        display: flex;
        margin-bottom: 20px;
    }
    .send .send_ps>input{
       font-size: 10px;
       text-align: center;
       border:0px solid #fff;
    }
    .send .send_ps>p:first-child{
        width: 80px;
        padding-left: 8px
    }
    .send .send_ps>.send_ps_time{
       margin-left:110px;
       text-align: right;
    }
    .send .send_ps>.send_ps_money{
        text-align: right;
        margin-left: 220px;
    }
   .mint-tabbar{
       justify-content: space-between;
   }
   .mint-tabbar>p{
      line-height: 40px;
      font-weight: 900;
      color: red;
   }
   .mint-tabbar>button{
       display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		height: 35px;
		padding: 0px 20px;
		border-radius: 30px;
        background: rgb(247, 44, 17);
   }
</style>

<script>
export default {
    data(){
        return{
            sales_num:1,
            list:[
                {
               "classify_id": 1,
			   "goods_img": "//gd4.alicdn.com/imgextra/i2/726671139/O1CN01UsYSFL1KHhdcGkTfo_!!726671139.jpg_400x400.jpg",
			   "goods_name": "连衣裙ins夏chic2019新款很仙的法国小众吊带网纱超仙a字裙两件套",
			   "goods_id": 61,
			   "shop_name": "恋上公主",
		       "sales_num": 1,
		   	   "price": "105.00"
            }
            ],
            
        }
    },
    methods:{
        add(num,index){
            this.list[index].sales_num = parseInt(this.list[index].sales_num) +1;
            
			// this.totalPrice();

        },
        jian(num,index){
            if(this.list[index].sales_num==1){
                this.list[index].sales_num=1
            }else{
                this.list[index].sales_num=parseInt(this.list[index].sales_num) - 1;
               // this.totalPrice();
            }
        },
        // 点击结算
		toDo(){
			if(this.checkNum <= 0){
				this.$toast('先选中需要结算的商品');
			}
			else{
				// 结算选中的商品
				var isList = [];
				for(var i in this.list){
					if(this.list[i].checked){
						isList.push(this.list[i]);
					}
				}				
				console.log(isList);
				this.$router.push('/pay')
			}
		},
    }

}
</script>