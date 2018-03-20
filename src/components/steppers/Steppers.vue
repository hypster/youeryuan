<template>
  <v-stepper v-model="$store.state.stage">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="stage>1">登记</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="stage>2">报名</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" :complete="stage>3">预约</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4" :complete="stage>4">下载</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <slot name="view"></slot>
      <!-- <v-stepper-content step="1">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content> -->
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import {mapGetters, mapState} from 'vuex'
  export default {
    name: 'steppers',
    data() {
      return {
        
      }
      // return mapState('stage')
      // return {
      //   stage: this.$store.state.stage
      // }
    },
    computed: mapState({
      stage: state => state.stage
    })
  }
</script>