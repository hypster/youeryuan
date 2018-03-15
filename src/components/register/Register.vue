<template>
<div class="formWrap">
    <img class="avatar" src="./avatar.png" alt="">
    <img class="font" src="./registerFont.png" alt="">
    <form action="">
      <label for="">手机号：<input v-model="mobile" type="text"></label>
      <label for="">密码：<input v-model='pass' type="password"></label>
      <label for="">确认密码：<input v-model='confirmPass' type="password"></label>
      <label class="verificationCode" for="">短信验证码：<input type="text" v-model='textCode'>
        <button style="padding:0 20px"
           class="getCode" :class="{disabled: waiting}" 
           :disabled='waiting' @click.prevent type='button' 
           @click='getSMSCode(1)'>
           {{waiting? `剩余：\n${countdown}秒` : '获取'}}
        </button>
      </label>
      <!-- <p v-show='waiting' class="countdown"></p> -->
      <button type="button" class="register" @click.prevent='register(api)' :class="{disabled: disable}" :disabled='disable'>注 册</button>
      <p class="signin"><router-link :to="{name: 'login'}">已有账号，立即登陆</router-link></p>
    </form>
</div>
</template>
<script>
let regExp = require('@/lib/regExp');
import {verifyBase} from '@/mixin/base'
export default {
  name: 'loginForm',
  data () {
    return {
      api: 'familyUser/register'
    }
  },
  methods: {
    
  },
  mixins: [verifyBase]
}  
</script>
<style lang="stylus" scoped>
  p.signin 
    text-align right 
    margin-top 14px
    a
      color #5e9c10
      text-decoration none
</style>

