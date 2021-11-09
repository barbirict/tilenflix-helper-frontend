<template>
  <div class="row">
  <div class="flex md12 lg6 justify-self--center test">
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
  margin-right: auto;
  margin-left: auto;
}
</style>