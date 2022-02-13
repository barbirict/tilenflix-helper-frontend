<template>
  <div class="tv-card">
    <img class="poster" height="200" width="140"
         :src=show.imgSrc>
    <h3>{{ show.title }}</h3>
    <h4>{{ show.season }}</h4>
    <p>Uploaded: {{ show.uploaded }}</p>
  </div>
</template>

<script>
export default {
  name: "tvCard",
  props: ['show']
}
</script>

<style scoped>
.tv-card {
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