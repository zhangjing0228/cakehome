<template>
<div class="bg" id="login">
 <mt-header title="注册">
   <router-link to="login" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button  slot="right"></mt-button>
 </mt-header>
 <div>
    <mt-field
        label="用户名"
        placeholder="请输入用户名"
        type="text"
        v-model="username"
        :state="usernameState"
        @blur.native.capture="checkUsername"
      >
      </mt-field>
        <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        @blur.native.capture="checkPassword"
        >
       
      </mt-field>
      <mt-field
        label="确认密码"
        placeholder="请再次输入密码"
        type="password"
        v-model="conpassword"
        @blur.native.capture="checkConpassword"
        >
      </mt-field>
       <mt-button type="default" size="large" @click="handle">免费注册</mt-button>
 </div>
 </div>
</template>

<style>

</style>

<script>
export default {
   data() {
    return {
      //用户名、密码的变量
      username: "",
      password: "",
      conpassword:"",
      usernameState:''
    };
  },
  methods:{
    //单击免费注册按钮时校验表单
    handle(){
      //会引发短路现象
      if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
        //现在要发送相关的用户名、密码到WEB服务器
        let object = {
          username:this.username,
          password:this.password
        }
        //let querystring = 'a=1&b=2&c=3&d=4';
        //console.log(this.qs.parse(querystring));
        //console.log(this.qs.stringify(object));
        this.axios.post('/register',this.qs.stringify(object)).then(res=>{
            //代表用户注册成功
            if(res.data.code == 1){
              this.$router.push('mycenter');
               this.$messagebox("提示信息","注册成功");
            } else {
              //弹出提示框
              this.$messagebox("提示信息","用户已经存在");
            }
        });
      }
    },
    //检测用户名
    checkUsername() {
      let username = this.username;
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/;
      if (usernameReg.test(username)) {
        // 修改用户名的状态
        this.usernameState = 'success';
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
        this.usernameState = 'error';        
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
    },
    //检测两次密码是否一致
    checkConpassword() {
      //校验两次密码是否一致
      let password = this.password;
      let conpassword = this.conpassword;
      if (password == conpassword) {
        return true;
      } else {
        this.$toast({
          message: "两次密码不一致",
          position: "middle",
          duration: 4000,
        });
        return false;
      }
    },
  },
};
</script>