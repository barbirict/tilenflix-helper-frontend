<template>
<div>

</div>
</template>

<script>

export default {
  name: "dashboardView",
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

</style>