<template>
  <div class="dashboard">
  
  <div class="nav">
  <router-link class= "link" to="/home">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    
    <button  v-on:click="logout">Logout</button>
    
</div>
<div id="sp"></div>
<hr> 
    <h1>{{title}}</h1>



    <!--<div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="post in posts">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
            <p>{{post.area}}</p>
            <p>{{post.user}}</p>
            <p><a href="#">Read More...</a></p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import firebase from 'firebase';
  export default {
    name: "Dashboard",
    data () {
      return {
        title: "Welcome to your feed!"
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
