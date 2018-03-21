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
import Appo from '@/components/appointment/Appo'
import store from '@/store/store'

import EditLocal from '@/components/userFormLocalEdit/UserFormLocalEdit'
import EditProvince from '@/components/userFormProvinceEdit/UserFormProvinceEdit'
import EditOthers from '@/components/userFormOthersEdit/UserFormOthersEdit'
Vue.use(Router)

const router = new Router({
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
      // meta: {requiresAuth: true},
      children: [
        {
          path: 'children',
          name: 'admin',
          component: Children
        },
        {
          path: 'add',
          name: 'add',
          component: Add
        },
        {
          path: 'appo',
          name: 'appo',
          component: Appo
        },
        {
          path: 'edit/local/:id',
          name: 'editLocal',
          component: EditLocal
        },
        {
          path: 'edit/province/:id',
          name: 'editProvince',
          component: EditProvince
        },
        {
          path: 'edit/others/:id',
          name: 'editOthers',
          component: EditOthers
        },
        {
          path: '',
          component: Children
        }
      ]
    }
  ]
})

router.beforeEach((to, from , next) => {
  // debugger
  if(to.matched.some(r => r.meta.requiresAuth)) {
    if (store.state.user || JSON.parse(localStorage.getItem('user'))) {
      next()
    } else {
      next({name: 'login'})
    }
  } else {
    next()
  }
})
export default router
