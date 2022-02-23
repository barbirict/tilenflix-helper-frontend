<template>
<va-card class="main">
  <va-card-title>User Editor</va-card-title>
  <va-divider/>
  <va-checkbox v-model="modeNew" label="Create new user"></va-checkbox>
  <va-form>

  </va-form>

</va-card>
</template>

<script>
export default {
  name: "userEditorCard",
  data() {
    return { modeNew: false, modeEdit: false }
  }
}
</script>

<style scoped>
.main {
  padding-bottom: 10px;
}
</style>