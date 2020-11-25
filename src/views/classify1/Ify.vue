<template>
  <div id="ify">
    <mt-header class="index-header" title="欢迎来到蛋糕之家" fixed> </mt-header>
    <div class="sort">
    <!-- 左边导航栏 -->
    <div class="left" style="position:fixed;margin:41px 0">
   <mt-navbar class="navbar" v-model="classabc">
    <mt-tab-item id="1">人气推荐</mt-tab-item>
    <mt-tab-item id="2">按品牌</mt-tab-item> 
    <mt-tab-item id="3">按口味</mt-tab-item>
    <mt-tab-item id="4">按人群</mt-tab-item>
   </mt-navbar>
   </div>
   <!-- 右边选择分栏 -->
   <div class="right" style="margin:41px 0 55px 24%">
<!-- 面板区域开始 -->
<mt-tab-container v-model="classabc">
  <!-- 人气推荐面板 -->

  <mt-tab-container-item id="1" >
    <p class="roof">————人气推荐———</p>
    <div id="moods">
<div v-for="(t,i) of classfont" :key="i" @click="show(t.cid)">
    <div class="img1 moodsd">
      <img class="imgsize" :src="t.img_a">
      <p class="f10 wcenter text">{{t.title}}</p>
      <div class="wcenter red price">
      <span >￥{{t.discount_prices}}</span>
      <del>￥{{t.price}}</del>
      </div>
    </div>
    </div> 







    </div>
  </mt-tab-container-item>
  <!-- 按品牌面板 -->
  <mt-tab-container-item id="2">
    <p class="roof">————按品牌———</p>
    <div class="brand">

<router-link to='/' v-for="(t,i) of classwill" :key="i">
<div class="brand1" >
<img :src="t.brand_img">
<p class="wcenter f10">{{t.brand}}</p>
</div>
</router-link>
<div class="filler"></div>






  
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <p class="roof">————按口味———</p>
    <div id="moods">
    <div class="kouwei">
        <div class="ruzhixq">
          <router-link to="/totalrenqun">
          <img class="img3" src="../../assets/zjimg/1ruzhi.png">
          <p class="p">乳脂类</p>
          <span>乳脂蛋糕采用进口品牌的优质原料，纯手工精制而成。</span>
          </router-link>
        </div>
        <hr>
        <div>
          <img class="img3" src="../../assets/zjimg/2musi.png">
          <p class="p">慕斯类</p>
          <span>慕斯蛋糕口感和风味的各种辅料，冷冻后食用其味无穷，成为蛋糕中的极品</span>
        </div>
        <hr>
        <div>
          <img class="img3" src="../../assets/zjimg/3shuiguo.png">
          <p class="p">水果类</p>
          <span>浓浓的奶香味与清新甜蜜的水果相搭配出来的浓郁甜美气息，蕴藏着甜蜜浪漫的温馨情怀，奶油的浓郁奶相结合水果的酸甜，恰到好处的口味与口感的结合，让您的感官与知觉完全得到满足。</span>
          <hr>
        </div>
    </div>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
  <p class="roof">————按人群———</p>
    <div class="renqun">
      <div>
       <router-link to="/totalrenqun">
          <img src="../../assets/zjimg/test2.png">
       </router-link> 
      </div>
      <div>
        <router-link to="/totalrenqun">
          <img src="../../assets/zjimg/test22.png">
       </router-link>
      </div>
      <div>
        <router-link to="/totalrenqun">
          <img src="../../assets/zjimg/test23.png">
        </router-link>
      </div>
      <div>
        <router-link to="/totalrenqun">
          <img src="../../assets/zjimg/test24.png">
       </router-link>
      </div>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
   </div>
  </div>
  <!-- 底部 -->   
    <div>
        <mt-tabbar v-model="selectedTab" fixed>
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
        <mt-tab-item id="wd">
          我的
          <img 
            src="../../assets/mage/wd1.png"
            alt=""
            slot="icon"
            v-if="selectedTab == 'wd'"
          />
          <img src="../../assets/mage/wd.png" alt="" slot="icon" v-else />
        </mt-tab-item>
      </mt-tabbar>
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
#ify .mint-tabbar > .mint-tab-item.is-selected {
  color: #ffc0cb;
}
#ify .mint-tab-item {
  color: #b3b3b3;
}
#ify .mint-header {
  background-color: #ffc0cb;
  color: #fff;
}
#sort .mint-header {
  background-color: #ffc0cb;
}

.sort {
  display: flex;
}

.left {
  width: 24%;
  border-top: 1px solid #ffc0cb;
}
.left .mint-navbar {
  display: block;
}
.left .mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0px;
  border-left: 2px solid #ffc0cb;
  margin-bottom: 0;
}
.left .mint-tab-item-label {
  font-size: 15px;
  margin: 55px 0;
}
.left .mint-navbar .mint-tab-item {
  margin: 0;
}
#ify .left .mint-tab-item {
  color: #ffc0cb;
}
.left .mint-tab-item {
  margin-bottom: 15px;
  padding: 0;
  margin-top: 25px;
}
.right {
  width: 100%;
  border: 1px solid #ffc0cb;
  border-right: 0;
  border-bottom: 0;
}
#ify .roof {
  text-align: center;
  font-size: 13px;
  color: #ffc0cb;
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
  color: #b3b3b3;
}
.img1 {
  margin-bottom: 25px;
}
.price {
  margin-top: 5px;
}
.price :last-child {
  color: #b3b3b3;
  font-size: 13px;
  margin-left: 5px;
}
/* 按品牌 样式 */
.brand {
  display: flex;
  flex-wrap: wrap;
}
.brand1 {
  width: 130px;
  height: 88px;
  margin: 5px;
}
.brand1 img {
  height: 75%;
  width: 100%;
}
.brand1 p {
  color: #ffc0cb;
}
.filler {
  height: 600px;
}
/* ============================== */

.ruzhixq a {
  color: black;
  text-decoration: none;
}
.renqun {
  margin-top: 30px;
}
.renqun > div {
  text-align: center;
  margin-bottom: 5px;
}
.kouwei p {
  color: #ffc0cb;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
}
.kouwei span {
  font-size: 15px;
  color: #b3b3b3;
}
/* .kouwei {
  display: flex;
} */
.kouwei:nth-child(2) {
  color: black;
  font-size: 20px;
  text-align: center;
}
.img3 {
  width: 150px;
  margin-left: 5px;
}
.sort {
  display: flex;
}
.roof {
  text-align: center;
  font-size: 13px;
  color: #808080;
}
.kouwei > div {
  text-align: center;
}
hr {
  border: 1px solid #ffc0cb;
}
</style>

<script>
export default {
  data() {
    return {
      selectedTab: "fl",
      classabc: "1",
      classfont: [],
      classwill: []
    };
  },
  methods: {
    show(id) {
      console.log(id);
      this.$router.push("/page?cid=" + id);
    }
  },
  mounted() {
    this.axios.get("/datalis").then(res => {
      this.classfont = res.data.result;
      // console.log(res.data);
    }),
      this.axios.get("/will").then(res => {
        this.classwill = res.data.result;
        // console.log(res.data.result);
      });
  }
};
</script>