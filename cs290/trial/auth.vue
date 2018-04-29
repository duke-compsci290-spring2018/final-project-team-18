<template>
<div id="login">
<div id="space"></div>
<div id="creadentials">
<ul>

    <li v-if="user"><a>{{user.name}}</a></li>
    <li v-if="user" @click="signOut"><a><span class="glyphicon glyphicon-log-out"></span>Logout</a></li>
    <li v-if id="signInPopup" @click="signInPopup"><a><span class="glyphicon glyphicon-user"></span>Sign In</a></li>
    <li v-if id="registerPopup" @click="registerPopup"><a><span class="glyphicon glyphicon-user"></span>Register</a></li>
    <!-- sign in "popup" container does not popup for email authentication, so provide so styling help -->
    <div id="firebaseui-auth-container" class=" popup: isShown "></div>
</ul>
</div>
</div>
</template>

<script>
import Firebase from 'firebase'
import FirebaseUI from 'firebaseui'
// single instance of popup credentials UI
var authUI = new FirebaseUI.auth.AuthUI(Firebase.auth())

export default {
    name: 'Authentication',
    data () {
        return {
            isShown: true
        }
    },
    // methods provided to change value of user in parent component
    props: [
        'getUser',
        'setUser'
    ],
    // let HTML template access user as if it were a variable in this component
    computed: {
        user () {
            return this.getUser()
        }
    },
    // methods for signing in and out
    methods: {
        signInPopup () {
            authUI.start('#firebaseui-auth-container', {
                // open the authentication flow as a popup
                signInFlow: 'popup',
                // require password each time
                //credentialHelper: FirebaseUI.auth.CredentialHelper.NONE,
                // new users automatically created for new emails
                signInOptions: [{
                    provider: Firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true
                }],
                
                // respond to authenticaion attempts
                callbacks: {
                    signInSuccessWithAuthResult: authResult => {
                        // save interesting parts of user data
                        this.signIn(authResult.user)
                        // hide styling again
                        this.isShown = false
                        // do not redirect
                        return false
                    },
                    uiShown: () => {
                        // style UI container as a popup
                        this.isShown = true
                    },
                    signInSuccessUrl: '@/components/Home'
                }
            })
        },
        signIn (user) {
            this.setUser({
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                isAnonymous: user.isAnonymous
            })
        },
    },
    mounted () {
        // allow user to automatically log in if returning to site after refresh
        Firebase.auth().onAuthStateChanged(authState => {
            if (authState) {
                this.signIn(authState)
            }
        })
    }
}
</script>

<style >


#popup{
    text-align: center;
    
}
html{
    background-image: url(../assets/images/flower.gif);
    background-repeat: no-repeat;
    height: 100%;
    background-size: cover;
}
#space{
    background-color: rgba(0,0,0,0.6);
    min-height: 100%;
    min-width: 100%;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
#firebaseui-auth-container{
    width: 300px;
    position: relative;
    top: 50%;
    margin: 5%;
    padding: 15px 60px;
    border-radius: 50px;
    box-shadow: 0px 0px 25px 3px rgba(255,255,255,0.6);
    color: white;
    display:inline-block;
}

#signInPopup{
    width: 100px;
    position: relative;
    top: 50%;
    padding: 15px 60px;
    border-radius: 50px;
    box-shadow: 0px 0px 25px 3px rgba(255,255,255,0.6);
    color: white;
    display:inline-block;
}

#registerPopup{
    width: 100px;
    position: relative;
    top: 50%;
    padding: 15px 60px;
    border-radius: 50px;
    box-shadow: 0px 0px 25px 3px rgba(255,255,255,0.6);
    color: white;
    display:inline-block;
}
ul{
    list-style: none;
    text-align: center;
}
a{
    text-decoration: none;
}

input{
    width: 300px;
}
h1{
    font-family: 'Nanum Gothic', sans-serif;
    letter-spacing: 3px;
    font-size: 15px;
}

</style>