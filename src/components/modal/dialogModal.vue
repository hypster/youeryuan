<template>
  <v-layout row justify-center>
    <!-- <v-btn color="primary" dark @click.native.stop="dialog = true">Open Dialog</v-btn> -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-toolbar :color="type || 'primary'" dark>
          <v-toolbar-title>{{title || '提示'}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="dialog = false" title="关闭">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          {{message}}
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<!-- 提示弹出框 -->
<script>
  export default {
    data () {
      return {
        dialog: true
      }
    },
    props: ['dialog', 'type', 'title', 'message']
  }
</script>