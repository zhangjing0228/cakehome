<template>
  <div class="home">
      <div style="height:10px">
      <mt-search
          cancel-text="取消"
          placeholder="搜索">
      </mt-search>
      </div>
      <!-- 轮播图开始 -->
        <div style="height:250px">
          <mt-swipe :auto="2000" :show-indicators="false">
            <mt-swipe-item><img src="../../assets/mystyle/1dd162c28c9369d4ee4879eb9d25da5a.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/mystyle/34ff0f5967a38def6ca9c9d87cecefba.jpeg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/mystyle/379979932fa701ba7706a24c27b84fb0.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
      <!-- 轮播图结束-->
      <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item id="1">创意网红</mt-tab-item>
      <mt-tab-item id="2">当日达</mt-tab-item>
      <mt-tab-item id="3">热卖</mt-tab-item>
      <mt-tab-item id="4">全部</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板开始 -->
    <div class="main">
      <mt-tab-container v-model="tab">
        <mt-tab-container-item id="ab">
          <p v-for="(v,k) of 100" :key="k">AA--{{v}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="cd">BB</mt-tab-container-item>
        <mt-tab-container-item id="ef">CC</mt-tab-container-item>
        <mt-tab-container-item id="gh">DD</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板结束 -->


    <!-- 无限滚动 -->
    <div class="main" style="border:2px solid #f00;"
      infinite-scroll-distance="20"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      :infinite-scroll-immediate-check="true">
      <p v-for="(v,k) of n" :key="k">{{v}}</p>
    </div> 
    <!-- 无限滚动结束 -->

      <!-- 底部导航 -->
      <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index">
        首页
        <img src="../../assets/mystyle/index_disabled.png" alt="" slot="icon" v-if="selected == 'index'">
        <img src="../../assets/mystyle/index_enabled.png" alt="" slot="icon" v-else>        
      </mt-tab-item>
      <mt-tab-item id="classify">
       分类
        <img src="../../assets/mystyle/classify_disabled.png" alt="" slot="icon" v-if="selected == 'cart'">
        <img src="../../assets/mystyle/classify_enabled.png" alt="" slot="icon" v-else> 
      </mt-tab-item>
      <mt-tab-item id="classify">
       鲜花
        <img src="../../assets/mystyle/flower_disabled.png" alt="" slot="icon" v-if="selected == 'cart'">
        <img src="../../assets/mystyle/flower_enabled.png" alt="" slot="icon" v-else> 
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
         <img src="../../assets/mystyle/me_disabled.png" alt="" slot="icon" v-if="selected == 'me'">
        <img src="../../assets/mystyle/me_enabled.png" alt="" slot="icon" v-else> 
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
    
    
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
       
      active: "1",
      tab: "ab",
       n:30,
      busy:false,
      selected:'index',
      swipeImgs: [],
      entries: [],
      filterData: null,
      showFilter: false,
      page: 1,
      size: 5,
      restaurants: [], // 存放所有商家容器
      allLoaded: false,
      bottomPullText: "上拉加载更多",
      data: null
    };
  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
   watch: {

    //监听tabbar绑定的变量,并且根据变量值的变化来跳转到不同的页面
    selected(newValue){
      if(newValue == 'index'){        
        this.$router.push('/');
      } else if(newValue == 'classify'){
         this.$router.push('/classify');
      } else if(newValue == 'me'){
         this.$router.push('/me');
      }else if(newValue =='flower'){
         this.$router.push('flower');
      }
    },
      // 可以带有两个参数
    // 第一个参数代表新值
    // 第二个参数代表旧值
    active(newValue) {
      if (newValue == "1") {
        this.tab = "ab";
      } else if (newValue == "2") {
        this.tab = "cd";
      } else if (newValue == "3") {
        this.tab = "ef";
      } else {
        this.tab = "gh";
      }
    },
   },
   methods:{
     loadMore(){
      //显示加载提示框
      this.$indicator.open({
        text:"加载中...",
        //snake,double-bounce,triple-bounce,fading-circle
        spinnerType:"fading-circle"
      });
      //模拟服务器请求数据,而且现在服务器的运行速度非常慢
      this.busy = true;
      window.setTimeout(()=>{
        this.n += 30;
        this.busy = false;
        //关闭加载提示框
        this.$indicator.close();
      },5000);
      
    } 
   },
   mounted(){
     console.log("+++++++++++++++++++++++++++")
   }
  
};


  

</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header,
.search_wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}

.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100px;
}

.entries {
  background: #fff;
  height: 47.2vw;
  text-align: center;
  overflow: hidden;
}
.foodentry {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 2.933333vw;
}
.foodentry .img_wrap {
  position: relative;
  display: inline-block;
  width: 12vw;
  height: 12vw;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.foodentry span {
  display: block;
  color: #666;
  font-size: 0.32rem;
}
/* 推荐商家 */
.shoplist-title {
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-size: 16px;
  color: #333;
  background: #fff;
}
.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.shoplist-title:before {
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  margin-left: 3.466667vw;
}

.fixedview {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;
}

.mint-loadmore {
  height: calc(100% - 95px);
  overflow: auto;
}
</style>
