<template>
<div class="page">
  <router-view></router-view>
</div>
</template>
<script>
  export default {
    name: 'loginLayout',
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

