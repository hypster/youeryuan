import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout'
import UserLayout from '@/components/UserLayout'
import Register from '@/components/register/Register'
import Login from '@/components/login/Login'
import Forgot from '@/components/forgot/Forgot'

import AdminLayout from '@/components/AdminLayout'
import Children from '@/components/children/Children'

import Add from '@/components/add/Add'
Vue.use(Router)

export default new Router({
  mode: 'hash',
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
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        {
          path: 'children',
          name: 'children',
          component: Children
        },
        {
          path: 'add',
          name: 'add',
          component: Add
        },
        {
          path: '',
          component: Children
        }
      ]
    }
  ]
})
