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
      next(response => {
        this.isLoading = false;
        console.log(response.status)
        if (response.status === 500) {
          return Promise.resolve({
            status: 'error',
            message: '服务器链接不上'
          });
        } else if (response.status === 404) {
          console.log(`${response.url}`)
          return Promise.resolve({
            status: 'error',
            message: '找不到对应的接口'
          })
        } else if (response.status === 200) {
          return response
        } else {
          return Promise.resolve({
            status: 'error',
            message: '系统异常, 请联系管理员'
          })
        }
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
