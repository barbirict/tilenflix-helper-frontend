<template>
  <body>
  <div class="row">
  <div class="flex xs12 sm10 md8 lg6 xl4  test">
<login-card></login-card>
  </div>
  </div>
  </body>


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
  padding-top: 25vh;
}
</style>