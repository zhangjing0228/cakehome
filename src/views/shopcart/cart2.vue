<template>
<div class="cart">
  <div class="page" >
    <mt-header title="我的购物车">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
      </mt-header>
      <div><hr></div>
  </div>
 <div class="shop_car_body">
       <ul>
    		<li v-for="(item, index) of list" :key="index">
    			<div class="car_list_top">
    				<div class="car_list_t_l">
    					<!-- 选择商品 -->
    					<div class="input_check">
    						<span
								:class="item.checked" 
    						@click="selectGoods(item)"><img src="../../assets/imgs/圆圈.png" ></span>
    					</div>
    					<!-- 选择商品 end -->
    					<P>商家: {{item.shop_name}}</P>
    				</div>
    				<div class="car_list_t_r">
    					<p class="ico_del" @click="delGoods(item.goods_id,index)">
							<img src="../../assets/imgs/删除.png" >
						</p>
    				</div>
    			</div>
    			<div class="car_list_center">
    				<div class="car_list_c_l">
    					<img :src="'http:'+item.goods_img" >
    				</div>
    				<div class="car_list_c_r">
    					<p>{{item.goods_name}}</p>
    					<div class="goods_intor">
    						<p>￥{{item.price}}</p>
    						<p class="select_num_input">
    							<img src="../../assets/imgs/减.png"  @click="sub(item.sales_num,index)">
    							<input :value="item.sales_num" disabled >
    							<img src="../../assets/imgs/添加.png"  @click="plus(item.sales_num,index)">
    						</p>
    					</div>
    				</div>
    			</div>
    		</li>
    	</ul>
        <div class="car_footer">
    		<div class="car_footer_l" v-show="!checkAllFlag">
    			<span  @click="checkAll(true)"><img src="../../assets/imgs/选中.png" alt=""></span>
    			<p>全选</p>
    		</div>
    		<div class="car_footer_l" v-show="checkAllFlag">
    			<span @click="checkAll(false)"><img src="../../assets/imgs/圆圈.png" alt=""></span>
    			<p>取消全选</p>
    		</div>
    		<div class="car_footer_r">
    			<span>合计：{{}}</span>
    			<p @click="toDo()">结算({{checkNum}})</p>
    		</div>
    	</div>
 
  </div>
  </div>
</template>

