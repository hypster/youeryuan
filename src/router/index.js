import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout'
import RegisterLayout from '@/components/RegisterLayout'
import LoginLayout from '@/components/LoginLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: MainLayout
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterLayout
    },
    {
      path: '/login',
      name: 'login',
      component: LoginLayout
    }
  ]
})
