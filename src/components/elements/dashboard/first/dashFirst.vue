<template>
  <span>
  <div class="row flex recent">
  <recent-card></recent-card>
  </div>
    <div class="row flex recent">
      <recent-card></recent-card>
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

</style>