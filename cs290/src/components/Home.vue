
<template>
  <div class="home">
  <div class="nav">
  <router-link class= "link" to="/home">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    <router-link class="link" to="/myaccount">My Account</router-link>
    <button  v-on:click="logout">Logout</button>
    
</div>
<div id="sp"></div>
<hr>
    <h1>{{msg}}</h1>

    <h3>Welcome to a page made by Duke students, for Duke students.</h3>

    

  </div>
</template>

<script>
  import firebase from 'firebase';
export default {
  name: 'home',
  data () {
    return {
      msg: "CompSci Latinx and Black Students at Duke"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
