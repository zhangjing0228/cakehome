<template>
<div>
     <mt-button>
        <img src="../../assets/mystyle/position.png" alt="">重庆市
      </mt-button>
      <div>
      <mt-search
          cancel-text="取消"
          placeholder="搜索">
      </mt-search>
      </div>
      <div style="height:200px">
        <mt-swipe :auto="2000">
        <mt-swipe-item><img src="../../assets/mystyle/1dd162c28c9369d4ee4879eb9d25da5a.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/mystyle/34ff0f5967a38def6ca9c9d87cecefba.jpeg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/mystyle/379979932fa701ba7706a24c27b84fb0.jpg" alt=""></mt-swipe-item>
       </mt-swipe>
      </div>
       <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index">
        首页
        <img src="../../assets/mystyle/index_disabled.png" alt="" slot="icon" v-if="selected == 'index'">
        <img src="../../assets/mystyle/index_enabled.png" alt="" slot="icon" v-else>        
      </mt-tab-item>
      <mt-tab-item id="cart">
        购物车
        <img src="../../assets/mystyle/cart_disabled.png" alt="" slot="icon" v-if="selected == 'cart'">
        <img src="../../assets/mystyle/cart_enabled.png" alt="" slot="icon" v-else> 
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