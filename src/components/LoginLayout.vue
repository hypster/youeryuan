<template>
<div class="page">
  <login></login>
</div>
</template>
<script>
import Login from '@/components/login/Login'
  export default {
    name: 'loginLayout',
    components: {
      Login
    }
  }
</script>
<style lang="stylus" scoped>
.page
  position fixed
  width 100%
  height 100%
  background url(register/bg.jpg) no-repeat
  background-position-y top
  background-position-x center
</style>

