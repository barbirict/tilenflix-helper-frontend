<template>
  <va-card class="recentCard">
    <!--movies-display-->
    <h2 class="titel">Recently added movies</h2>
    <div class="movies-wrapper">
    <div class="movies">
      <va-button class="navbut-l"><va-icon></va-icon></va-button>
       <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
        <va-button class="navbut-r"><va-icon></va-icon></va-button>

    </div>
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
.movies{
  /* padding-inline: 2.5%;*/
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  text-align: center;
  display: flex;
  align-items: center;
}
.titel{
  text-align: center;
  margin-top: 2%;
}
.recentCard{
  width: 100%;
  text-align: center;
}
.movies-wrapper{
  display: inline-block;
}
.navbut-l, .navbut-r {
  margin-bottom: 5%;
}
.navbut-r {

}

</style>