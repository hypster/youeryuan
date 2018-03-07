<template>
<div class="formWrap">
    <img class="avatar" src="../register/avatar.png" alt="">
    <img class="font" src="./logoFont.png" alt="">
    <form action="">
      <label for="">手机号：<input v-model="mobile" type="text"></label>
      <label for="">密码：<input v-model='pass' type="password"></label>
      <label class="verificationCode" for="">验证码：<input type="text" v-model='verificationCode'><button @click.prevent type='button' class="getCode">刷新</button></label>
      <div class="forgot">
        <div class="remember">
          <input type="checkbox"><span>记住密码</span>
        </div>
        <a href="">忘记密码</a><a class="register" href="">立即注册</a>
      </div>
      <button type="button" class="login" @click.prevent='register'>登 录</button>
    </form>
</div>
</template>
<script>
import regExp from '@/lib/regExp'
export default {
  name: 'loginForm',
  data () {
    return {
      mobile: '',
      pass: '',
      confirmPass: '',
      verificationCode: '',
      textCode: '',
      errors: []
    }
  },
  methods: {
    register () {
      if (!this.mobile.trim() == '') {
        this.errors.push('手机号码必填');
      }
      else if(!regExp.mobile.test(this.mobile)) {
        this.errors.push('请输入正确格式的手机号码');
      } 
      if (!regExp.pass.test(this.pass)) {
        this.errors.push('请输入8-20位密码，且必须包含一个小写字母、一个大写字母和一个数字');
      } 
      if (this.confirmPass != this.pass) {
        this.errors.push('两次输入密码不一致');
      }
      if (this.textCode.trim() == '') {
        this.errors.push('请输入短信验证码');
      }
      if (!this.errors.length) {
        console.log('校验通过');
        // this.$http.post('/familyUser/register', {
        //   ename: ,
        //   ciphertext: 
        //   mobile,
        //   realname
        // }).then(res => {
        //   console.log(res);
        // })
      } else {
        console.log(this.errors)
      }
    }
  }
}  
</script>
<style lang="stylus" scoped>
.formWrap
  position relative
  width 500px
  padding 50px
  box-sizing border-box
  background-color #f4f4f4
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)
  text-align center 
  form 
    margin-top 20px
    text-align left 
    display flex
    flex-direction column
    justify-content flex-start
    label 
      background-color #fff
      padding 18px 18px 0
      margin-bottom 20px
    input 
      border none
      margin-bottom 20px
      &:focus
        outline none
    label.verificationCode
      padding-right 0
      position relative
      button.getCode
        position absolute
        right 0
        top 0
        height 54px
        border none
        background-color #7cb92f
        color #fff
        font-size 12px
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
</style>

