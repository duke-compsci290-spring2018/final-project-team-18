<template>
  <div class="home">
    <h1>{{msg}}</h1>

    <h3>Welcome to a page made by Duke students, for Duke students.</h3>

    <button v-on:click="logout">Logout</button>

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



</style>
