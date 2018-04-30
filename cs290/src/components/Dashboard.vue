
<template>
  <div class="dashboard">
   
  <div class="nav">
  <router-link class= "link" to="/home">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/courses">Courses</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    <router-link class="link" to="/myaccount">My Account</router-link>
    <button class="btn btn-danger" v-on:click="logout">Logout</button>
</div>
<hr><h1>{{title}}</h1>
     <div class="newPost">
      <h3>Add a New Post</h3>
      <label for="title">Title: </label>
       <br>
      <input id="title" type="text" v-model="newPost.title"></input>
       <br>
      <label for="body">Body: </label>
       <br>
      <textarea id=body type="text" v-model="newPost.body"></textarea>
       <br>
      <button class="btn btn-primary" @click="addPost">+ New Post</button>
    </div>
    <h2>Posts made by other students like you!</h2>
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="post in posts" :key="post">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>

            <button class="btn btn-danger" @click="deletePost(post['.key'])">Delete</button>
          </div>
        </div>

      </div>
  </div>
</template>

<script>import firebase from 'firebase'

import { ourapp } from '../db'
var postsRef = ourapp.ref('posts')

export default {
  name: 'Dashboard',
  firebase: {
    posts: postsRef
  },
  data () {
    return {
      newPost: {
        title: '',
        body: ''
      },
      title: 'Welcome to your feed!'
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    addPost: function () {
      postsRef.push(this.newPost);
      this.newPost.title = '';
      this.newPost.body = ''
    },
    deletePost: function (key) {
      postsRef.child(key).remove()
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
    border-radius: 5px;
    color: white;
 }
 .nav{
    height: 50px;
    width: 100%;
    padding: 10px;
 }
  .newPost {
    margin: 20px;
  }

  .newPost button {
    margin-top: 10px;
  }

</style>
