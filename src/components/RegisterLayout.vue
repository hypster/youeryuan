<template>
<div class="page">
  <register></register>
</div>
</template>
<script>
import Register from '@/components/register/Register'
  export default {
    name: 'loginLayout',
    components: {
      Register
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

