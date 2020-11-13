<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header class="flowertitle" title="领券中心">
      <router-link to="/flower" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 领券页面开始 -->
    <div class="lq">
      <p class="p1"><span>买之前</span> <span>先领券</span></p>
      <p>超值100元优惠券购不停</p>
      <p>使用期限:领取后7天内可用</p>
      <div class="youhui">
        <div class="youhui-item" v-for="(n, i) of youhui" :key="i">
          <p>¥{{ n.price }}</p>
          <p>{{ n.title }}</p>
        </div>
      </div>
      <mt-button @click="lqbtn" class="lqbtn1" type="danger" size="large"
        >立即领取</mt-button
      >
    </div>
    <!-- 领券页面结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      youhui: [
        {
          price: 10,
          title: "订鲜花满150减10优惠券",
        },
        {
          price: 20,
          title: "订鲜花满200减20优惠券",
        },
        {
          price: 30,
          title: "订鲜花满300减30优惠券",
        },
        {
          price: 40,
          title: "订鲜花满500减40优惠券",
        },
      ],
    };
  },
  methods: {
    lqbtn() {
      this.$toast("领取成功");
    },
  },
};
</script>

<style>
.flowertitle {
  background: rgba(161, 46, 46, 0.349);
  color: black;
}
.lq {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  background-image: url(../../assets/flower/youhuibg.jpg);
  background-size: 100% 100%;
  position: absolute;
}
.lq > p:first-child {
  font-size: 28px;
  color: #ff5f1c;
  margin: 20px auto;
}
.lq > p:nth-child(2) {
  font-size: 18px;
  color: #ff5f1c;
  margin: 20px;
  position: relative;
}
.lq > p:last-child {
  font-size: 14px;
  color: #666;
}
.youhui {
  margin: 30px auto;
}
.youhui-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ff5f1c;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 8px;
  border-top: 2px solid #ff5f1c;
  background: rgba(100, 100, 100, 0.1);
}
.youhui-item p:first-child {
  font-size: 28px;
  color: #ff5f1c;
}
.lqbtn1 {
  width: 62%;
  height: 50px;
  margin: 40px auto;
}
</style>