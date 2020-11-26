<template>
<div class="bg" id="login">
  <mt-header title="登录">
  <router-link to="mycenter" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button @click="register"  slot="right">注册</mt-button>
</mt-header>
<div>
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        type="text" v-model="username" @blur.native.capture="checkUsername">
      </mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password" v-model="password" @blur.native.capture="checkPassword">
       
      </mt-field>
      <mt-button @click="handle" type="default" size="large">登录</mt-button>
       <mt-button class="" type="default" size="large" @click="register">注册</mt-button>
      </div>
     
 </div>
</template>

<style>
.mint-field-core{
  border-radius: 8px !important;
  padding-left: 10px;
}
#login .mint-cell-wrapper{
  background-color: #ade5fc;
  color: #fff;
}
.bg{
  background-image: url(../../assets/mage/bjt.jpeg);
  height: 665px;
}
.mint-button {
  margin-top: 8px;
    background-color:#ffc0cb !important;
    color: #fff !important;
}
.mint-header{
  background-color: #ffc0cb !important;
}

</style>

<script>
export default {
  data() {
    return {
      //用户名、密码的变量
      username: "",
      password: ""
    }
  },
  methods:{
    register(){
      this.$router.push('/register')
    },
    handle(){
      this.axios.post('/login','username=' + this.username + '&password=' + this.password).then(res=>{
            //代表用户登录成功
            if(res.data.code == 1){
              //提交Mutations,以修改用户登录状态
              this.$store.commit('login_mutations',res.data.userInfo);
              //页面跳转
              this.$messagebox('登录成功')
              this.$router.push('/mycenter');
            } else {
              //this.username ='';
              //this.password='';
              this.$messagebox('登录提示','用户名或密码错误');
            }
        });
      },
      checkUsername() {
      let username = this.username;
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/;
      if (usernameReg.test(username)) {
        return true;
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)
        this.$toast({
          message: "用户名格式或内容错误",
          position: "top",
          duration: 5000,
        });
        //终止函数的执行
        return false;
      }
    },
    //检测密码
    checkPassword() {
      let password = this.password;
      let passwordReg = /^[0-9A-Za-z\.\-_]{8,15}$/;
      if (passwordReg.test(password)) {
        return true;
      } else {
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 5000,
        });
        return false;
      }
    }
  }
};
</script>