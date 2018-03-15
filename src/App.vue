<template>
  <v-app id="app">
    <router-view/>
    <!-- <loading v-show='isLoading'></loading> -->
    <transition name="fade">
      <v-mask v-show='isLoading'></v-mask>
    </transition>
    <transition name="fade">
      <pulse-loader class="loader" v-show="isLoading"></pulse-loader>
    </transition>
  </v-app>
</template>

<script>

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import VMask from '@/components/mask/Mask'
// import spi
import Vue from 'vue';
export default {
  name: "App",
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    PulseLoader,
    VMask
  },
  mounted() {
    Vue.http.interceptors.push((request, next) => {
      this.isLoading = true;
      console.log("waiting for response");
      next(response => {
        console.log("response came");
        this.isLoading = false;
        
        if (response.status == 500 || response.status == 404) {
          return Promise.resolve(response)
        }
        return response;
      });
    });
  }
};
</script>

<style lang='stylus' scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Microsoft Yahei';
}
.loader 
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)
  
</style>
<style>
@import url("./assets/reset.css");
</style>
