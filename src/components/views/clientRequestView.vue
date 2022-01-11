<template>
  <span class="first yes">
  <div class="row">
    <div class="flex offset--lg2 md8 lg6">
    <form-card/>
      </div>
  </div>
    <div class="row">
      <div class="flex offset--lg2 lg6">
      <table-card/>
        </div>
    </div>
    </span>
</template>

<script>

import TableCard from "@/components/elements/requests/cards/tableCard";
import FormCard from "@/components/elements/requests/cards/formCard";
export default {
  name: "clientRequestView",
  components: {FormCard, TableCard}
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