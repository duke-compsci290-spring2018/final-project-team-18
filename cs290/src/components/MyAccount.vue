/* eslint-disable */
<template>
  <div class="myaccount">
  <div class="nav">
  <router-link class= "link" to="/home">Home</router-link>
    <router-link class="link" to="/dashboard" >Dashboard</router-link>
    <router-link class="link" to="/courses">Courses</router-link>
    <router-link class="link" to="/profiles">Profiles</router-link>
    <router-link class="link" to="/myaccount">My Account</router-link>
    <button  v-on:click="logout">Logout</button>

</div>
<div id="sp"></div>
<hr>
    <h1>{{title}}</h1>
    <br>
    <h3>{{description}}</h3>
    
    <img src="../assets/images/profilepic.png" width="10%" alt="default profile picture"/>
    <br>
    
    <div id="photo">
    <h3>Change Photo</h3>
    <form class="form-inline" @submit.prevent="addImage">
        <div class="form-group">
            <input type="file" class="form-control" id="files" name="files[]">
        </div>
        <input type="submit" class="btn btn-default" value="Add" />
    </form>
    </div>
    
    
    <div id="email">
    <h3>Your email: {{email}}</h3>
    <button v-on:click="updateEmail">Change my email</button>
    </div>
    
    <div id="admin">
    <h3>Request Admin Control</h3>
    <button v-on:click="request">Request</button>
    </div>
    
    <div id="profile">
    <h3>Edit Profile</h3>
    <button v-on:click="">Edit Profile</button>
    </div>
    
    
    
  </div>
</template>

<script>/* eslint-disable */
    import firebase from 'firebase';

    var user = firebase.auth().currentUser;

    export default {
        name: "MyAccount",
      data () {
          return {
            title: "My Account",
            description: "Change your settings here.",
            email: user.email
          }
      },
      methods: {
          logout: function() {
            firebase.auth().signOut().then(() => {
              this.$router.replace('login')
            })
          },
          changeBackgroundImage: function () {
            // get input element user used to select local image
            var input = document.getElementById('files')
            // check that all fields in the form been completed
            if (this.newImageTitle && input.files.length > 0) {
                this.onSubmit(this.newImageTitle, input.files[0])
            }
            // reset values displayed in form so user knows to input new data
            this.newImageTitle = ''
            input.value = ''
        },
        request: function () {
            alert('Thank you for you request. An email has been sent, and we will get back to you shortly.')
        }
    }}
</script>

<style scoped>


#admin{
    border: 1px solid maroon;
    margin: 5% 30%;
    padding: 20px;
    border-radius: 5px;
    
}
#email{
    border: 1px solid maroon;
    margin: 5% 30%;
    padding: 20px;
    border-radius: 5px;
    overflow: hidden;
    
}

#profile{
    border: 1px solid maroon;
    margin: 5% 30%;
    padding: 20px;
    border-radius: 5px;
    overflow: hidden;
    
}

#photo{
    border: 1px solid maroon;
    margin: 5% 30%;
    padding: 20px;
    border-radius: 5px;
    
}

.form-inline{
    margin: 5%;
    color: maroon;
}

 input{
    background-color: maroon;
    border-radius: 5px;
    color: white;
 }

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



</style>
