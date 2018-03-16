<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="e1 > 0">已登记</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="e1 > 1">已报名</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" :complete="e1 > 2">已预约</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4" :complete="e1 > 4">已下载</v-stepper-step>
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
  export default {
    name: 'steppers',
    data() {
      return {
        e1: -1
      }
    }
  }
</script>