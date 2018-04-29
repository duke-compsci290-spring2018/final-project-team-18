// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import firebase from 'firebase'
let app;
// configure and connect to database
var config = {
  apiKey: "AIzaSyCga8HBDnUCgjS7utee6JzcL_mytgBblOE",
  authDomain: "cs290-62ce7.firebaseapp.com",
  databaseURL: "https://cs290-62ce7.firebaseio.com",
  projectId: "cs290-62ce7",
  storageBucket: "cs290-62ce7.appspot.com",
  messagingSenderId: "143036517691"
};
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});


