<template>
  <dash-first></dash-first>
</template>

<script>

import DashFirst from "@/components/elements/dashboard/first/dashFirst";

export default {
  name: "dashboardView",
  components: {DashFirst},
  created() {

  },
  data() {
    return {
      user: ""
    }

  }
}
</script>

<style scoped>
.kura {

  margin-top: 3vh;
}
</style>