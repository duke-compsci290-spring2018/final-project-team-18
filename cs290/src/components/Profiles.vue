<template>
  <div class="profiles">
  
  <div class="nav">
  <router-link class= "link" to="/home">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    <router-link class="link" to="/myaccount">My Account</router-link>
    <button  v-on:click="logout">Logout</button>
    
</div>
<div id="sp"></div>
<hr>

    <h1>{{title}}</h1>
  </div>

</template>

<script>
import firebase from 'firebase';
    export default {
        name: "Profiles",
        data () {
          return {
            title: "Get Advice and Tips from Others!"
          }
        },
         methods: {
          logout: function() {
            firebase.auth().signOut().then(() => {
              this.$router.replace('login')
            })
          }
      }
    }
</script>

<style scoped>
.link{
    color: maroon;
    text-decoration: none;
     padding: 10px;
    border: 2px solid white;
    background-color: white;
    margin: 10px;
    border-radius: 5px;
    
   
 }
 
 button{
    background-color: maroon;
    border-radius: 5px;
    color: white;
 }
 .nav{
    height: 50px;
    width: 100%;
    padding: 10px;
 }

</style>
