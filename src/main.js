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
Vue.http.options.crossOrigin = true;

require('@/lib/common.styl');
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
