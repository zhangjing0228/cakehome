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
          <img class="img" :src="n.pic" @click="swiper" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 优惠券 -->
    <div class="yhj" @click="yhj()">
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
    <div class="yhj1" @click="yhj1">
      <img src="../../assets/mage/yhj1.png" alt="">
    </div>
    <!-- 品牌 -->
    <div class="pp">
      <p>品牌馆</p>
      <p>Brand Library</p>
      <div @click="brand1()">
        <div><img src="../../assets/mage/pp1.jpg" alt=""></div>
      </div>
      <div @click="brand2()">
        <div><img src="../../assets/mage/pp2.png" alt=""></div>
      </div>
      <div @click="brand3()">
        <div><img src="../../assets/mage/pp3.png" alt=""></div>
      </div>
      <div @click="brand4()">
        <div><img src="../../assets/mage/pp4.jpg" alt=""></div>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="rqtj">
      <p>人气推荐</p>
      <p>Target Recommended</p>
      <div>
        <div @click="sar()"><img src="../../assets/mage/rqtj1.png" alt=""></div>
        <div @click="szb()"><img src="../../assets/mage/rqtj2.png" alt=""></div>
        <div @click="sxpy()"><img src="../../assets/mage/rqtj3.png" alt=""></div>
      </div>
    </div>
    <!-- 热卖精选 -->
    <div class="rmjx">
      <div>-热卖精选-</div>
      <div v-for="(item,index) of cate" :key="index">
        <router-link :to="`/page?cid=${item.cid}`">
          <div><img :src="item.img_a" alt=""/></div>
          <div>{{item.title}}</div>
          <div>{{item.details}}</div>
          <div><span>￥{{item.discount_prices}}</span> <del>￥{{item.price}}</del> </div>
        </router-link>
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
        <mt-tab-item id="wd" href="/mycenter">
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
  margin-left: 20%;
}
.sousuo>div:first-child>input{
  border: 2px solid #ffc0cb;
  height: 25px;
  width: 100%;
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
  width: 100%;
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
  width: 80%;
  margin:10px 10%;
  border-radius: 10px 
}
.yhj1>img{
  width: 100%;
}
.xx>div{
  text-align: center;
  width: 18%;
  height: 80px;
  float: left;
  color:#b3b3b3;
  margin-left:5%;
  font-size: 12px;
}
.xx>div>img{
  width: 100%;
  height: 50px;
  margin-bottom: 4px;
}
.pp>p:first-child{
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  margin-top: 30px;
}
.pp>p:nth-child(2){
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
  color: #b3b3b3;
}
.pp>div>div{
  width: 48%;
  float: left;
  margin-top: 20px;
  margin-left: 1%x;
}
.pp>div>div>img{
  width: 100%;
  height: 79px;
}
.rqtj>p:first-child{
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  margin-top: 140px;
}
.rqtj>p:nth-child(2){
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 10px auto;
  color: #b3b3b3;
}
.rqtj>div>div{
  float: left;
  margin-top: 1px;
}
.rqtj>div>div:first-child{
  width: 44%;
}
.rqtj>div>div:first-child>img{
  height: 186px;
  width: 100%;
}
.rqtj>div>div:not(:first-child){
  width: 54%;
  margin-left: 1%;
}
.rqtj>div>div:not(:first-child)>img{
  height: 91px;
  width: 100%;
}
.rqtj>div>div:last-child{
  margin-bottom: 25px
}
.rmjx>div:first-child{
  font-size: 36px;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
}
.rmjx>div:not(:first-child)>a>div>img{
  width: 100%;
  height: 160px;
}
.rmjx>div:not(:first-child){
  width: 49%;
  float: left;
  margin-left: 1%;
}
.rmjx>div:not(:first-child)>a>div{
  width: 100%;
  float: left;
  text-align: center;
  margin-top: 5px;
  color: #b3b3b3;
}
.rmjx>div:not(:first-child)>a>:last-child{
  margin-top: 10px;
}
.rmjx>div:not(:first-child)>a>div:nth-child(2){
  color: #000000a3;
  font-weight: 600;
}
.rmjx>div:not(:first-child)>a>div:last-child>span{
  color:#ec6868;
  font-size: 19px;
}
.rmjx>div:last-child>a>div:last-child{
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
      selectedTab:'sy',
      indexSwiper:'',
      cate:[],
      brand:[],
    }
  },
  mounted(){
    this.axios.get('/flower').then((res)=>{
      this.indexSwiper = res.data.results;
    })
    this.axios.get('/index').then(res=>{
      this.cate=res.data;     
    })
    this.axios.get('/brand').then(res=>{
      this.brand=res.data;
    })
  },
  methods:{
    swiper(){
      this.$router.push('/classlist/康乃馨花束')
    },
    sar(){
      this.$router.push('/detail')
    },
    szb(){
      this.$router.push('/detail')
    },
    sxpy(){
      this.$router.push('/detail')
    },
    brand1(){
      this.$router.push('/flower')
    },
    brand2(){
      this.$router.push('/flower')
    },
    brand3(){
      this.$router.push('/flower')
    },
    brand4(){
      this.$router.push('/flower')
    },
    yhj(){
      this.$router.push('/coupon')
    },
    yhj1(){
      this.$router.push('/page?cid=8')
    },
  }
};
</script>