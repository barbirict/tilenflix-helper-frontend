<template>
  <div class="row yes">
  <request-card class="flex xl12 offset--xl2 req"></request-card>
  </div>
</template>

<script>
import RequestCard from "@/components/elements/requests/requestCard";
export default {
  name: "clientRequestView",
  components: {RequestCard}
}
</script>

<style scoped>
.req{
  margin-right: 10%;
}
.yes{
  margin-top: 20px;
}
</style>