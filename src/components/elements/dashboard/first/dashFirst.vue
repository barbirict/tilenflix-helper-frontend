<template>
  <span>
  <div class="row recent">
    <div class="flex xs12 sm12 md12 lg6 xl5 kura offset--xl2 offset--lg2">
  <recent-card></recent-card>
      </div>
  </div>
    <div class="row recent">
      <div class="flex xs12 sm12 md12 lg6 xl5 kura offset--xl2 offset--lg2">
      <recent-card></recent-card>
      </div>
    </div>
    </span>
</template>

<script>
import RecentCard from "@/components/elements/dashboard/first/cards/recents/recentCard";

export default {
  name: "dashFirst",
  components: {RecentCard}
}
</script>

<style scoped>
.recent {
  margin-top: 1vh;
}

body {
  position: absolute;
}
</style>