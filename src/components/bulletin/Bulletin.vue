<template>
  <div class="bulletin">
    <div class="bulletinWrap">
      <p><i>公告</i>：提供权威的学前教育论文、教学案例、教材和课件下载。免费为幼儿园提供信息发布的渠道,和家长交流的平台</p>
      <button class="more"><a href=''>更多</a></button>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" scoped>
.bulletin
  padding 2vh 0
  box-sizing border-box
  color #666
  .bulletinWrap
    display flex
    justify-content space-between
  i
    font-weight 700
  button.more
    background-color #7cb92e
    border-radius 20px
    width 59px
    height 26px
    a
      color #fff
      text-decoration none 
      font-size 14px
</style>

