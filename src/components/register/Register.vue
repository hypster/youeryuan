<template>
<div class="formWrap">
    <img class="avatar" src="./avatar.png" alt="">
    <img class="font" src="./registerFont.png" alt="">
    <form action="">
      <label for="">手机号：<input v-model="mobile" type="text"></label>
      <label for="">密码：<input v-model='pass' type="password"></label>
      <label for="">确认密码：<input type="password"></label>
      <label class="verificationCode" for="">短信验证码：<input type="text" v-model='textCode'><button @click.prevent type='button' class="getCode">获取验证码</button></label>
      <button type="button" class="register" @click.prevent='register'>注 册</button>
      <p class="signin"><a>已有账号，立即登陆</a></p>
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
  p.signin 
    text-align right 
    margin-top 14px
    a
      color #5e9c10
</style>

