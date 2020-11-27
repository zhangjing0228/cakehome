<template>
    <div class="cart">
        <div class="page">
            <mt-header title="我的购物车">
                <router-link to="/home" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="shop_car_body">
            <ul>
                <li v-for="(item, index) of list" :key="index">
                    <div class="car_list_top">
                        <div class="car_list_t_l">
                            <!-- 选择商品 -->
                            <div
                                    class="input_check"
                                    :class="{ 'selector-active': item.checked }"
                                    @click="selectGoods(item)"
                            >
                                <img src="../../assets/imgs/tick.svg"/>
                            </div>

                            <!-- 选择商品 end -->
                            <P>商家: {{ item.title }}</P>
                        </div>
                        <div class="car_list_t_r" @click="delGoods(item, index)">
                            <p class="ico_del">
                                <img src="../../assets/imgs/删除.png"/>
                            </p>
                        </div>
                    </div>
                    <div class="car_list_center">
                        <div class="car_list_c_l">
                            <img :src="item.img"/>
                        </div>
                        <div class="car_list_c_r">
                            <p>{{ item.content }}</p>
                            <div class="goods_intor">
                                <p>￥{{ item.price }}</p>
                                <p class="select_num_input">
                                    <img
                                            src="../../assets/imgs/减.png"
                                            @click="sub(item.count, index)"
                                    />
                                    <input :value="item.count" disabled/>
                                    <img
                                            src="../../assets/imgs/添加.png"
                                            @click="plus(item.count, index)"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="car_footer">
                <div class="car_footer_l" :class="{ 'selector-active': allActive }">
          <span @click="checkAll(!allActive)"
          ><img src="../../assets/imgs/tick.svg" alt=""
          /></span>
                    <p>全选</p>
                </div>
                <!-- <div class="car_footer_l" v-show="checkAllFlag" :class="{'selector-active': allActive}">
                        <span @click="checkAll(false)"><img src="../../assets/imgs/tick.svg" alt=""></span>
                        <p>取消全选</p>
                    </div> -->
                <div class="car_footer_r">
                    <span>合计：￥{{ totalMoney }}</span>
                    <p @click="toDo()">结算({{ sum }})</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as setNum from "../../utils/setDe.js";
    import {MessageBox} from "mint-ui";

    export default {
        data() {
            return {
                count: 0,
                list: [],
                selectId: [], //选中的商品id
                totalMoney: 0, //总价
                checkNum: 0, //选择的商品数量(结算需要显示的数量)
                checkAllFlag: false, //是否全选
                checked: true,
                allActive: true,
                sum: 0
            };
        },
        computed: {},
        methods: {
            // 点击结算
            toDo() {
                if (this.checkNum <= 0) {
                    this.$toast("先选中需要结算的商品");
                } else {
                    // 结算选中的商品
                    var isList = [];
                    for (var i in this.list) {
                        if (this.list[i].checked) {
                            isList.push(this.list[i]);
                        }
                    }
                    console.log(isList);
                    this.$router.push({
                        path: '/dingdan',
                        query: {data: isList}
                    })

                }
            },
            // (单选)选择商品
            selectGoods(item) {
                console.log(item);
                // this.checked=!this.checked;
                //判断是否未定义，如果没点击过按钮是没有注册的，则需要先注册checked属性
                if (typeof item.checked == "undefined") {
                    this.$set(item, "checked", true);
                } else {
                    //  如果已经注册，则设置checked否(这里不能设置为false,因为当已经注册过之后再点击为flase，那么再点击一次则为true)
                    item.checked = !item.checked;
                    item.checked ? this.checkNum++ : this.checkNum--;
                    console.log("====", item.checked);
                }
                this.getCount(); //结算需要显示的数量
                // 求总价
                this.totalPrice();
                // 当所有的商品都选择的时候，自动默认为全选
                console.log("checkNum", this.checkNum, this.list.length)
                if (this.checkNum === this.list.length) {
                    this.allActive = true;
                } else {
                    this.allActive = false;
                }
                // this.list.length == this.checkNum ? this.checkAll(true) : this.checkAllFlag = false;
            },
            // 全选与取消全选，点击全选时flag为true,取消时为false
            checkAll(flag) {
                this.allActive = !this.allActive;
                this.checkAllFlag = flag;
                var _this = this;
                flag ? (this.checkNum = this.list.length) : (this.checkNum = 0);
                this.list.forEach(function (item, index) {
                    if (typeof item.checked == "undefined") {
                        //也要防止未定义
                        _this.$set(item, "checked", _this.checkAllFlag); //通过set来给item添加属性checked
                    } else {
                        item.checked = _this.checkAllFlag;
                    }
                });
                this.getCount();
                this.totalPrice();
            },
            // 求总价
            totalPrice() {
                let totalMoney = 0;
                this.list.forEach((item, index) => {
                    if (item.checked) {
                        totalMoney += item.price * item.count;
                        this.totalMoney = totalMoney.toFixed(2);
                    } else if (item.checked === false || item.checked === undefined) {
                        this.count++;
                    }
                });
                if (this.count === this.list.length) {
                    this.totalMoney = 0;
                }
                this.count = 0;
            },
            // 删除商品
            delGoods(item, index) {
                MessageBox.confirm("", {
                    title: "",
                    message: "确定删除该商品吗？",
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                })
                    .then((action) => {
                        if (action === "confirm") {
                            //删除元素
                            this.list.splice(index, 1);
                            this.axios.post('/delCart', {uid: item.uid, pid: item.pid}).then(res => {
                                console.log(res)
                                if (res.data.code === 1) {
                                    this.$messagebox("删除成功");
                                    // 刷新类表
                                    this.getCount();
                                    this.getList();
                                    this.totalPrice();
                                } else {
                                    this.$messagebox("删除失败")
                                }
                            })

                            // 取消全选
                            // this.checkAll(false);
                        }
                    })
                    .catch((error) => {
                    });
            },
            // 数量减方法
            sub(num, index) {
                if (parseInt(num) <= 1) {
                    this.list[index].count = 1;
                } else {
                    this.list[index].count = parseInt(this.list[index].count) - 1;
                }
                this.getCount();
                this.totalPrice();
            },
            // 数量加方法
            plus(num, index) {
                console.log("list", this.list)
                this.list[index].count = parseInt(this.list[index].count) + 1;
                this.getCount();
                this.totalPrice();
            },
            // 获取购物车列表
            cartList() {
                if (this.$store.getters.cartList.length === 0) {
                    let uid = JSON.parse(localStorage.getItem('userInfo')).id;
                    this.axios.get('/getCartProductById?uid=' + uid).then(res => {
                        this.list = res.data.cartInfo;
                        this.list.forEach(x => {
                            if (x.checked === 0) {
                                x.checked = false;
                                this.allActive = false;
                            } else {
                                x.checked = true;
                                this.checkNum++;
                            }

                        })
                        //获取数据后
                        this.totalPrice();
                        this.getCount();
                    })
                } else {
                    this.list = this.$store.getters.cartList;
                }
            },
            cartCount() {
                return this.$store.getters.cartCount;
            },
            getCount() {
                let checkNum = 0;
                this.list.forEach((x) => {
                    if (x.checked === true) {
                        checkNum += x.count;
                    }
                });
                this.sum = checkNum;
            },
        },
        created() {
            if (localStorage.getItem('isLogined') == null || localStorage.getItem('isLogined' === '')) {
                this.$messagebox("请先登录后再进行此操作");
                this.$router.push('/login');
                return
            }
            this.cartList();
        },
        mounted() {

        },
        beforeRouteLeave(to, from, next) {
            console.log(this.list)
            this.axios.post('/updatecart', this.list).then(res => {
                console.log(res)
            })
            next()
        },
        deactivated() {

        }
    };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .input_check {
        position: relative;
        margin: 0;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid #ccc;
        cursor: pointer;
    }

    .selector-active {
        background-color: #ff8198;
        border-color: #ff8198;
    }

    .mint-header {
        background-color: pink;
        font-size: 18px;
        text-align: center;
        position: fixed;
        width: 100%;
        z-index: 100;
        top: 0;
        left: 0;
        padding: 0;
    }

    .shop_car_body {
        width: 100%;
        font-size: 16px;
    }

    ul {
        margin-bottom: 85px;
        width: 100%;
    }

    ul > li {
        list-style: none;
        border-radius: 10px;
        background-color: rgb(248, 240, 240);
        font-size: 14px;
        margin-top: 30px;
    }

    ul > li > .car_list_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
    }

    ul > li > .car_list_top > .car_list_t_l {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    ul > li > .car_list_top > .car_list_t_l > .input_check {
        position: relative;
        margin-right: 10px;
    }

    ul > li > .car_list_top > .car_list_t_l > .input_check > span {
        display: block;
        position: absolute;
    }

    ul > li > .car_list_top > .car_list_t_l > .input_check > span > img {
        margin-left: 20px;
        margin-top: 10px;
    }

    ul > li > .car_list_top > .car_list_t_r > p.ico_del {
        margin-right: 20px;
        margin-top: 10px;
    }

    ul > li > .car_list_center {
        display: flex;
        justify-content: flex-start;
    }

    ul > li > .car_list_center > .car_list_c_l > img {
        display: block;
        width: 140px;
        height: 140px;
        object-fit: cover;
    }

    ul > li > .car_list_center > .car_list_c_r {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    ul > li > .car_list_center > .car_list_c_r > p:nth-child(1) {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    ul > li > .car_list_center > .car_list_c_r > .goods_intor {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    ul > li > .car_list_center > .car_list_c_r > .goods_intor > .select_num_input {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul
    > li
    > .car_list_center
    > .car_list_c_r
    > .goods_intor
    > .select_num_input
    > input {
        text-align: center;
        width: 37px;
        height: 25px;
        border: none;
        outline: none;
    }

    ul > li > .car_list_center > .car_list_c_r > .goods_intor > span {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul > li > .car_list_center > .car_list_c_r > .goods_intor > span:active {
        opacity: 0.5;
    }

    ul > li > .car_list_center > .car_list_c_r > .goods_intor > .mint-button {
        width: 60px;
        text-align: center;
        background: none;
        margin: 2px;
    }

    .shop_car_body > .car_footer {
        width: 100%;
        border-top: 2px rgb(218, 215, 215) solid;
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: #fff;
        height: 65px;
        font-size: 14px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .shop_car_body > .car_footer > .car_footer_l {
        font-size: 16px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid #ccc;
        cursor: pointer;
    }

    .selector-allActive {
        background-color: #ff8198;
        border-color: #ff8198;
    }

    .shop_car_body > .car_footer > .car_footer_l > p {
        margin-left: 20px;
    }

    .shop_car_body > .car_footer > .car_footer_l > span {
        display: block;
    }

    .shop_car_body > .car_footer > .car_footer_r {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .shop_car_body > .car_footer > .car_footer_r > span {
        text-align: center;
        display: block;
        margin-right: 60px;
        font-size: 16px;
    }

    .shop_car_body > .car_footer > .car_footer_r > p {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 35px;
        padding: 0px 20px;
        border-radius: 30px;
        background: rgb(247, 44, 17);
    }
</style>
 