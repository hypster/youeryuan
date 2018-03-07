import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout'
import UserLayout from '@/components/UserLayout'
import Register from '@/components/register/Register'
import Login from '@/components/login/Login'
import Forgot from '@/components/forgot/Forgot'

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
      path: '/user',
      component: UserLayout,
      children: [
        {
          path: 'register',
          name: 'register',
          component: Register
        },
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'forgot',
          name: 'forgot',
          component: Forgot
        },
        {
          path: '',
          component: Register
        }
      ]
    }
  ]
})
