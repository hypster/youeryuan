<template>
  <header class="page">
    <div class="wrap">
      <img class="title" src="./title.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
header.page
  position absolute
  top 0 
  left 0
  right 0
  background url(bg.png) no-repeat
  background-size cover
  height 16.3vh
.wrap
  width 1200px
  margin 0 auto
  padding-top 50px
  .title
    height 54px
</style>
