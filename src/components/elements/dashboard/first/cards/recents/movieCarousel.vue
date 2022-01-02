<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 10" :key="slide">
      <movie-card class="carousel__item"> </movie-card>
    </Slide>

  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import MovieCard from "@/components/elements/dashboard/first/cards/recents/movieCard";

export default defineComponent({
  name: 'movieCarousel',
  components: {
    MovieCard,
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2.5,
      wrapAround: 'true'
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      768: {
        itemsToShow: 3.25,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3.95,
        snapAlign: 'center',
      },
    },
  }),
});
</script>

<style scoped>
.carousel__item {
  min-height: 300px;
  width: 100%;
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