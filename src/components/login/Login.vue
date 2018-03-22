<template>
<div class="formWrap">
    <img class="avatar" src="../register/avatar.png" alt="">
    <img class="font" src="./logoFont.png" alt="">
    <form action="">
      <label for="">手机号：<input v-model="mobile" type="text"></label>
      <label for="">密码：<input v-model='pass' type="password"></label>
      <label class="verificationCode" for="">验证码：<input type="text" v-model='verificationCode'>
      <img @click.prevent='getAuthCode' class="authCode" :src="baseUrl + '/public/authCode?'+ timestamp" alt="">
      </label>
      <div class="forgot">
        <router-link :to="{name: 'forgot'}">忘记密码</router-link><router-link :to="{name: 'register'}" class="register" href="">立即注册</router-link>
      </div>
      <button type="button" class="login" @click.prevent='login'>登 录</button>
    </form>
</div>
</template>
<script>
import regExp from '@/lib/regExp'
import {baseUrl} from '@/lib/config'
let {setCookie, getCookie} = require('@/lib/util')
export default {
  name: 'loginForm',
  data () {
    return {
      mobile: '',
      pass: '',
      confirmPass: '',
      verificationCode: '',
      authCode: '',
      textCode: '',
      errors: [],
      remember: false,
      baseUrl: baseUrl,
      timestamp: new Date().getTime()
    }
  },
  methods: {
    login () {
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
          this.$http.post('familyUser/login', {
            authCode: this.verificationCode,
            ciphertext: this.pass,
            mobile: this.mobile
          }).then(({body}) => {
            if ((body.status) == 'success') {
              this.$store.commit('saveUser', body.data)
              this.$router.push({name: 'admin'});
            } else {
              this.$Message.error(body.message)
              this.authCode = ''
            }
          });
        } else {
            this.$Message.error(body.message)
            this.errors = [];
        }
    },
    getAuthCode() {
      this.timestamp = new Date().getTime();
    }
  },
  mounted() {
    this.mobile = getCookie('mobile');
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
    width 80px
    position absolute
    right 0
    top 10px
    left 100%
    &:hover
      cursor pointer
  .verificationCode
    width 220px
    position relative
  .getCode
    position absolute
    right 0
    width 50px

</style>

