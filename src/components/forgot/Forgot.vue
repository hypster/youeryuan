<template>
<div class="formWrap">
    <img class="avatar" src="../register/avatar.png" alt="">
    <img class="font" src="./font.png" alt="">
    <form action="">
      <label for="">手机号：<input v-model="mobile" type="text"></label>
      <label for="">新密码：<input v-model='pass' type="password"></label>
      <label for="">确认密码：<input v-model='confirmPass' type="password"></label>
      <label class="verificationCode" for="">短信验证码：<input type="text" v-model='textCode'>
        <button class="getCode" :class="{disabled: waiting}" :disabled='waiting' @click.prevent type='button' @click='getSMSCode(2)'>获取验证码</button>
      </label>
      <p v-show='waiting' class="countdown">下次获取验证码等待时间剩余：{{countdown}}秒</p>
      <button type="button" class="register" @click.prevent='register(api)'>找 回</button>
    </form>
</div>
</template>
<script>
import regExp from '@/lib/regExp'
import {verifyBase} from '@/mixin/base'
export default {
  name: 'loginForm',
  data () {
    return {
      api: 'familyUser/getBack'
    }
  },
  mixins: [verifyBase],
  methods: {
    
  }
}  
</script>
<style lang="stylus" scoped>
  p.signin 
    text-align right 
    margin-top 14px
    a
      color #5e9c10
</style>