<script>
import * as setNum  from "../../utils/setDe.js"
export default {
    data(){
        return{
            list:[],
            selectId:[],  //选中的商品id
            totalMoney: 0,  //总价
            checkNum: 0,  //选择的商品数量(结算需要显示的数量)
            checkAllFlag:false,  //是否全选
        }
    },
   totalMoney(){
        let totalMoney=0;
        this.list.forEach(item,index => {
            totalMoney+=checkNum*price;
        });
        
    },
    
    
    // 获取购物车列表
		getList(){
			// var _this = this;
			// this.$axios.get("/static/data/a.json").then(function(res){
            //      console.log(res)
			// 	_this.list = res.data.list;
			// });

		// 	this.list.push({
		//  	"classify_id": 1,
		//  	"goods_img": "//gd4.alicdn.com/imgextra/i2/726671139/O1CN01UsYSFL1KHhdcGkTfo_!!726671139.jpg_400x400.jpg",
		//  	"goods_name": "连衣裙ins夏chic2019新款很仙的法国小众吊带网纱超仙a字裙两件套",
		//  	"goods_id": 61,
		//  	"shop_name": "恋上公主",
		//  	"sales_num": 1,
		//  	"price": "105.00"
		//  })
			this.list = [
		{
			"classify_id": 1,
			"goods_img": "//gd4.alicdn.com/imgextra/i2/726671139/O1CN01UsYSFL1KHhdcGkTfo_!!726671139.jpg_400x400.jpg",
			"goods_name": "连衣裙ins夏chic2019新款很仙的法国小众吊带网纱超仙a字裙两件套",
			"goods_id": 61,
			"shop_name": "恋上公主",
			"sales_num": 1,
			"price": "105.00"
		},
		{
			"classify_id": 2,
			"goods_img": "//gd3.alicdn.com/imgextra/i3/726671139/O1CN01P4vwli1KHhdYOfl9j_!!726671139.jpg_400x400.jpg",
			"goods_name": "防晒衬衫女长袖薄款设计感小众百搭外穿2019新款超薄透气雪纺衬衣",
			"goods_id": 62,
			"shop_name": "恋上公主",
			"sales_num": 2,
			"price": "116.00"
		},
		{
			"classify_id": 2,
			"goods_img": "//gd2.alicdn.com/imgextra/i1/726671139/O1CN010EFA6U1KHhdODcpz0_!!726671139.jpg_400x400.jpg",
			"goods_name": "2019网红时尚连衣裙很仙的夏款网纱小清新温柔波点吊带T恤裙套装",
			"goods_id": 63,
			"shop_name": "恋上公主",
			"sales_num": 3,
			"price": "129.00"
		},
		{
			"classify_id": 4,
			"goods_img": "//gd4.alicdn.com/imgextra/i4/726671139/O1CN01nonA501KHhctJZ7Tk_!!726671139.jpg_400x400.jpg",
			"goods_name": "新款衬衫女时尚洋气超仙设计感小众2019长袖收腰雪纺韩版chic衬衣",
			"goods_id": 64,
			"shop_name": "恋上公主",
			"sales_num": 3,
			"price": "69.00"
         }];  
     },
    //  created(){
	// 	console.log("********************************8")
	// 	this.getList();
	// },

}
</script>

 <style  scoped>
  *{
	  margin: 0;
	  padding: 0;
	 
  }
	.mint-header{
		background-color: pink;
		font-size: 18px;
		text-align: center;
		position: fixed;
		width: 100%;
		z-index: 100;
		top: 0;
		left: 0;
		padding: 0;
	}
	.shop_car_body{
		width: 100%;
		font-size: 16px;
	}
	ul{
		margin-bottom:85px ;
		width: 100%;
	}
	ul>li{
		 list-style: none;
		border-radius: 10px;
		background-color: rgb(248, 240, 240);
		 font-size: 14px;
		 margin-top: 30px;
	}
	ul>li>.car_list_top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 0;
	}
	ul>li>.car_list_top>.car_list_t_l{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	ul>li>.car_list_top>.car_list_t_l>.input_check{
		position: relative;
		margin-right: 10px;
		width: 40px;
		height: 40px;

	}
	ul>li>.car_list_top>.car_list_t_l>.input_check>span{
		display: block;
		position: absolute;
	}
	ul>li>.car_list_top>.car_list_t_l>.input_check>span>img{
		margin-left: 20px;
		margin-top: 10px;
	}
	ul>li>.car_list_top>.car_list_t_r>p.ico_del{
		margin-right: 20px;
		margin-top: 10px;
	}
	ul>li>.car_list_center{
		display: flex;
		justify-content: flex-start;		
	}
	ul>li>.car_list_center>.car_list_c_l>img{
		display: block;
		width: 140px;
		height: 140px;
		object-fit: cover;
	}
	ul>li>.car_list_center>.car_list_c_r{
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}
	ul>li>.car_list_center>.car_list_c_r>p:nth-child(1){
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	ul>li>.car_list_center>.car_list_c_r>.goods_intor{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}
	ul>li>.car_list_center>.car_list_c_r>.goods_intor>.select_num_input{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	ul>li>.car_list_center>.car_list_c_r>.goods_intor>.select_num_input>input{
		text-align: center;
		width: 37px;
		height: 25px;
		border: none;
		outline: none;
	}
	ul>li>.car_list_center>.car_list_c_r>.goods_intor>span{
		display: flex;
		justify-content:center;
		align-items: center;
		
	}
	ul>li>.car_list_center>.car_list_c_r>.goods_intor>span:active{
		opacity: .5;
	}
	ul>li>.car_list_center>.car_list_c_r>.goods_intor>.mint-button{
		width: 60px;
		text-align: center;
		background: none;
		margin: 2px;
	}
	.shop_car_body>.car_footer{
		width: 100%;
		border-top: 2px rgb(218, 215, 215) solid;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #fff;
		height: 80px;
		font-size: 14px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.shop_car_body>.car_footer>.car_footer_l{
		font-size: 16px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.shop_car_body>.car_footer>.car_footer_l>p{
		margin-left: 20px;
	}
	.shop_car_body>.car_footer>.car_footer_l>span{
		display: block;
		width: 36px;
		height: 36px;
		background-size: 36px 36px;
	}
	.shop_car_body>.car_footer>.car_footer_r{
		
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.shop_car_body>.car_footer>.car_footer_r>span{
		text-align: center;
		display: block;
		margin-right: 60px;
		font-size: 16px;
	}
	.shop_car_body>.car_footer>.car_footer_r>p{
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		height: 35px;
		padding: 0px 20px;
		border-radius: 30px;
		background: linear-gradient(45deg,#ff6924,#fe8701);
	} 
	
 </style>
 