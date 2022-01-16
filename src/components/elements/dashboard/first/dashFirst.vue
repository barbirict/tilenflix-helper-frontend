<template>
  <span>
  <div class="row recent">
    <div class="flex offset--lg2 xs12 sm12 md12 lg6 xl5">
  <recent-card></recent-card>
      </div>
<div class="flex  reqreq"><status-card></status-card><requests-counter></requests-counter></div>
  </div>
    <div class="row recent">
      <div class="flex offset--lg2 xs12 sm12 md12 lg6 xl5">
      <recent-card></recent-card>
      </div>
          <div class="flex novice_lg">
      <news-display-card></news-display-card>
    </div>
      <div class="flex xs12 sm12 md12 novice_sm">
      <news-display-card></news-display-card>
    </div>

      <div class="flex statt"></div>
    </div>
    </span>
</template>

<script>
import RecentCard from "@/components/elements/dashboard/first/cards/recents/recentCard";
import NewsDisplayCard from "@/components/elements/dashboard/first/cards/news/newsDisplayCard";
import RequestsCounter from "@/components/elements/dashboard/first/cards/counters/requests/requestCounter";
import StatusCard from "@/components/elements/dashboard/first/cards/status/statusCard";

export default {
  name: "dashFirst",
  components: {StatusCard, RequestsCounter, NewsDisplayCard, RecentCard},
}
</script>

<style scoped>
.recent {
  margin-top: 20px;
}
.novice_lg{
  margin-left: 20px;
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

@media only screen and (min-width: 1200px) {

  .reqreq{
    flex-basis: 24%;
    flex-grow: 0;
    max-width: 24%;
  }
  .novice_lg{
    flex-basis: 24%;
    flex-grow: 0;
    max-width: 24%;
  }
  .statt{
    flex-basis: 24%;
    flex-grow: 0;
    max-width: 24%;
  }

}

</style>