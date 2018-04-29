import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

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