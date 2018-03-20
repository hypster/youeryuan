<template>
  <div>
    <v-navigation-drawer app v-model='drawer'>
    <div v-if="user">
      <v-card v-for='(u,i) in user.content' :key='i'>
        <v-card-text>
          <font-awesome v-if='u.xb.value==1' icon='male'></font-awesome>
          <font-awesome v-else icon='female'></font-awesome>
        {{u.xm}}</v-card-text>
        <v-card-text>
          {{u.age}}
        </v-card-text>
      </v-card>
    </div>
    <v-tooltip left>
      <v-btn slot="activator" fixed right bottom style="transform:translateY(-50%)" :to="{name: 'add'}" dark fab color="secondary">
        <v-icon>add</v-icon>
      </v-btn>
      <span>请添加您的宝贝</span>
    </v-tooltip>
    </v-navigation-drawer>
    <v-toolbar class='page-header elevation-0 pb' style="height:70px" app :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <router-link :to="{name: 'layout'}">
          <span class="secondary--text hidden-sm-and-down">徐汇区幼儿园招生系统</span>
        </router-link>
      </v-toolbar-title>
      <!--<v-text-field flat solo-inverted prepend-icon="search" label="Search" class="hidden-sm-and-down">
      </v-text-field>-->
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-dialog v-model='dialog' :directTo='directTo' :messages='messages' max-width="500px">
    <v-card>
      <v-card-text>
        <v-list>
          <v-list-tile avatar v-for='(m, i) in messages' :key="i">
            <v-list-tile-title>{{m}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card-text>
    <v-card-actions>
        <v-btn color="primary" flat @click.stop="dialog=false" :to="directTo">确定</v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
    <v-content class="mt-0">
      <v-container fluid>
        <router-view slot="view"></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </div>
</template>
<script>

import fontAwesome from '@fortawesome/vue-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import VHeader from "@/components/header/VHeader";
import {mapState} from 'vuex'
import Bus from '@/components/bus/Bus'
  // import NavigationDrawer from "@/components/navigationDrawer/NavigationDrawer";
  export default {
    data: () => ({
      dialog: false,
      drawer: null, 
      messages: [],
      directTo: null
    }),
    computed: mapState(['user']),
    props: {
      source: String
    },
    methods: {
      oninput(v) {
        this.drawer = v;
      },
      onOpen(payload) {
        this.dialog = true
        if(payload.messages)
          this.messages = payload.messages
        if(payload.directTo)
          this.directTo = payload.directTo
      }
    },
    components: {
      VHeader,
      fontAwesome,
      // NavigationDrawer
    },
    created() {
      Bus.$on('openDialog', this.onOpen);
    }
  };

</script>
<style lang="stylus" scoped>
  .page-header {
    background: url('./header/bg.png') no-repeat;
  }

</style>
