<template>
<div class="signup">
</div>
</template>

<script>
import firebase from 'firebase'

export default {
name: "signUp",
methods: {
signUp: function() {
    firebase.auth().signInAnonymously();
}}
}

</script>

<style scoped>
.sign-up {
margin-top: 40px;
}
input {
margin: 10px 0;
width: 20%;
padding: 15px;
}
button {
margin-top: 10px;
width: 10%;
cursor: pointer;
}

span {
display: block;
margin-top: 20px;
font-size: 11px;
}

</style>
