<template>
  <div class="detail">
    <!-- 顶部导航栏 -->
    <header class="header">
      <mt-header title="乳脂">
        <router-link slot="left" to="/ify"> 
          <mt-button icon="back"></mt-button>
        </router-link>
          <mt-button icon="more" slot="right"></mt-button> 
      </mt-header>
    </header>
    <!-- 正文 -->
    <div class="pinzhong">      
        <div id="part1">
          <router-link :to="{path:'/Page', query:{ cid: t.cid}}" v-for="(t,i) of classfont" :key="i" class="d2">
          <div class="img1 moodsd"> 
            <img class="imgsize" :src="t.img_a">
            <p class="f10 wcenter text">{{t.title}}</p>
            <div class="wcenter red price">
            <span class="price">￥{{t.discount_prices}}</span>
            <del>￥{{t.price}}</del>
            </div>
          </div>
          </router-link>
        </div>
    </div>
  </div>
</template>
<style>
.detail header.mint-header {
  background-color: pink;
  color: white;
  font-size: 18px;
  margin-bottom: 8px;
}
.detail p{
  text-align: center;
  font-size: 20px;
  margin-bottom: 8px;
}
.d2{
  width: 50%;
}
.detail #part1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 7.5px;
  padding-right: 7.5px;
  }
.detail img {
  width: 95%;
  height: 171px;
  margin:0px 10px;
  text-align: center;
}
.detail del {
  color: #808080;
  text-align: center;
}
.detail .price {
  color: red;
  text-align: center;
  font-size: 15px;
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

