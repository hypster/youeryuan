import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    saveUser(state, payload) {
      this.user = payload.user
    }
  }
})