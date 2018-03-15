// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import {baseUrl} from '@/lib/config';
Vue.http.options.root = baseUrl;
Vue.http.options.credentials = true;

// Vue.http.options.withCredentials = true
// Vue.http.options.crossDomain = true
// Vue.http.options.crossOrigin = true;

import 'babel-polyfill'
//material
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.lightGreen.darken1,
    secondary: colors.lime.lighten2,
    accent: colors.lime.accent2,
    error: colors.red.lighten2,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  }
})
// import 'vuetify/dist/vuetify.min.css'


import './lib/common.styl'
Vue.config.productionTip = false

import store from '@/store/store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
