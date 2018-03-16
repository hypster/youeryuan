<template>
  <div>
    <v-navigation-drawer app v-model='drawer'>
    <v-card class="mt-5">
      <router-link :to="{name: 'add'}">
        <v-icon>add</v-icon>
      </router-link>
    </v-card>
    <v-divider></v-divider>
    <v-card v-for='(u,i) in user.content' :key='i'>
      <v-card-text>
        <font-awesome v-if='u.xb.value==1' icon='male'></font-awesome>
        <font-awesome v-else icon='female'></font-awesome>
      {{u.xm}}</v-card-text>
      <v-card-text>
        {{u.age}}
      </v-card-text>
    </v-card>
    </v-navigation-drawer>
    <v-toolbar extended class='page-header elevation-0 pb' style="height:170px" app :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="secondary--text hidden-sm-and-down">徐汇区幼儿园招生系统</span>
      </v-toolbar-title>
      <v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down">
      </v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content class="mt-5">
      <v-container fluid>
        <steppers>
          <router-view slot="view"></router-view>
        </steppers>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </div>
</template>
<script>

import fontAwesome from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

  import Steppers from "@/components/steppers/Steppers";
  import VHeader from "@/components/header/VHeader";
  import {mapState} from 'Vuex'
  // import NavigationDrawer from "@/components/navigationDrawer/NavigationDrawer";
  export default {
    data: () => ({
      dialog: false,
      drawer: null, 
    }),
    computed: mapState(['user']),
    props: {
      source: String
    },
    methods: {
      oninput(v) {
        this.drawer = v;
      }
    },
    components: {
      VHeader,
      Steppers,
      fontAwesome
      // NavigationDrawer
    }
  };

</script>
<style lang="stylus" scoped>
  .page-header {
    background: url('./header/bg.png') no-repeat;
  }

</style>
