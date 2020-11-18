<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header class="flowertitle" :title="`${this.$route.params.category}`">
      <router-link to="/flower" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 列表开始 -->
    <ul class="list">
      <li class="list-item" v-for="(n, i) of results" :key="i">
        <router-link :to="`/flowerdetail/${n.fid}`">
          <img :src="n.img" alt="" />
          <p class="p1">{{ n.title }}</p>
          <p class="p2">
            <span>¥{{ n.price }}</span
            ><s>¥{{ n.price1 }}</s>
          </p>
        </router-link>
      </li>
    </ul>
    <!-- 列表结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: "",
    };
  },
  mounted() {
    let category = this.$route.params.category;
    this.axios.get("/classlist?category=" + category).then((res) => {
      console.log(res.data.results);
      this.results = res.data.results;
    });
  },
};
</script>

<style>
.flowertitle {
  background: #ffc0cb;
  color: #fff;
}
.list {
  padding: 0 10px;
}
.list-item {
  background: #eee;
  margin-bottom: 10px;
  text-align: center;
  font-size: 28px;
  padding-bottom: 15px;
}
.list-item img {
  width: 100%;
}
.p1 {
  font-size: 36px;
  margin: 15px 0;
}
.p2 span {
  color: #ff5f1c;
  margin-right: 15px;
}
</style>