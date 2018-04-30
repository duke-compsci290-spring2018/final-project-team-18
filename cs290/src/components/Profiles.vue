<template>
  <div class="profiles">

  <div class="nav">
  <router-link class= "link" to="/home">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/courses">Courses</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    <router-link class="link" to="/myaccount">My Account</router-link>
    <button  v-on:click="logout">Logout</button>


</div>
<div id="sp"></div>
<hr>


<div class="container">
<p>Search profiles to find what you're looking for: </p>
  <div class="search-wrapper">
    <input id="searchme" type="text" v-model="search" placeholder="Search profiles..."></input>
  </div>
  <div class="wrapper">
    <div class="caption" v-for="post in filteredList">

           <h3>{{post.firstname}} {{post.lastname}}</h3>

           <div id="description">
           <h4> Major </h4>{{post.major}}
            <h4> Role </h4>{{post.role}}
            <h4> Message </h4> "{{post.title}}"
           <h4> Class of {{post.class}}</h4>
            </div>

          <a id="b" v-bind:href="''+post.contact+''">Contact </a>

    </div>
  </div>
</div>

  </div>

</template>

<script>

import firebase from 'firebase';
import { ourapp } from '../db'
import VueFire from 'vuefire'
import Vue from 'vue'

Vue.use(VueFire)
var profiles= ourapp.ref('profiles');

     export default {
        name: "Profiles",

        firebase: {
            profiles: profiles
        },
        data () {

          return {
            profiles: {},
            search: ''
        }

     },
    computed:{
    filteredList() {

      return this.profiles.filter(item => {
         return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || item.major.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || item.firstname.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || item.lastname.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || item.class.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })



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



#searchme{
    width: 200px;
}
.container{
    color: maroon;
    font-size: 20px;
}
#b{
    border: 0.5px solid white;
    font-size: 10px;
    padding: 5px;
    color:white;
    border-radius: 5px;
}
 button{
    background-color: maroon;
    border-radius: 5px;
    color: white;
 }

#description{
    font-size: 15px;
    text-align:left;
    margin-bottom: 10%;
}
h4{
    color:yellow;
}
.caption{
   border: 2px solid maroon;
   color: white;
   float: left;
   margin: 5%;
   padding: 20px;
   border-radius: 20px;
   display: inline-block;
   background-color: maroon;

    font-family: 'Nanum Gothic', sans-serif;
    letter-spacing: 1px;
    font-size: 20px;
    width: 200px;

}

.c{
   border: 2px solid maroon;
   color: white;
   float: left;
   margin: 5%;
   padding: 20px;
   border-radius: 20px;
   display: inline-block;
   background-color: yellow;

    font-family: 'Nanum Gothic', sans-serif;
    letter-spacing: 1px;
    font-size: 20px;
    width: 200px;

}


a{
    text-decoration: none;
    color: yellow;
}

.link{
    color: maroon;
    text-decoration: none;
     padding: 10px;
    border: 2px solid white;
    background-color: white;
    margin: 10px;
    border-radius: 5px;


 }

 btn{
    background-color: maroon;
    border-radius: 5px;
    color: white;
    width: 20px;
 }
 .nav{
    height: 50px;
    width: 100%;
    padding: 10px;
 }

</style>

