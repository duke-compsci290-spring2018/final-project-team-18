<template>
  <div id="app">
    <router-link class= "link" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    <router-link class="link" to="/myaccount">My Account</router-link>
    <router-view/>
  </div>
</template>



<script>
  import Home from './components/Home.vue'


  export default {
    name: 'App',
    components: {
      Home
    }
}
</script>

<style>
  #app {
    padding: 20px;
    background-color: crimson;
  }
  .link {
    margin-left: 30px;
    color: black;

  }



</style>
