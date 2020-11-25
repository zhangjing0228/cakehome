<template>
<!-- 顶部选项卡 -->
<div>
<mt-header class="header" title="个人中心">
</mt-header>
<!-- 顶部选项卡结束 -->
  <!-- 登录注册 --> 
  <div class="login">
    <div>
      <div class="head" v-if="this.$store.state.isLogined == 1"><img src="../../assets/img/backround/head.jpg" alt=""></div>
      <div v-else class="img">&gt;.&lt;</div>
    </div>
    <div @click="login">
      <div v-if="this.$store.state.isLogined == 1">您好,{{this.$store.state.userInfo.username}}<span @click="logout">注销</span></div>
      <div v-else>您好，请登录......,</div>
    </div>
  </div>
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
  <!-- 底部 -->   
    <div>
        <mt-tabbar v-model="selectedTabs" fixed>
        <mt-tab-item id="sy" href="/home">
          首页
          <img
            src="../../assets/mage/sy1.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'sy'"
          />
          <img
            src="../../assets/mage/sy.png"
            alt=""
            slot="icon"
            v-else
          />
        </mt-tab-item>
        <mt-tab-item id="fl" href="/ify">
          分类
          <img
            src="../../assets/mage/fl1.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'fl'"
          />
          <img src="../../assets/mage/fl.png" alt="" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="xh" href="/flower">
          鲜花
          <img
            src="../../assets/mage/xh1.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'xh'"
          />
          <img src="../../assets/mage/xh.png" alt="" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="gwc" href="/cart">
          购物车
          <img
            src="../../assets/mage/gwc1.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'gwc'"
          />
          <img src="../../assets/mage/gwc.png" alt="" slot="icon" v-else />
        </mt-tab-item>
        <mt-tab-item id="wd" href="/mycenter">
          我的
          <img
            src="../../assets/mage/wd.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'wd'"
          />
          <img src="../../assets/mage/wd1.png" alt="" slot="icon" v-else />
        </mt-tab-item>
      </mt-tabbar>
    </div> 
</div>
</template>
<style scoped>
.login{
  width: 100%;
  height: 100px;
  padding: 30px 20px;
}
.img{
  background-color: #ffc0cb;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
.login>:first-child{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
.login>div:not(:first-child){
  width: 250px;
  height: 40px;
  line-height: 60px;
  margin-left: 8px;
  color: #ffc0cb;
}
.head img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.login>div{
  float: left;
}
.mint-header{
  background-color: #ffc0cb;
}
.img1 {
  width: 100%;
  height: 169.72px;
  position: relative;
  overflow: hidden;
}
.img2 {
  position: absolute;
  top: 84.86px;
  left: 35px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: none !important;
  color: #000 !important;
}
.mint-tabbar>.mint-tab-item.is-selected{
  color: #ffc0cb;
}
.mint-tab-item{
  color:#B3B3B3;
}
</style>

<script>
export default {
  data() {
    return {
      selectedTabs:"wd",
      active: "1",
      // 默认被选定的顶部选项卡及面板
      // 默认被选定的顶部选项卡
      selectedTab: "index"
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.commit("logout_mutations");
      localStorage.clear();
    }
  }
};
</script>