<template>
  <div>
      <div>
        <mt-header title="收银台" >
        <router-link to="/cart" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/dingdan" slot="right">
          <mt-button style="font-size:16px">订单中心</mt-button>
        </router-link>
        </mt-header>
      </div>  
    <!-- 顶部结束 -->
    <!-- 价格开始 -->
      <div class="price">
        <div class="price-total">￥234.00</div>
      </div>
    <!-- 价格结束 -->
    <!-- 支付方式开始 -->
    <div class="pay">
    <ul class="pay-change">
      <li>
        <a href="javascript:;">
           <img src="../../assets/imgs/资金支付通道.png" alt="">
           <span>支付方式</span>
        </a>
        
       </li>
      <li>
        <a href="javascript:;">
          <img src="../../assets/imgs/建设银行.png" alt="">
          建设银行储蓄卡
        </a>
         <a href="javascript:;">
           <span class="input_check" :class="{'selector-active': checked}" @click="active" >
             <img src="../../assets/imgs/tick.svg" alt="">
          </span>
        </a>
      </li>
      <li>
       
        <a href="javascript:;">
           <img src="../../assets/imgs/QQ.png" alt="">
          qq钱包支付
        </a>
         <a href="javascript:;">
           <span class="input_check" :class="{'selector-active': checked}" @click="active" >
             <img src="../../assets/imgs/tick.svg" alt="">
          </span>
        </a>
      </li>
      <li>
        
        <a href="javascript:;">
          <img src="../../assets/imgs/微信支付.png" alt="">
          微信支付
        </a>
         <a href="javascript:;">
           <span class="input_check" :class="{'selector-active': checked}" @click="active(index)" >
             <img src="../../assets/imgs/tick.svg" alt="">
          </span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../../assets/imgs/支付宝.png" alt="">
        支付宝支付
        </a>
         <a href="javascript:;">
           <span class="input_check" :class="{'selector-active': checked}" @click="active" >
             <img src="../../assets/imgs/tick.svg" alt="">
          </span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
        <img src="../../assets/imgs/银行卡.png" alt="">
          使用新卡支付
        </a>
         <a href="javascript:;">
           <span class="input_check" :class="{'selector-active': checked}" @click="active" >
             <img src="../../assets/imgs/tick.svg" alt="">
          </span>
        </a>
      </li>
    </ul>
    </div>
     <mt-tabbar>
      <mt-tab-item>
        <a href="">
          银行卡支付￥234.00
        </a>
      </mt-tab-item>
    </mt-tabbar>
    <!-- 支付方式结束 -->
   
  </div>

</template>

<style  scoped>
    body{
      margin: 0;
      padding: 0;
    }
    .pay{
      position: relative;
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
 .price{
   margin-top: 80px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
  }
  .price>.price-total{
     color: red;
     font-size: 26px;
     font-weight: border;
  }
  .pay-change{
    margin-top:150px;
    width: 100%;
    position: absolute;
    justify-content: center;
  }
  .pay-change>li{
    margin-bottom: 20px;
    line-height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input_check{
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
  .pay-change>li:first-child{
    background: linear-gradient(45deg,#f8f7f6,#f7c6ce);
  }
   .pay-change>li>a:last-child{
     margin-right: 20px;
   }
   .pay-change>li+li{
     border-bottom:1px solid rgb(236, 230, 230);
   }
   .button{
     margin-top: 600px;
     width: 90%;
     margin-left: 20px;
     text-align: center;
     color: white;
     font-size: 16px;
     border:none;
     border-radius: 20px;
     background-color: rgb(247, 44, 17);
     padding: 5px;
   }
   .button>a{
     color: white;
   }
   .mint-tabbar>.mint-tab-item.is-selected{
     margin-left: 20px;
     color: white;
     border:none;
     border-radius: 20px;
     background-color: rgb(247, 44, 17);
     padding: 15px;

   }
   .mint-tabbar .mint-tab-item-label>a{
     font-size: 14px;
     color: white;
   }
</style>

<script>
import Cart from './Cart'
import Dingdan from './Dingdan.vue'
export default {
  data(){
    return{
      checked:false,
    }
  },
  methods:{
    active(index){
      if(this.checked){
          this.checked=!this.checked
      }else{
        this.checked=true;
      }
    }
  },
}
</script>