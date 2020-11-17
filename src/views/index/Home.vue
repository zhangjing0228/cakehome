<template>
  <div id="index">
    <!-- 顶部 -->
    <mt-header class="index-header" title="欢迎来到蛋糕之家"> </mt-header>
    <!-- 搜索 -->
    <div class="sousuo">
      <div>
        <input type="text" placeholder="请输入要搜索的信息">
      </div>
      <div>
        <button>搜索</button>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="dswiper">
      <mt-swipe class="swiper">
        <mt-swipe-item v-for="(n, i) of indexSwiper" :key="i">
          <img class="img" :src="n.pic" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 优惠券 -->
    <div class="yhj">
      <img src="../../assets/mage/yhj.png" alt="">
    </div>
    <!-- 选项栏 -->
    <div class="xx">
      <div>
        <img src="../../assets/mage/xx1.png" alt="">
        <br>
        <span>创意网红</span>
      </div>
      <div>
        <img src="../../assets/mage/xx2.png" alt="">
        <br>
        <span>当日送达</span>
      </div>
      <div>
        <img src="../../assets/mage/xx3.png" alt="">
        <br>
        <span>热卖商品</span>
      </div>
      <div>
        <img src="../../assets/mage/xx4.png" alt="">
        <br>
        <span>全部商品</span>
      </div>
    </div>
    <!-- 优惠卷2 -->
    <div class="yhj1">
      <img src="../../assets/mage/yhj1.png" alt="">
    </div>
    <!-- 品牌 -->
    <div class="pp">
      <p>品牌馆</p>
      <p>Brand Library</p>
      <div>
        <div><img src="../../assets/mage/pp1.jpg" alt=""></div>
      </div>
      <div>
        <div><img src="../../assets/mage/pp2.jpg" alt=""></div>
      </div>
      <div>
        <div><img src="../../assets/mage/pp3.jpg" alt=""></div>
      </div>
      <div>
        <div><img src="../../assets/mage/pp4.jpg" alt=""></div>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="rqtj">
      <p>人气推荐</p>
      <p>Target Recommended</p>
      <div>
        <div><img src="../../assets/mage/rqtj1.png" alt=""></div>
        <div><img src="../../assets/mage/rqtj2.png" alt=""></div>
        <div><img src="../../assets/mage/rqtj3.png" alt=""></div>
      </div>
    </div>
    <!-- 热卖精选 -->
    <div class="rmjx">
      <div>-热卖精选-</div>
      <div v-for="(item,index) of cate" :key="index">
        <div><img :src="item.img_a" alt=""/></div>
        <div>{{item.title}}</div>
        <div>{{item.details}}</div>
        <div><span>￥{{item.discount_prices}}</span> <del>￥{{item.price}}</del> </div>
      </div>
    </div>
    <!-- 底部 -->   
    <div id="mbutton">
        <mt-tabbar v-model="selectedTab" fixed>
        <mt-tab-item id="sy">
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

<style >
#index .mint-header{
  background-color: #ffc0cb;
}
.sousuo{
  margin: 10px auto;
}
.sousuo>div{
  float: left;
}
.sousuo>div:first-child{
  margin-left: 50px
}
.sousuo>div:first-child>input{
  border: 2px solid #ffc0cb;
  height: 25px;
  width: 180px;
  border-radius: 8px;
  padding-left: 8px;
  outline: none;
}
.sousuo>div:first-child>input::-webkit-input-placeholder{
  color: #ffc0cb;
  font-size: 6px;

}
.sousuo>div:last-child>button{
  border: 0;
  background-color: #ffc0cb;
  color: #fff;
  height: 28px;
  width: 50px;
  border-radius: 8px;
  margin-left: 5px;
}
.dswiper{
   margin-top: 48px;
}
#index .swiper {
  height: 180px;
  width: 100%;
}
.img {
  width: 100%;
  height: 100%;
}
.yhj>img{
  height: 45px;
  width: 275px;
  margin:10px 50px ;
  border-radius: 10px 
}
.yhj1>img{
  width: 375px;
}
.xx>div{
  width: 70px;
  height: 80px;
  float: left;
  color:#b3b3b3;
  margin-left: 20px;
  font-size: 12px;
}
.xx>div>img{
  width: 50px;
  height: 50px;
  margin-bottom: 4px;
}
.pp>p:first-child{
  font-size: 30px;
  font-weight: 900;
  margin-left: 140px;
  margin-top: 30px;
}
.pp>p:nth-child(2){
  font-size: 20px;
  font-weight: 400;
  margin-left: 124px;
  margin-top: 10px;
  color: #b3b3b3;
}
.pp>div>div{
  float: left;
  margin-top: 20px;
}
.pp>div>div>img{
  width: 93px;
  height: 93px;
}
.rqtj>p:first-child{
  font-size: 30px;
  font-weight: 900;
  margin-left: 123px;
  margin-top: 140px;
}
.rqtj>p:nth-child(2){
  font-size: 20px;
  font-weight: 400;
  margin-left: 80px;
  margin-top: 10px;
  color: #b3b3b3;
}
.rqtj>div>div:not(:last-child){
  float: left;
  margin-top: 15px;
}
.rqtj>div>div:first-child>img{
  height: 184px;
  width: 170px;
  margin-right: 1px;
}
.rqtj>div>div:not(:first-child)>img{
  height: 91px;
  width: 197px;
  margin-bottom: -1px;
}
.rmjx>div:first-child{
  font-size: 36px;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 100px;
  margin-bottom: 20px;
}
.rmjx>div:not(:first-child)>div>img{
  width: 180px;
}
.rmjx>div:not(:first-child){
  width: 180px;
  float: left;
  margin-left: 5px;
}
.rmjx>div:not(:first-child)>div{
  width: 180px;
  float: left;
  text-align: center;
  margin-top: 5px;
  color: #b3b3b3;
}
.rmjx>div:not(:first-child)>:last-child{
  margin-top: 10px;
}
.rmjx>div:not(:first-child)>div:nth-child(2){
  color: #000000a3;
  font-weight: 600;
}
.rmjx>div:not(:first-child)>div:last-child>span{
  color:#ec6868;
  font-size: 19px;
}
.rmjx>div:last-child>div:last-child{
  margin-bottom: 80px;
}
#index .mint-tabbar>.mint-tab-item.is-selected{
  color: #ffc0cb;
}
#index .mint-tab-item{
  color:#B3B3B3;
}
</style>

<script>
export default {
  data(){
    return{
      selectedTab:'',
      indexSwiper:'',
      cate:[]
    }
  },
  mounted(){
    this.axios.get('/flower').then((res)=>{
      this.indexSwiper = res.data.results;
    })
    this.axios.get('/index').then(res=>{
      this.cate=res.data;     
      console.log(this.cate)
    })
  }
};
</script>