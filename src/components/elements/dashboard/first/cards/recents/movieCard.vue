<template>
<div class="movie-card">
  <img class="poster" height="200" width="140" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2a5bb2105168471.5f733bb4cec20.jpg">
  <h3>Dune</h3>
  <p>Uploaded: 10.11.2021</p>
</div>
</template>

<script>
export default {
  name: "movieCard"
}
</script>

<style scoped>
.movie-card{
  display: inline-block;
  padding-inline: 1%;
  text-align: left;
}
@media only screen and (max-width: 600px){

}
.poster{
  border-radius: 2.5%;
}
</style>