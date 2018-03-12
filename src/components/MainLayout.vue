<template>
  <div class="page">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>
<script>
import VHeader from '@/components/header/VHeader'
import VFooter from '@/components/footer/VFooter'
import VMain from '@/components/main/Main'
  export default {
    name: 'layout', 
    components: {
      VHeader,
      VFooter,
      VMain
    }
  }
</script>
<style lang="stylus" scoped>
.page
  width 1200px
  margin 0 auto
</style>


