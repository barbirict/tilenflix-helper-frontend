<template>
<div class="row">
<dash-first class="flex xs12 sm10 md9 lg8 xl5 kura" > </dash-first>
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
  margin-left: 15%;
  margin-top: 3vh;
}
</style>