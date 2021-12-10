<template>
<div>

</div>
</template>

<script>
import userState from "@/components/scripts/userState";
export default {
  name: "dashboardView",
  created() {
    if(userState() == false){
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>

</style>