<template>
<div class="aboutcard">
  <va-card>
    <va-card-title>About</va-card-title>
    <va-card-content class="hehe">Tilenflix is my personal media server that is intended for use by me,
    my close friends and family. This website enables users to request movies, shows to be uploaded and also
    to report any bugs that they might encounter. The page is built with <a href="https://vuejs.org" target="_blank">Vue.js</a> and a
      <a href="https://nodejs.org" target="_blank">node.js</a> backend. This page will be a part of my college thesis, and upon finish
      is planned to be released as an open source dashboard.</va-card-content>
  </va-card>
</div>
</template>

<script>
export default {
  name: "aboutCard"
}
</script>

<style scoped>
.hehe {
  line-height: 120%;
}
</style>