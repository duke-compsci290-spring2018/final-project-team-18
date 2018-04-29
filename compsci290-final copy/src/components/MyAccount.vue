<template>
  <div class="myaccount">
    <h1>{{title}}</h1>
    <h3>{{description}}</h3>
    <button type="button" class="btn btn-danger" v-on:click="logout">Log Out</button>
  </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: "MyAccount",
      data () {
          return {
            title: "My Account",
            description: "Change your settings here."
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

</style>
