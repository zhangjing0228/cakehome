<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端,到学问">
      <div slot="right" class="shortcut">
        <router-link to="/register">注册</router-link>
        <router-link to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item
        v-for="(item, index) of category"
        :key="index"
        :id="item.id.toString()"
      >
        {{ item.category_name }}
      </mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div
      class="main"
      infinite-scroll-distance="20"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      :infinite-scroll-immediate-check="true"
    >
      <mt-tab-container>
        <mt-tab-container-item>
          <!-- 单一文章信息开始 -->
          <div
            class="articleItem"
            v-for="(article, index) of articles"
            :key="index">
            <router-link :to="`/article/${article.id}`">
              <!-- 文章标题开始 -->
              <div class="articleItem-header">
                {{ article.subject }}
              </div>
              <!-- 文章标题结束 -->
              <!-- 文章图文信息开始 -->
              <div class="articleItem-wrapper">
                <!-- 文章图像开始  -->
                <div class="articleImg" v-if="article.image != null">
                  <img v-lazy="article.image" />
                </div>
                <!-- 文章图像结束 -->
                <!-- 文章简介开始 -->
                <div class="articleDes">
                  {{ article.description }}
                </div>
                <!-- 文章简介结束 -->
              </div>
              <!-- 文章图文信息结束 -->
            </router-link>
          </div>
          <!-- 单一文章信息结束 -->
          <div style="padding:20px;background-color:#0aa1ed;color:#fff" v-if="page > pagecount">我是底限</div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="index">
        首页
        <img
          src="../assets/common/index_enabled.png"
          alt=""
          slot="icon"
          v-if="selectedTab == 'index'"
        />
        <img
          src="../assets/common/index_disabled.png"
          alt=""
          slot="icon"
          v-else
        />
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img
          src="../assets/common/me_enabled.png"
          alt=""
          slot="icon"
          v-if="selectedTab == 'me'"
        />
        <img src="../assets/common/me_disabled.png" alt="" slot="icon" v-else />
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style scoped>
.shortcut a {
  color: #fff;
  padding-left: 20px;
}
.main {
  margin-bottom: 55px;
}
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>
<script>
export default {
  data() {
    return {
      // 默认被选定的顶部选项卡及面板
      active: "1",
      // 默认被选定的顶部选项卡
      selectedTab: "index",
      // 存储服务器返回的文章分类数据
      category: [],
      // 用于存储服务器返回结果
      articles: [],
      // 用于记录在进入滚动范围后,是否继续触发滚动函数
      busy: false,
      // 页码
      page: 1,
      //总页数
      pagecount:0
    };
  },
  methods: {
    // 获取服务器数据的自定义函数
    // 分别被mounted、watch及无限滚动时调用
    // 纵观三次调用,会发现只有分类ID及页码值是不同的，也就
    // 决定了访自定义函数要带有两个参数

    loadData(cid, page) {
      //显示加载提示框
      this.$indicator.open({
        text:'加载中...',
        spinnerType:'fading-circle'
      });
      // 修改busy变量值的值
      this.busy = true;
      //通过axios工具向Web服务器发送请求以获取文章数据
      this.axios.get("/articles?cid=" + cid + "&page=" + page).then((res) => {
        //获取服务器返回的数据 -- 数组
        let data = res.data.results;
        //总页数进行赋值
        this.pagecount = res.data.pagecount;
        //数组的遍历,此时的item代表的是组成数组的每一个object
        //每一个object都包含id,subject,description及image属性
        data.forEach((item) => {
          //在文章的图片不为空的情况下才动态加载
          if (item.image != null) {
            //属性重新赋值
            item.image = require("../assets/images/articles/" + item.image);
          }
          //现在在无论是否图片为空都添加到以articles数组中了
          this.articles.push(item);       
        });
        //关闭加载提示框
        this.$indicator.close();
        //修改busy变量的值
        this.busy = false;
      });
    },

    //无限滚动触发函数
    loadMore() {
      //页码进行累加
      this.page++;
      //调用获取数据的自定义函数 -- loadData
      if(this.page <= this.pagecount){
        this.loadData(this.active,this.page);
      }
    },
  },
  watch: {
    //监听顶部选项卡发生变化时,需要发送请求以获取对应的文章数据
    active(value) {
      //清空之前保存的文章数据
      this.articles = [];
      //设置页码变量值为1(因为刚刚切换到任何一个选项卡时都是显示该类别下的第1页的数据)
      this.page = 1;
      // 调用获取数据的自定义函数 -- loadData()
      this.loadData(this.active, this.page);
    },
  },
  mounted() {
    //通过axios工具向Web服务器发送请求以获取文章分类的数据
    this.axios.get("/category").then((res) => {
      this.category = res.data.results;
    });
    // 调用获取数据的自定义函数 - loadData();
    this.loadData(this.active, this.page);
  },
};
</script>