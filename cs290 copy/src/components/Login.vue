/* eslint-disable */
<template lang="html">
  <div id="bg">
    <div id="bgq"></div>
    <div id="bx">
  <div id="firebaseui-auth-container"></div>
  
   <p v-if="user"></p><p v-if-else >You don't have an account? <router-link class="mock" to="/signup" >Browse as Guest</router-link>
   </p>

  </div>
</div>
</template>

<script>/* eslint-disable */
import firebase from 'firebase';
import firebaseUI from 'firebaseui'
import {config} from '../db';
export default {
  name: 'Login',

    created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;

    }
  },

  methods: {

   signIn (user) {
            this.setUser({
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                isAnonymous: user.isAnonymous
            })
        },
        refresh: function (){
    window.location.reload();
},
        signOut () {
            firebase.auth().signOut()
            this.setUser(null)
        },
        signUp: function() {
    firebase.auth().signInAnonymously();

},
setUser (user) {
            this.user = user
        }
  },
  mounted() {
    var uiConfig = {
    // require password each time
                credentialHelper: firebaseUI.auth.CredentialHelper.NONE,
                signInFlow: 'popup',
      signInSuccessUrl: '/home',
      signInOptions:[{
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,

                    requireDisplayName: true,
                }]
   };

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);

    firebase.auth().onAuthStateChanged(authState => {
            if (authState) {
                this.signIn(authState)


            }
        })


    },
}

</script>

<style >
.mock{
    color: yellow;
    display: block;
    margin: 2%;
   
}
#bx{

   text-align: center;
    margin: 0 40% ;
    margin-top: -100px;
    position: fixed;
    top: 50%;
    padding: 30px 30px;
    border-radius: 50px;
    box-shadow: 0px 0px 25px 3px rgba(255,255,255,0.6);
    color: white;
}

button{
    width: 100px;
    margin-bottom: 4%;
    color:black;
}

html{
    background-image: url(../assets/images/flower.gif);
    background-repeat: no-repeat;
    height: 100%;
    background-size: cover;
}
#bgq{
    background-color: rgba(0,0,0,0.6);
    min-height: 100%;
    min-width: 100%;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
input{
width: 170px;
}

#sup {
    color: white;
    background-color: white;
    padding: 3px;
    margin: 10% 0;
    width: 100px;
}

#rturn{
    margin: 5% 0;
}
#firebaseui-auth-container label {
    display: block;
    margin: 0 0 10px 0; /* Set the bottom margin to whatever you want */
}

a{
    text-decoration: none;
}
h1{
    font-family: 'Nanum Gothic', sans-serif;
    letter-spacing: 3px;
    font-size: 15px;
}

</style>
