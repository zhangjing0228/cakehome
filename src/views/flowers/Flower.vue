<template>
  <div id="flower">
    <!-- 顶部导航开始 -->
    <mt-header class="flowertitle" title="最美鲜花预定"> </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 轮播图开始 -->
    <mt-swipe class="swiper">
      <mt-swipe-item v-for="(n, i) of flowerbanners" :key="i">
        <img class="img" :src="n.pic" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 轮播图结束 -->
    <!-- 领券开始 -->
    <div class="lqbtn" @click="discounts">
      <span>全国鲜花3小时配送,新人订花立减100元</span>
    </div>
    <!-- 领券结束 -->
    <!-- 鲜花分类开始 -->
    <div>
      <div class="biaoti">
        <h4>鲜花分类</h4>
        <p>Flower classification</p>
      </div>
      <ul class="flowerclass">
        <li class="flowerclass-item" v-for="(n, i) of flowerclass" :key="i">
          <router-link :to="`/classlist/${n.category}`">
            <div>
              <p>{{ n.category }}</p>
              <span>{{ n.detail }}</span>
            </div>
            <img :src="n.categoryimg" alt="" />
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 鲜花分类结束 -->
    <!-- 人气热卖开始 -->
    <div class="rqrm">－<span>人气热卖</span>－</div>
    <ul class="selling-list">
      <li class="selling-listitem" v-for="(n, i) of flower" :key="i">
        <router-link :to="`/flowerdetail/${n.fid}`">
          <div>
            <img :src="n.img" alt="" />
          </div>
          <p class="p1">{{ n.title }}</p>
          <p class="p2">
            <span>¥{{ n.price }}</span
            ><s>¥{{ n.price1 }}</s>
          </p>
        </router-link>
      </li>
    </ul>
    <!-- 人气热卖结束 -->
    
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

<script>
export default {
  data() {
    return {
      selectedTab:'xh',
      flowerbanners: "",
      flowerclass: "",
      flower: "",
    };
  },
  methods: {
    discounts() {
      this.$router.push("/discounts");
    },
    classlist(a) {},
  },
  mounted() {
    this.axios.get("/flower").then((res) => {
      console.log(res.data);
      this.flowerbanners = res.data.results;
      this.flowerclass = res.data.result;
      this.flower = res.data.data;
    });
  },
};
</script>

<style>
#flower .mint-header{
  background-color:#ffc0cb;
  color: #fff; 
}
.flowertitle {
  background: rgba(161, 46, 46, 0.349);
  color: black;
}
.img {
  width: 100%;
  height: 100%;
}
.swiper {
  height: 180px;
  width: 100%;
}
.lqbtn {
  text-align: center;
  margin: 15px 0;
}
.lqbtn > span {
  background: #ffc0cb;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  color: #ff5f1c;
}
.biaoti {
  text-align: center;
}
.biaoti h4 {
  font-size: 20px;
  color: #ff5f1c;
}
.biaoti p {
  color: #ff5f1c;
  font-family: "Palace Script MT";
  font-size: 24px;
}
.flowerclass {
  margin: 5px 0;
  padding-left: 0.5%;
  padding-right: 0.5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.flowerclass-item {
  margin-top: 3px;
  width: 32.5%;
}
.flowerclass-item a {
  display: flex;
  justify-content: space-between;
  color: #ffc0cb;
}
.flowerclass-item img {
  width: 50px;
  height: 50px;
}
.flowerclass-item span {
  font-size: 8px;
}
.rqrm {
  text-align: center;
  margin: 30px 0;
  font-size: 20px;
  font-weight: 900;
}
.selling-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0.5%;
  padding-right: 0.5%;
}
.selling-listitem {
  width: 49%;
  height: 16rem;
  text-align: center;
  background: #eee;
  padding-bottom: 15px;
  margin-bottom: 5px;
}
.selling-listitem div {
  height: 75%;
}
.selling-listitem img {
  width: 100%;
  height: 100%;
}
.p1 {
  font-size: 20px;
  margin: 8px;
}
.p2 span {
  color: #ff5f1c;
  margin-right: 10px;
}
#flower .mint-tabbar>.mint-tab-item.is-selected{
  color: #ffc0cb;
}
#flower .mint-tab-item{
  color:#B3B3B3;
}
#flower .selling-list>li:last-child{
  margin-bottom: 70px;
}
</style>