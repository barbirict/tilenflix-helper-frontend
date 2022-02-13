<template>
    <div>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="movie in movieList" :key="movie.guid">
        <movie-card class="carousel__item"
                    :movie="movie"
        />
      </Slide>

    </Carousel>
    </div>
</template>

<script>
import {defineComponent} from 'vue';
import {Carousel, Navigation, Slide} from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import MovieCard from "@/components/elements/dashboard/first/cards/recents/movies/movieCard";
import plexService from "@/components/scripts/plexService/plexService";
import Cookies from "js-cookie";
import dayjs from "dayjs";

export default defineComponent({
  name: 'movieCarousel',
  components: {
    MovieCard,
    Carousel,
    Slide,
    Navigation,
  },
  created() {
    this.loading = true
    plexService.getRecent(Cookies.get('session'), 'movie', 90)
        .then(response => {
          for (let i = 0; i < response.data.length; i++) {
            let movie = {
              guid: response.data[i].guid,
              title: response.data[i].title,
              imgSrc: "data:image/png;base64, " + response.data[i].thumb,
              uploaded: dayjs.unix(response.data[i].addedAt).format("DD.MM.YYYY")
            }
            this.movieList.push(movie)
          }
        })
    this.loading = false
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2.75,
      wrapAround: 'true',
      autoplay: 30000
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      768: {
        itemsToShow: 3.45,
        snapAlign: 'center',
      },
      992: {
        itemsToShow: 3.05,
        snapAlign: 'center'
      },
      // 1024 and up
      1200: {
        itemsToShow: 3.15,
        snapAlign: 'center',
      },
      1680: {
        itemsToShow: 3.95,
        snapAlign: 'center'
      }
    },
    movieList: [],
    loading: false
  }),
});
</script>

<style scoped>
.carousel__item {
  min-height: 300px;
  width: 100%;
  margin-top: 20px;
}


.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}

.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}

.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}

.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}

.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}


</style>