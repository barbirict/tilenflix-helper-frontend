<template>
  <div id="main">
    <user-editor-card class="flex xs12 sm10 md8 xl6" id="editor"></user-editor-card>
<user-table-card class="flex xs12 sm10 md8 xl6" id="table"></user-table-card>
  </div>
</template>

<script>
import UserTableCard from "@/components/elements/management/cards/users/userTableCard";
import UserEditorCard from "@/components/elements/management/cards/users/userEditorCard";

export default {
  name: "users",
  components: {UserEditorCard, UserTableCard}
}
</script>

<style scoped>

#table, #editor {
  margin: auto;
}
#main {
  padding: 20px;
}
#editor {
  margin-bottom: 20px;
}

</style>