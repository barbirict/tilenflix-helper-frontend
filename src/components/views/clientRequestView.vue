<!--TODO: Fix mobile browser submit button glitch-->
<template>
  <span class="first yes">
  <div class="row">
    <div class="flex offset--sm1 offset--md2 offset--lg3 offset--xl4 sm10 md8 lg6 xl4 xs12 car">
    <form-card/>
      </div>
  </div>
    <div class="row">
      <div class="flex offset--lg1 offset--md1 offset--xl3 xs12 md10 lg10 xl6 car">
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

@media only screen and (max-width: 768px){
  .car{
    padding-right: 20px;
    padding-left: 20px;
  }
}

</style>