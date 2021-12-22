<template>
<div>

</div>
</template>

<script>
import gre from "@/components/scripts/userState";

export default {
  name: "dashboardView",
  data(){
    return{
      user : ""
    }

  },
  created() {
    gre()

  }
}
</script>

<style scoped>

</style>