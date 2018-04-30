/* eslint-disable */
<template>
  <div class="home">
  <div class="nav">
 
    
    <button  v-on:click="refresh">Sign Up</button>

</div>

<hr>
    <h1>{{msg}}</h1>

    <h3>Welcome to a page made by Duke students, for Duke students.</h3>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="article">
          <h4>Here you can do things like:</h4>
          <ul>
            <li>Get advice from other students.</li>
            <li>Post questions, tips or anything really.</li>
            <li>Browse through other students who are like you!</li>
          </ul>
        </div>
        <div class="article">
          <h4>Spaces at Duke</h4>
          <p><a href="https://studentaffairs.duke.edu/cma/about-us/facilities">CMA La Casa</a></p>
          <p><a href="https://studentaffairs.duke.edu/mlw">Mary Lou Williams Center for Black Culture</a></p>
        </div>
        <div class="article">
          <h4>Duke Computer Science</h4>
          <p>Graduation Requirements!</p>
          <ul>
            <li>Math 111L *,</li>
            <li>Math 112L *,</li>
            <li>CompSci 101L *,</li>
            <li>CompSci 201D,</li>
            <li>CompSci 230D,</li>
            <li>CompSci 250D,</li>
            <li>CompSci 310,</li>
            <li>CompSci 330,</li>
            <li>3 or 5 CompSci electives, depending on whether it's a BS or BA</li>
          </ul>
          <p>* Pre-requisite</p>
          <button class="btn btn-primary"><a href="https://www.cs.duke.edu/">Visit website</a></button>
        </div>
      </div>
      <img src="../assets/images/code.jpg" width="70%"></img>

    </div>


  </div>
</template>

<script>/* eslint-disable */
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
    },
    refresh: function (){
    window.location.reload();
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

  .row {
    text-align: center;
  }

  .article {
    padding: 20px;
  }

  ul li {
    list-style-type: none;
  }
  img {
    margin-top: 20px;
  }


</style>
