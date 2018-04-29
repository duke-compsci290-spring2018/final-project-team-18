<template>
  <div id="app">
    <login class="nav navbar-nav navbar-right"
                    :getUser="getUser"
                    :setUser="setUser">
                </login>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>






<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>


import {storageRef } from './db'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
        Login
    }, 
    methods: {
        getUser () {
            return this.user
        },
        setUser (user) {
            this.user = user
        },
        navigateTo: function (nav) {
    // Do what you want here.
    // this.saveTheThing()
    this.$router.go({
        path: main.html
    })
}
        
    }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

