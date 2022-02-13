<template>
  <va-card class="recentCard">
    <va-card-title>Recently added TV</va-card-title>
    <va-divider />
    <div class="tv-wrapper">
      <tv-carousel class="mc"/>
    </div>

  </va-card>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import tvCarousel from "@/components/elements/dashboard/first/cards/recents/tv/tvCarousel";
export default {
  name: "recentTvCard",
  components: {tvCarousel},
  data() {
    return {
      value: 'One'
    }
  }
}
</script>

<style scoped>

.tv-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mc{
width: 90%;
  height: 100%;
}

.recentCard{
  height: 380px;
}
</style>