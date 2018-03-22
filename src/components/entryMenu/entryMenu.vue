<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs4>
        <router-link :to='{name: "login"}'><img src='./registerLogin.jpg'></router-link>
      </v-flex>
      <v-flex xs4>
        <router-link :to='{name: "admin"}'><img src='./reserve.jpg'></router-link>
      </v-flex>
      <v-flex xs4>
        <a href=""><img src='./setting.jpg'></a>
      </v-flex>
      <!--<v-flex xs3>
        <a href=""><img src='./policy.jpg'></a>
      </v-flex>-->
    </v-layout>
  </v-container>
<!--<div>
  <div class="menu">
     todo: 登录, 登出互切 
    <router-link :to='{name: "login"}'><img src='./registerLogin.jpg'></router-link>
    <router-link :to='{name: "admin"}'><img src='./reserve.jpg'></router-link>
    <a href=""><img src='./setting.jpg'></a>
    <a href=""><img src='./policy.jpg'></a>
  </div>
</div>  -->
</template>
<script>
  export default {
    name: 'entryMenu'
  }
</script>
<style lang="stylus" scoped>
.menu
  display flex
  justify-content space-between
  // margin-top 32px
</style>

