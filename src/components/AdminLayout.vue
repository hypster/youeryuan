<template>
  <div>
  <v-navigation-drawer app>
  </v-navigation-drawer>
  <v-toolbar app>
    <v-header></v-header>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</div>
</template>
<script>
import VHeader from '@/components/header/VHeader'
  export default {
    components: {
      VHeader
    }
  }
</script>
<style lang="stylus" scoped>
  

  
</style>