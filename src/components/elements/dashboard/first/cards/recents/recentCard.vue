<template>
  <va-card class="recentCard">
    <va-card-title>Recently added movies</va-card-title>
    <va-divider />
    <div class="movies-wrapper">
      <va-button round="true" class="navbut-l">
        <va-icon name="arrow_back_ios_new"></va-icon>
      </va-button>
      <div class="movies">
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>
        <movie-card></movie-card>


      </div>
      <va-button round="true" class="navbut-r">
        <va-icon name="arrow_forward_ios_new" style="width: 24px"></va-icon>
      </va-button>
    </div>

  </va-card>
</template>

<script>
import MovieCard from "@/components/elements/dashboard/first/cards/recents/movieCard";

export default {
  name: "recentCard",
  components: {MovieCard},
  data() {
    return {
      value: 'One'
    }
  }
}
</script>

<style scoped>
.movies {
  padding-bottom: 2.5%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 3%;
}

.movies-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.movies-wrapper button:first-of-type {
}

.movies-wrapper button:last-of-type {
}

.movie-internal-wrapper {

}

.navbut-r, .navbut-l {
  margin-bottom: 8% !important;
}

@media only screen and (max-width: 1600px) {
  .movies div:nth-of-type(4) {
    display: none;
  }
}

@media only screen and (max-width: 2300px) {
  .movies div:nth-of-type(3) {
    display: none;
  }

}

@media only screen and (max-width: 500px) {
  .movies div:last-of-type {
    display: none;
  }

}

</style>