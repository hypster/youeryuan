<template>
<div class="formWrap">
    <img class="avatar" src="../register/avatar.png" alt="">
    <img class="font" src="./logoFont.png" alt="">
    <form action="">
      <label for="">手机号：<input v-model="mobile" type="text"></label>
      <label for="">密码：<input v-model='pass' type="password"></label>
      <label class="verificationCode" for="">验证码：<input type="text" v-model='verificationCode'>
      <img class="authCode" :src="authCode" alt="">
      <button @click.prevent type='button' class="getCode">刷新</button>
      </label>
      <div class="forgot">
        <div class="remember">
          <input v-model='remember' type="checkbox"><span>记住密码</span>
        </div>
        <router-link :to="{name: 'forgot'}">忘记密码</router-link><router-link :to="{name: 'register'}" class="register" href="">立即注册</router-link>
      </div>
      <button type="button" class="login" @click.prevent='register'>登 录</button>
    </form>
</div>
</template>
<script>
import regExp from '@/lib/regExp'
let {setCookie, getCookie} = require('@/lib/util')
export default {
  name: 'loginForm',
  data () {
    return {
      mobile: '',
      pass: '',
      confirmPass: '',
      verificationCode: '',
      textCode: '',
      errors: [],
      authCode: '',
      remember: false
    }
  },
  methods: {
    register () {
        if (this.mobile.trim() == '') {
          this.errors.push('请输入手机号码');
        }
        else if(!regExp.mobile.test(this.mobile)) {
          this.errors.push('请输入正确格式的手机号码');
        } 
        if (!regExp.pass.test(this.pass)) {
          this.errors.push('请输入准确格式的密码，长度8-20位，且包含一个小写字母、一个大写字母和一个数字');
        } 
        // debugger
        if (this.verificationCode.trim() == '') {
          this.errors.push('请输入短信验证码');
        } else if (!regExp.smsCode.test(this.verificationCode)) {
          this.errors.push('验证码必须为4位');
        }
        if (!this.errors.length) {
          console.log('校验通过');
          if (this.remember) {
            setCookie('mobile', this.mobile, 7);
          } else {
            setCookie('mobile', '', -1);
          }
          // this.$http.post('/familyUser/register', {
          //   ename: ,
          //   ciphertext: 
          //   mobile,
          //   realname
          // }).then(res => {
          //   console.log(res);
          // })
        } else {
          this.$emit('openModal', this.errors.slice());
          this.errors = [];
        }
    },
    getAuthCode() {
      // this.authCode = 'http://10.4.4.33:81/xhzs/public/authCode'
      this.$http.get('public/authCode', {responseType: 'blob'}).then(r => {
        console.log(r.blob())
        this.authCode = r.blob()
      }).catch(e => {});
    }
  },
  mounted() {
    this.mobile = getCookie('mobile');
    this.getAuthCode(); 
  }
}  
</script>
<style lang="stylus" scoped>
  .forgot 
    font-size 14px
    color #999
    text-align right 
    font-weight 500
    a
      color #999
      text-decoration none
    .remember
      float left
    .register
      color #5e9c10
      margin-left 10px
  .authCode
    width 60px
    position absolute
    left 100%
    margin-left 20px
  .verificationCode
    width 200px
    position relative
  .getCode
    position absolute
    right 0
    width 50px

</style>

