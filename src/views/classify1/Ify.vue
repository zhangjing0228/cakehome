<template>
  <div class="sort">
    <!-- 左边导航栏 -->
    <div class="left">
   <mt-navbar class="navbar" v-model="classify">
    <mt-tab-item id="1">人气推荐</mt-tab-item>
    <mt-tab-item id="2">按品牌</mt-tab-item>
    <mt-tab-item id="3">按口味</mt-tab-item>
    <mt-tab-item id="4">按人群</mt-tab-item>
   </mt-navbar>
   </div>
   <!-- 右边选择分栏 -->
   <div class="right">
<!-- 面板区域开始 -->
<p class="roof">------按口味------</p>
<mt-tab-container v-model="classify">
  <!-- 人气推荐面板 -->

  <mt-tab-container-item id="1" >
    <div id="moods">
<router-link to="/page">
    <div class="img1 moodsd">
      <img class="imgsize" src="../../assets/yangjian.img/moods_img/timg1.jpg">
      <p class="f10 wcenter text">旋转木马【音乐盒】<p>
      <p class="wcenter red">￥188</p>
    </div>
</router-link>






    </div>
  </mt-tab-container-item>
  <!-- 按品牌面板 -->
  <mt-tab-container-item id="2">
    <div class="brand">

<router-link to='/'>
<div class="brand1">
<img src="../../assets/yangjian.img/brand_img/timg.jpg">
<p class="wcenter f10">元祖食品</p>
</div>
</router-link>






  
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3"></mt-tab-container-item>
  <mt-tab-container-item id="4"></mt-tab-container-item>
</mt-tab-container>
   </div>
  </div>
</template>

<style>
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

.sort {
  display: flex;
}

.left {
  width: 25%;
  border-top: 1px solid rgb(200, 200, 200);
}
.mint-navbar {
  display: block;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0px;
  border-left: 2px red solid;
  color: rgb(42, 42, 42);
}
.mint-tab-item.is-selected {
  padding: 0px;
}
.mint-tab-item-label {
  margin-bottom: 20px;
  margin-top: 15px;
  font-size: 15px;
  margin-left: 0;
}
.mint-tab-item {
  color: rgb(102, 102, 102);
}

.right {
  position: relative;
  width: 100%;
  border: 1px solid rgb(200, 200, 200);
  border-right: 0;
  border-bottom: 0;
}
.roof {
  text-align: center;
  font-size: 13px;
  color: rgb(122, 119, 119);
  font-weight: 600;
  margin: 15px;
}

/* 人气推荐图片样式 */
#moods {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 7.5px;
  padding-right: 7.5px;
}
.imgsize {
  width: 120px;
  height: 120px;
}
.f10 {
  font-size: 13px;
}
.wcenter {
  text-align: center;
}
.red {
  color: rgb(255, 60, 60);
}
.text {
  margin-top: 3px;
  color: rgb(102, 102, 102);
}
.img1 {
  margin-bottom: 25px;
}

/* 按品牌 样式 */
.brand {
  display: flex;
  flex-wrap: wrap;
}
.brand1 {
  width: 88px;
  height: 88px;
  border: 1px solid rgb(200, 200, 200);
  margin: 0 0 8px 8px;
}
.brand1 img {
  height: 75%;
  width: 100%;
}
.brand1 p {
  color: rgb(102, 102, 102);
}
</style>

<script>
export default {
  data() {
    return {
      classify: "1"
    };
  }
};
</script>