<template>
  <body>
  <div class="row">
    <div class="flex xs12 sm10 md8 lg6 xl4 main-card">
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
.main-card {
  margin: auto;
  padding-top: 25vh;
}

@media only screen and (max-width: 576px) {
  .main-card {
    margin-inline: 20px;
  }
}
</style>