<template>
<va-card class="flex">
  <va-card-title>Login</va-card-title>
  <va-card-content>
    <va-form ref="loginf">
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
    <va-button class="mr-6 justify-self--end">Login</va-button>

  </va-card-content>
</va-card>
</template>

<script>
export default {
  name: "loginCard"
}
</script>

<style scoped>

</style>