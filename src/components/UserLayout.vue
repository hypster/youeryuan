<template>
<div class="page">
  <modal v-if="showModal" @close="onclose">
    <div slot="body">
      <ul class="list">
        <li :key='m' v-for='m in messages'>{{m}}</li>
      </ul>
    </div>
    <h3 slot="header">{{header? header: ''}}</h3>
  </modal>
  <transition name="fade" mode='out-in'>
    <router-view v-on:openModal='openModal'></router-view>
  </transition>
</div>
</template>
<script>
import Modal from '@/components/modal/Modal'
  export default {
    name: 'userLayout',
    data() {
      return {
        showModal: false,
        messages: [],
        header: []
      }
    },
    methods: {
      openModal(payload) {
        this.showModal = true;
        this.messages = payload.messages;
        this.header = payload.header;
      },
      onclose() {
        this.showModal = false;
        this.messages=[];
        this.header = ''
      }
    },
    components: {
      Modal
    }
  }
</script>
<style lang="stylus" scoped>
.page
  position fixed
  width 100%
  height 100%
  background url(register/bg.jpg) no-repeat
  background-position-y top
  background-position-x center
ul
  list-style-type square
</style>


