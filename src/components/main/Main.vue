<template>
  <div class="main">
    <bulletin></bulletin>
    <div class="banner"></div>
    <entry-menu></entry-menu>
  </div>
</template>
<script>
import Bulletin from '@/components/bulletin/Bulletin'
import EntryMenu from '@/components/entryMenu/entryMenu'
  export default {
    name: 'v-main',
    components: {
      Bulletin,
      EntryMenu
    }
  }
</script>
<style lang="stylus" scoped>
.main
  padding-top 16.3vh
.banner
  background url(banner.jpg) no-repeat
  height 44vh
</style>

