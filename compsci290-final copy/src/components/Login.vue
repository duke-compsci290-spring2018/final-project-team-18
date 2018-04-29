<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button v-on:click="signIn">Login</button>
    <p>Don't have an account? You can create one <router-link to="/signup">here.</router-link></p>
  </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "login",
        data: function() {
          return {
            email: '',
            password: ''
          }
        },
      methods: {
          signIn: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              (user) => {
                this.$router.replace('home')
              },
              (err) => {
                alert("Oops, there has been an error. " + err.message)
              }
            );
          }
      }
    }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    cursor: pointer;
    margin-top: 20px;
    width: 10%;
  }

  p {
    margin-top:40px;
    font-size: 13px;
  }

  p a{
    text-decoration: underline;
    cursor: pointer;
  }

</style>
