<template>
  <div id="app">
      
    <router-view/>
  </div>
</template>

<script>

import firebase from 'firebase';

export default {
  name: 'app',
 data () {
        return {
            // state for vue-images component, must be established BEFORE component is rendered
            images: [],
            // useful data about the current user
            user: null
        }
    },
  methods: {
   
   
         logout: function() {
      firebase.auth().signOut().then(() => {
        <router-link class= "link" to="/login">Home</router-link>
      })
    }
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
