<template>
  <va-card class="recentCard">
    <va-card-title>Recently added movies</va-card-title>
    <va-divider />
    <div class="movies-wrapper">
      <movie-carousel class="mc"/>
    </div>

  </va-card>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import MovieCarousel from "@/components/elements/dashboard/first/cards/recents/movies/movieCarousel";
export default {
  name: "recentCard",
  components: {MovieCarousel},
  data() {
    return {
      value: 'One'
    }
  }
}
</script>

<style scoped>

.movies-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mc{
width: 90%;
  height: 100%;
}

.recentCard{
  height: 360px;
}
</style>