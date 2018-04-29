<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../db';
export default {
  name: 'Login',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/home',
      signInOptions:[{
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true
                }]
                   
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>

<style lang="css">

#firebaseui-auth-container{
text-align: center;
    margin: 0 40% ;
    margin-top: -100px;
    position: fixed;
    top: 50%;
    padding: 15px 60px;
    border-radius: 50px;
    box-shadow: 0px 0px 25px 3px rgba(255,255,255,0.6);
    color: white;
}
</style>