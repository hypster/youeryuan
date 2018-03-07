<template>
<div class="page">
  <modal v-if="showModal" @close="showModal = false;messages=[]">
    <div slot="body">
      <ul>
        <li :key='m' v-for='m in messages'>{{m}}</li>
      </ul>
    </div>
    <h3 slot="header">您所填信息有误</h3>
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
        messages: []
      }
    },
    methods: {
      openModal(messages) {
        this.showModal = true;
        this.messages = messages;
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
.fade-enter-active, .fade-leave-active 
  transition: opacity .3s ease
.fade-enter, .fade-leave-to
  opacity: 0
</style>


