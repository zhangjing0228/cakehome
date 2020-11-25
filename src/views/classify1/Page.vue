<template>
  <div>

     <!-- 顶部导航栏 -->
    <mt-header :title=header.title fixed>
      <div slot="left">
        <router-link to="/ify">
        <mt-button icon="back"></mt-button>
        </router-link>
      </div>
    </mt-header>
    <!-- 轮播图 -->
    <div class="swipe">
      <mt-swipe :auto="5000" :show-indicators="false">
        <mt-swipe-item><img :src="header.img_a"></mt-swipe-item>
        <mt-swipe-item><img :src="header.img_b"></mt-swipe-item>
        <mt-swipe-item><img :src="header.img_c"></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 详情页 -->
    <!-- 蛋糕名称配送 -->
    <div class="taxon">
      <span>{{header.title}}</span>
      <span>专人配送</span>
      <span>门店自提</span>
    </div>
    <!-- 蛋糕详情介绍+价格 -->
    <div class="taxond">
      <p>{{header.details}}</p>
    </div>
    <div class="price">
      <span >￥{{header.discount_prices}}</span>
      <del>￥{{header.price}}</del>
    </div>
    <!-- 空线条 -->
    <div class="air"></div>
    <!-- 规格 -->
    <div class="spec">
      <span>规格</span>
      <span>已选择6号水果+布丁&nbsp;</span>
      <span>></span>
    </div>
    <!-- 空线条 -->
    <div class="air"></div>
    <!-- 店家名称 -->
    <div class="buck">
      <div>
        <img src="../../assets/yangjian.img/brand_img/timg1.jpg">
      </div>
      <div>
        <span>爱慕蛋糕</span>
        <p class="taxond">品味美好生活</p>
      </div>
    </div>
    <!-- 配送介绍 -->
    <div class="dc">
      <span class="taxond">配送</span>
      <span>市区免费配送</span>
    </div>
    <!-- 空线条 -->
    <div class="air"></div>
    <!-- 评价详情 -->
    <div class="appraise">
      <span class="taxond">评价</span>
      <span>综合评分 &nbsp;
        <span class="red">5</span>
      </span>
      <span class="taxond">查看全部评价&nbsp;
        <span>></span>
      </span>
    </div>
    <!-- 图文详情 -->
    <div class="taxond imgs">图文详情</div>
    <div class="imged m">
      <div>
        <img :src="header.details_img_a">
        <img :src="header.details_img_b">
        <img :src="header.details_img_c">
        <div v-for="(t,i) of imgsss" :key="i">
          <img :src="t">
        </div>
      </div>
    </div>
    <!-- 底部选项卡 -->
    <mt-tabbar fixed>
      <mt-tab-item>收藏
        <img src="../../assets/yangjian.img/mt-tab/041星星.svg" slot="icon">
      </mt-tab-item>
      <mt-tab-item>咨询
        <img src="../../assets/yangjian.img/mt-tab/咨询.svg" slot="icon">
      </mt-tab-item>
      <mt-tab-item class="reder"><span >加入购物车</span></mt-tab-item>
    </mt-tabbar>



  </div>
</template>
<script>
export default {
  data() {
    return {
      imgsss: [
        require("../../assets/yangjian.img/image-text/1605190807(567).jpg"),
        require("../../assets/yangjian.img/image-text/1605190807(11).jpg"),
        require("../../assets/yangjian.img/image-text/1605190807(9).jpg"),
        require("../../assets/yangjian.img/image-text/1605190807(10).jpg")
      ],
      header: ""
    };
  },
  mounted() {
    let cid = this.$route.query.cid;
    console.log(cid + "oo");
    this.axios.get("/page?cid=" + cid).then(res => {
      console.log(res.data.result);
      this.header = res.data.result[0];
    });
  }
};
</script>
<style scoped>
.m {
  margin: 10px;
}
p,
body,
span,
h1,
h2,
h3,
h4,
h5,
h6,
div {
  margin: 0;
  padding: 0;
}

/* 顶部导航栏样式 */
.mint-header {
  background-color: #ffc0cb;
  color: #fff;
  font-size: 15px;
  height: 40px;
}
/* 轮播图高度 */
.swipe {
  height: 420px;
  margin-top: 40px;
}
.swipe img {
  width: 100%;
  height: 100%;
}
/* 详情页样式 */
.taxon {
  margin: 12px;
}
.taxon :first-child {
  font-size: 18px;
  color: rgb(35, 49, 45);
}
.taxon :not(:first-child) {
  color: #fff;
  background-color: rgb(102, 216, 214);
  font-size: 14px;
  padding: 0 5px 0 5px;
  border-radius: 4px;
  margin-right: 5px;
}
.taxond {
  font-size: 15px;
  font-weight: 500;
  color: rgb(187, 187, 187);
  margin-left: 10px;
}
.price {
  font-size: 22px;
  margin: 10px 10px 10px 10px;
  font-weight: 600;
  color: rgb(244, 66, 54);
}
.price :last-child {
  margin-left: 15px;
  font-size: 18px;
  color: rgb(187, 187, 187);
}
.air {
  height: 12px;
  background-color: rgb(249, 249, 249);
}
.spec {
  padding: 18px 0;
}
.spec :first-child {
  margin-right: 28px;
  margin-left: 15px;
  color: rgb(187, 187, 187);
  font-size: 15px;
}
.spec :nth-child(2) {
  font-size: 15px;
}
.spec :nth-child(3) {
  margin-left: 135px;
  color: rgb(187, 187, 187);
  font-weight: bolder;
}
/* 店家详情页样式 */
.buck {
  padding: 10px;
  display: flex;
}
.buck :first-child {
  margin-right: 4px;
}
.buck img {
  width: 50px;
  height: 50px;
}
.buck span {
  font-size: 15px;
  font-weight: 400;
}
.buck p {
  padding-top: 8px;
}
.dc {
  margin: 24px 0 10px 0px;
}
.dc :last-child {
  margin-left: 24px;
  font-size: 15px;
}
.appraise {
  padding: 15px 0;
  font-size: 15px;
  border: 1px;
  border-bottom: 1px solid rgb(200, 200, 200);
}
.appraise :first-child {
  margin-right: 24px;
}
.appraise :last-child {
  margin-right: 40px;
}
.red {
  color: rgb(244, 66, 54);
}
/* 图文样式 */
.imgs {
  margin-top: 24px;
}
.imged {
  margin-bottom: 56px;
}
.imged img {
  width: 355px;
  height: 100%;
}
/* 底部选项卡 */
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
  color: rgb(102, 102, 102);
  border-top: 1px solid rgb(200, 200, 200);
  border-right: 1px solid rgb(200, 200, 200);
  font-size: 60px;
}
.mint-tab-item-label {
  color: red;
}
.mint-tab-item-label span {
  font-size: 18px;
  color: #eee !important;
  margin-top: 5px;
}
.reder {
  background-color: rgb(255, 57, 57) !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.page .mint-tab-item-label {
  margin: 5px 0;
}
</style>