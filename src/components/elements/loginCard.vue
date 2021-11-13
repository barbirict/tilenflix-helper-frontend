<template>
<va-card class="flex" color="cardb">
  <va-card-title>Login</va-card-title>
  <va-card-content>
    <va-form ref="loginf" @submit.prevent="onClick">
    <va-input
      class="mb-4"
      v-model="username"
      label="Username:"
    ></va-input>
      <va-input
          class="mb-4"
          v-model="password"
          label="Password:"

      ></va-input>
    </va-form>
    <va-button class="mr-6 justify-self--end" type="submit">Login</va-button>

  </va-card-content>
</va-card>
</template>

<script>
import {getColors} from "vuestic-ui";

export default {
  name: "loginCard",
  methods: {
    onClick(){
      alert(getColors().toString())
    }
  }

}
</script>

<style scoped>

</style>