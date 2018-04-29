// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
//import Login from './Login'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import firebaseui from 'firebaseui';


import {config} from './db'
//import Login from './Login'
Vue.use(VueRouter)

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  
  router,
    created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/home')
      } else {
        this.$router.push('/Login')
      }
     });
    },
//    created() {
//    firebase.initializeApp(config);
//    firebase.auth().onAuthStateChanged((user) => {
//      if(user) {
//        this.$router.push('/success')
//      } else {
//        this.$router.push('/auth')
//      }
//     });
//    },
//  components: { App },
//  template: '<App/>'
    el: '#app',
    render: h => h(App)
})


