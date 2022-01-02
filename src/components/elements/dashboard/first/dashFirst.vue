<template>
  <span>
  <div class="row recent">
    <div class="flex xs12 sm12 md12 lg6 xl5 kura offset--xl2 offset--lg2">
  <recent-card></recent-card>
      </div>
    <div class="flex lg3 xl2 novice_lg">
      <news-display-card></news-display-card>
    </div>
  </div>
    <div class="row recent">
      <div class="flex xs12 sm12 md12 lg6 xl5 kura offset--xl2 offset--lg2">
      <recent-card></recent-card>
      </div>
          <div class="flex xs12 sm12 md12 novice_sm">
      <news-display-card></news-display-card>
    </div>
    </div>
    </span>
</template>

<script>
import RecentCard from "@/components/elements/dashboard/first/cards/recents/recentCard";
import NewsDisplayCard from "@/components/elements/dashboard/first/cards/news/newsDisplayCard";

export default {
  name: "dashFirst",
  components: {NewsDisplayCard, RecentCard}
}
</script>

<style scoped>
.recent {
  margin-top: 1vh;
}
.novice_lg{
  margin-left: 1vw;
}

@media only screen and (max-width: 991px) {
  .novice_lg {
    display: none;
  }
  .novice_sm {
    display: block;
  }
}
@media only screen and (min-width: 992px) {
  .novice_lg {
    display: block;
  }
  .novice_sm {
    display: none;
  }
}

</style>