<template>
<div class="row">
<dash-first class="flex xs12 sm12 md12 lg6 xl5 kura offset--xl2 offset--lg2" > </dash-first>
</div>
</template>

<script>

import DashFirst from "@/components/elements/dashboard/first/dashFirst";
export default {
  name: "dashboardView",
  components: {DashFirst},
  created() {
    if(this.$store.getters.getUser == null){
      this.$router.push("/")
    }
  },
  data() {
    return {
      user: ""
    }

  }
}
</script>

<style scoped>
.kura{

  margin-top: 3vh;
}
</style>