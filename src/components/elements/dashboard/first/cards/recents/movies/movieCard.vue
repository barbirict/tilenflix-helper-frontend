<template>
  <div class="movie-card">
    <img class="poster" height="200" width="140"
         :src="movie.imgSrc" alt="image">
    <h3>{{ movie.title }}</h3>
    <p>Uploaded: {{ movie.uploaded }}</p>
  </div>
</template>

<script>
export default {
  name: "movieCard",
  props: ['movie']
}
</script>

<style scoped>
.movie-card {
  display: inline-block;
  padding-inline: 1%;
  text-align: left;
}

@media only screen and (max-width: 600px) {

}

.poster {
  border-radius: 2.5%;
}
</style>