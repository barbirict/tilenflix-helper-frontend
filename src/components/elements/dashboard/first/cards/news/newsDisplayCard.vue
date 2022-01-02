<template>
  <va-card class="display-news">
    <va-card-title>Recent news</va-card-title>
    <va-divider />
    <div class="news-wrapper">
    <news-card class="newws"/>
      <va-divider />
    <news-card class="newws"/>
      <va-divider />
    <news-card class="newws"/>
      <va-divider />
    <news-card class="newws"/>
    </div>

  </va-card>
</template>

<script>
import NewsCard from "@/components/elements/dashboard/first/cards/news/newsCard";

export default {
  name: "newsDisplayCard",
  components: {NewsCard}
}
</script>

<style scoped>
.display-news{
  overflow: scroll;
  height: 337px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.display-news::-webkit-scrollbar {
  display: none;
}

.newws{
  margin-top: 10px;
  margin-bottom: 10px;
}

.news-wrapper{
  padding: 5px;
}
</style>