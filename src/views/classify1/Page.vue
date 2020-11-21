<template>
  <div class="page">
    <!-- 顶部导航栏 -->
    <mt-header :title=header.title fixed>
      <div slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
  <!-- 轮播图 -->
  <div class="swipe">
    <mt-swipe :auto="5000" :show-indicators="false" v-for="(t,i) of wipes" :key="i">
      <mt-swipe-item><img :src="t.img_a"></mt-swipe-item>
      <mt-swipe-item><img :src="t.img_b"></mt-swipe-item>
      <mt-swipe-item><img :src="t.img_c"></mt-swipe-item>
    </mt-swipe>
  </div>

<!-- 详情页开始 -->
  <div class="taxon">
    <span>{{header.title}}</span>
    <span>专人配送</span>
    <span>门店自提</span>
  </div>
  <div class="taxond">
    <p>{{header.details}}</p>
  </div>
  <div class="price">
    <span >￥{{header.discount_prices}}</span>
    <del>￥{{header.price}}</del>  
  </div>
  <div class="air"></div>
  <div class="spec">
    <span>规格</span>
    <span>已选择6号水果+布丁&nbsp;</span>
    <span>></span>
  </div>
  <div class="air"></div>
  <!-- 店家介绍-->
  <div class="buck">
    <div>
      <img src="../../assets/yangjian.img/brand_img/timg1.jpg">
    </div>
    <div>
      <span>爱慕蛋糕</span>
      <p class="taxond">品味美好生活</p>
    </div>
  </div>
  <div class="dc">
    <span class="taxond">配送</span>
    <span>市区免费配送</span>
  </div>
  <div class="air"></div>
  <div class="appraise">
    <span class="taxond">评价</span>
    <span>综合评分 &nbsp;<span class="red">5</span></span>
    <span class="taxond">查看全部评价&nbsp;<span>></span></span>
  </div>
<!-- 图文详情 -->
  <div class="taxond imgs">图文详情</div>
  <div class="imged m">
    <div v-for="(t,i) of wipes " :key="i">
      <img :src="t.details_img_a">
      <img :src="t.details_img_b">
      <img :src="t.details_img_c">
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
    <mt-tab-item class="reder"><span >立即订购</span></mt-tab-item>
    </mt-tabbar>
  </div> 
</template>

<style >
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
.page .mint-header {
  background-color: #fff;
  color: #000;
  font-size: 15px;
  height: 40px;
}
/* 轮播图高度 */
.page .swipe {
  height: 420px;
  margin-top: 40px;
}
.page .swipe img {
  width: 100%;
}
/* 详情页样式 */
.page .taxon {
  margin: 12px;
}
.page .taxon :first-child {
  font-size: 18px;
  color: rgb(35, 49, 45);
}
.page .taxon :not(:first-child) {
  color: #fff;
  background-color: rgb(102, 216, 214);
  font-size: 14px;
  padding: 0 5px 0 5px;
  border-radius: 4px;
  margin-right: 5px;
}
.page .taxond {
  font-size: 15px;
  font-weight: 500;
  color: rgb(187, 187, 187);
  margin-left: 10px;
}
.page .price {
  font-size: 22px;
  margin: 10px 10px 10px 10px;
  font-weight: 600;
  color: rgb(244, 66, 54);
}
.page .price :last-child {
  margin-left: 15px;
  font-size: 18px;
  color: rgb(187, 187, 187);
}
.page .air {
  height: 12px;
  background-color: rgb(249, 249, 248);
}
.page .spec {
  padding: 18px 0;
}
.page .spec :first-child {
  margin-right: 28px;
  margin-left: 15px;
  color: rgb(187, 187, 187);
  font-size: 15px;
}
.page .spec :nth-child(2) {
  font-size: 15px;
}
.page .spec :nth-child(3) {
  margin-left: 135px;
  color: rgb(187, 187, 187);
  font-weight: bolder;
}
/* 店家详情页样式 */
.page .buck {
  padding: 10px;
  display: flex;
}
.page .buck :first-child {
  margin-right: 4px;
}
.page .buck img {
  width: 50px;
  height: 50px;
}
.page .buck span {
  font-size: 15px;
  font-weight: 400;
}
.page .buck p {
  padding-top: 8px;
}
.page .dc {
  margin: 24px 0 10px 0px;
}
.page .dc :last-child {
  margin-left: 24px;
  font-size: 15px;
}
.page .appraise {
  padding: 15px 0;
  font-size: 15px;
  border: 1px;
  border-bottom: 1px solid rgb(200, 200, 200);
}
.page .appraise :first-child {
  margin-right: 24px;
}
.page .appraise :last-child {
  margin-right: 40px;
}
.page .red {
  color: rgb(244, 66, 54);
}
/* 图文样式 */
.page .imgs {
  margin-top: 24px;
}
.page .imged {
  margin-bottom: 56px;
}
.page .imged img {
  width: 355px;
  height: 100%;
}
/* 底部选项卡 */
.page .mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
  color: rgb(102, 102, 102);
  border-top: 1px solid rgb(200, 200, 200);
  border-right: 1px solid rgb(200, 200, 200);
  font-size: 60px;
}
.page .mint-tab-item-label span {
  font-size: 22px;
  color: #eee !important;
  margin: 5px 0;
}
.page .reder {
  background-color: rgb(255, 57, 57) !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.page .mint-tab-item-label {
  margin: 5px 0;
}
</style>
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
      wipes: "",
      header: ""
    };
  },
  mounted() {
    let cid = this.$route.query.cid;
    // console.log(cid);
    this.axios.get("/page?cid=" + cid).then(res => {
      console.log(res.data.result);
      this.wipes = res.data.result;
      this.header = res.data.result[0];
    });
  }
};
</script>

