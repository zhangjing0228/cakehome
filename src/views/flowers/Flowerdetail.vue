<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header class="flowertitle" :title="header">
      <router-link to="/flower" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 详情开始 -->
    <div class="detail" v-for="(n, i) of detail" :key="i">
      <img :src="n.img" alt="" />
      <p class="p1">{{ n.title }}</p>
      <p class="p3">专人配送</p>
      <p class="p2">
        <span>优惠价:¥{{ n.price.toFixed(2) }}</span
        ><s>原价¥{{ n.price1.toFixed(2) }}</s>
      </p>
      <mt-tabbar fixed>
        <mt-tab-item>
          <div @click="shouc">
            <img v-if="!sc" src="../../assets/flower/sc1.png" alt="" />
            <img v-if="sc" src="../../assets/flower/sc2.png" alt="" />
            <span>收藏</span>
          </div>
        </mt-tab-item>
        <mt-tab-item>
          <div @click="zixun">
            <img src="../../assets/flower/zixun.png" alt="" />
            咨询
          </div>
        </mt-tab-item>
        <mt-tab-item class="dg"><p @click="ljdg">立即订购</p></mt-tab-item>
      </mt-tabbar>
    </div>

    <!-- 详情结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: "",
      header: "",
      sc: false,
    };
  },
  methods: {
    shouc() {
      this.sc = !this.sc;
      if (this.sc) {
        this.$toast("收藏成功");
      }
    },
    zixun() {
      this.$messagebox("无法咨询", "请先登录后再进行咨询");
    },
    ljdg() {
      this.$messagebox("订购失败", "请先登录后再进行此操作");
    },
  },
  mounted() {
    let fid = this.$route.params.fid;
    this.axios.get("/flowerdetail?fid=" + fid).then((res) => {
      console.log(res.data.result);
      this.detail = res.data.result;
      this.header = res.data.result[0].title;
      // console.log(res.data.result[0].title);
    });
  },
};
</script>

<style>
.flowertitle {
  background: rgba(161, 46, 46, 0.349);
  color: black;
}
.detail {
  position: absolute;
  background: #eee;
  height: 90%;
  width: 100%;
  font-size: 18px;
}
.detail img {
  width: 100%;
  height: 60%;
}
.detail p {
  margin-left: 15px;
}
.p1 {
  font-size: 24px;
  margin: 15px 0;
}

.p2 span {
  color: #ff5f1c;
  margin-right: 15px;
}
.p3 {
  display: inline-block;
  background: #5ba1e2;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.mint-tab-item-label div {
  color: #666;
  font-size: 14px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mint-tab-item-label img {
  width: 20%;
}
.mint-tabbar {
  border-top: 1px solid #333;
}
.mint-tab-item-label p {
  font-size: 24px;
  color: #eee !important;
  margin-top: 18px;
}
.dg {
  background: #ff5f1c !important;
}
</style>