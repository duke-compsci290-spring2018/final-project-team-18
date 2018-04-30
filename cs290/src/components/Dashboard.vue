/* eslint-disable */
<template>
  <div class="dashboard">
  <div class="nav">
  <router-link class= "link" to="/home">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    <router-link class="link" to="/myaccount">My Account</router-link>
    <button  v-on:click="logout">Logout</button>
</div>
<div id="sp"></div>
<hr><h1>{{title}}</h1>
    <div class="newPost">
      <h3>Add a New Post</h3>
      <p>Title: </p>
      <input type="text"/>
      <p>Body: </p>
      <input type="text"/>
      <button @click="addPost">+ New Post</button>
    </div>
    <form @submit.prevent="addPost">
      <input v-model="newPost"/>
      <button>Add</button>
    </form>
    <ul>
      <li v-for="post in posts" :key="post">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
        <button @click="deletePost(post['.key'])"></button>
      </li>
    </ul>
  </div>
</template>

<script>import firebase from 'firebase'

import { ourapp } from '../db'
var posts = ourapp.ref('posts')

export default {
  name: 'Dashboard',
  firebase: {
    posts: posts
  },
  data () {
    return {
      newPost: '',
      title: 'Welcome to your feed!',
      posts: {}
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addPost: function () {
      if (this.newPost.trim()) {
        posts.push({
          post: {
            title: this.newPost.title,
            body: this.newPost.body
          }
        })
        this.newPost = {}
      }
    },
    deletePost: function (key) {
      posts.child(key).remove();
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
