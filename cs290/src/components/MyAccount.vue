/* eslint-disable */
<template>
  <div class="myaccount">
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
    <br>
    <h3>{{description}}</h3>
    <br>
    <img src="../assets/images/profilepic.png" width="10%" alt="default profile picture"/>
    <br>
    <button id="pfp" class="btn btn-primary">Change my picture</button>
    <h3>Your email: {{email}}</h3>
    <button @click="updateEmail">Change my email</button>

  </div>
</template>

<script>/* eslint-disable */
    import firebase from 'firebase';

    var user = firebase.auth().currentUser;

    export default {
        name: "MyAccount",
      data () {
          return {
            title: "My Account",
            description: "Change your settings here.",
            email: user.email
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
