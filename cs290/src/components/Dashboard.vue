<template>
  <div class="dashboard">
    <h1>{{title}}</h1>



    <!--<div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="post in posts">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
            <p>{{post.area}}</p>
            <p>{{post.user}}</p>
            <p><a href="#">Read More...</a></p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: "Dashboard",
    data () {
      return {
        title: "Welcome to your feed!"
      }
    }
    }
</script>

<style scoped>

</style>
