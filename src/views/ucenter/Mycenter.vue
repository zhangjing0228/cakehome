<template>
<!-- 顶部选项卡 -->
<div>
<mt-header class="header" title="个人中心">
   <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<!-- 顶部选项卡结束 -->
  <!-- 登录注册 -->
  <img class="img1" src="../../assets/images/background/u=2661726564,2798034088&fm=26&gp=0.jpg" alt="">
   <img @click="login" class="img2" src="../../assets/images/background/login.png" alt="">
  <!-- 登录注册结束 -->
   <mt-cell title="查看订单" value="查看全部" is-link></mt-cell>
   <div>
   <mt-navbar v-model="active">
  <mt-tab-item id="1">
    <img src="../../assets/images/background/daifukuan.png" alt="" slot="icon">待付款
  </mt-tab-item>
  <mt-tab-item id="2">
      <img src="../../assets/images/background/daifahuo.png" alt="" slot="icon">待发货
  </mt-tab-item>
  <mt-tab-item id="3">
      <img src="../../assets/images/background/daishouhuo.png" alt="" slot="icon">待收货
  </mt-tab-item>
  <mt-tab-item id="4">
      <img src="../../assets/images/background/daifukuan.png" alt="" slot="icon">待评价
  </mt-tab-item>
</mt-navbar>
</div>
  <div>
  <mt-cell title="我的收藏" is-link></mt-cell>
  <mt-cell title="优惠券" is-link></mt-cell>
  <mt-cell title="地址管理" is-link></mt-cell>
  <mt-cell title="意见反馈" is-link></mt-cell>
  <mt-cell title="退出/注销" is-link></mt-cell>
  </div>
</div>
</template>
<style scoped>
 
.img1{
  width:100%;
  height:169.72px;
  position: relative;
  overflow: hidden;
}
.img2{
  position: absolute;
  top:84.86px;
  left:35px;
}
.mint-navbar .mint-tab-item.is-selected{
   border-bottom:none !important;
   color: #000 !important;
}
</style>

<script>
export default {
  data(){
    return {
    active: "1"
    }
  },
  methods:{
    login(){
    this.$router.push('/login')
    }
  }
};
</script>