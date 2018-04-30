/* eslint-disable */
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
    <div class="row"> // eslint-disable-next-line
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="profile in profiles">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{profile.firstname}}</h3>
            <p>{{profile.lastname}}</p>
            <p>{{profile.major}}</p>
            <p>{{profile.class}}</p>
            <p><a href="#">Read More...</a></p>
            <button  v-on:click="gotData">GN</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>/* eslint-disable */
import firebase from 'firebase';


import ourapp from '../db'




export const usersRef = firebase.database().ref().child('name');
     export default {
        name: "Profiles",

        data () {
          return {
            title: "Get Advice and Tips from Others!",
            profiles: [{
              firstname: 'Judyth',
              lastname: 'Estrada',
              major: 'Computer Science',
              class: '2020',
              contact: 'https://www.facebook.com/dania.estrada.87'
            }]
          }
        },
         methods: {


          logout: function() {
            firebase.auth().signOut().then(() => {
              this.$router.replace('login')
            })
          },
          load: function () {
         var data = {title: "Need help with CS101",

              firstname: 'Baerack',
              lastname: 'Obama',
              major: 'Political Science',
              class: '2020',
              contact: 'https://www.facebook.com/dania.estrada.87'
       };

firebase.database().ref('profiles').push(data);
},
gotData: function(){

    var test = firebase.database().ref.child('profiles');

    for (i = 0; i < test.length; i++) {
    text += test[i] + "<br>";
}
    console.log(database);


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




var todosRef = db.ref('todos')

new Vue({
  el: '#app',
  data: {
    newTodoText: ''
  },
  firebase: {
    todos: todosRef.limitToLast(25)
  },
  methods: {
    addTodo: function () {
      if (this.newTodoText) {
        todosRef.push({
          text: this.newTodoText
        })
        this.newTodoText = ''
      }
    },
    updateTodoText: function (todo, newText) {
    	todosRef.child(todo['.key']).child('text').set(newText)
    },
    removeTodo: function (todo) {
      todosRef.child(todo['.key']).remove()
    }
  }
})
