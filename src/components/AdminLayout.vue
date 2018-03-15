<template>
  <div>
  <navigation-drawer :value="drawer" @input='oninput'>
  </navigation-drawer>
  <v-toolbar extended class='page-header elevation-0 pb' style="height:170px" app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
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
import Steppers from '@/components/steppers/Steppers'
import VHeader from '@/components/header/VHeader'
import NavigationDrawer from '@/components/navigationDrawer/NavigationDrawer'
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'contacts', text: 'Contacts' },
        { icon: 'history', text: 'Frequently contacted' },
        { icon: 'content_copy', text: 'Duplicates' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'add', text: 'Create label' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' }
          ]
        },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Go to the old version' }
      ]
    }),
    props: {
      source: String
    },
    methods: {
      oninput(v) {
        this.drawer = v
      }
    },
    components: {
      VHeader,
      Steppers,
      NavigationDrawer
    }
  }
</script>
<style lang="stylus" scoped>
.page-header
  background url('./header/bg.png') no-repeat
</style>