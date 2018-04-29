import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Profiles from '@/components/Profiles'
import MyAccount from '@/components/MyAccount'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: false
      }
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

router.beforeEach((to, from, next) => {
  let currentUser= firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router


