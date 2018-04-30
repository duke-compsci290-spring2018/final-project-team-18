<template>
  <div class="course">
  <div class="nav">
    <router-link class= "link" to="/home">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/courses">Courses</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    <router-link class="link" to="/myaccount">My Account</router-link>
    <button class="btn btn-danger" v-on:click="logout">Logout</button>
  </div>
  
  <div id="courses">
    <h1>{{title}}</h1>
    <h3>{{description}}</h3>
    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="course" v-for="course in courses">
          <h4>{{course.title}}</h4>
          <p>{{course.name}}</p>
          <p>{{course.teacher}}</p>
          <button class="btn btn-success" v-on:click="course">View reviews!</button>
        </div>cd 
      </div>
    </div>
    <button class="btn btn-danger">Don't see your course? Add it!</button>
    </div>
    
    <div id="container">
    <h1> No reviews for this course</h1>
    </div>
  </div>
</template>

<script>/*eslint-disable*/
  export default {
    name: "Courses",
    data () {
      return {
        title: "Courses",
        description: "Reviews and advice!",
        courses: {
          1: {
            title: "CompSci 101",
            name: "Intro to Programming",
            teacher: "Susan Rodger"
          },
          2: {
            title: "CompSci 201",
            name: "Data Structures and Algorithms",
            teacher: "Owen Astrachan and Jeffrey Forbes"
          },
          6: {
            title: "CompSci 216",
            name: "Everything Data",
            teacher: ""
          },
          3: {
            title: 'CompSci 230',
            name: "Discrete Math for Computer Science",
            teacher: ""
          },
          4: {
            title: "CompSci 250",
            name: "Computer Architecture",
            teacher: ""
          },
          5: {
            title: "CompSci 290",
            name: "Individual Topics in Computer Science",
            teacher: ""
          }
        }
      }
    },
    methods: {
        
        request: function () {
            alert('Thank you for you request. An email has been sent, and we will get back to you shortly.')
        }
    }}
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

  .course button {
    color: black;
  }

</style>
