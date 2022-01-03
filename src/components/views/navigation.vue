<template>
  <va-navbar>
    <template #left>
      <va-button v-on:click="clickHandler"></va-button>
      <img class="n-logo" src="@/assets/logo.png">
    </template>
    <template #center>

    </template>
    <template #right>

    </template>
  </va-navbar>
</template>

<script>
export default {
  name: "navigation",

  methods:{
    clickHandler(){
      this.emitter.emit('sidebarSwitch')
    }
  }
}
</script>

<style scoped>
.n-logo {
  height: 50px;
}
</style>