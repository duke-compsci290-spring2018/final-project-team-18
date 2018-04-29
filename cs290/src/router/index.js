import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

import Dashboard from '@/components/Dashboard'
import Profiles from '@/components/Profiles'
import MyAccount from '@/components/MyAccount'
import SignUp from '@/components/SignUp'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
      {
      path: '/home',
      name: 'home',
      component: Home
    },
        {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: Profiles,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/myaccount',
      name: 'My Account',
      component: MyAccount,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: "Sign Up",
      component: SignUp
    }
  ]
})

export default router;
//import Vue from 'vue'
//import Router from 'vue-router'
//import Login from '@/components/Login'
//import Home from '@/components/Home'
//
//const router = new VueRouter({
//  mode: 'history',
//  routes: [
//    { path: '/', component: Login },
//    { path: '/auth', component: Home },
//    { path: '/success', component: AuthSuccess }
//  ]
//});
//export default router;