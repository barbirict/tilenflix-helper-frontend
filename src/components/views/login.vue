<template>
  <div class="row " >
  <div class="flex xs12 sm10 md8 lg6 xl4 justify-self--center test">
<login-card></login-card>
  </div>

  </div>


</template>

<script>
import LoginCard from "@/components/elements/loginCard";
export default {
  name: "login",
  components: {LoginCard}
}
</script>

<style scoped>
.test {
margin: auto;
}
</style>