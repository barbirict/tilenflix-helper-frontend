<template>
<about-card class="flex xs12 sm10 md8 lg6 xl4 main-card"/>
</template>

<script>
import AboutCard from "@/components/elements/aboutCard";
export default {
  name: "about",
  components: {AboutCard}
}
</script>

<style scoped>
.main-card {
  margin: auto;
  padding-top: 25vh;
}
</style>