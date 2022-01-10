<template>
<va-card class="requests">
  <va-card-title>Your Requests</va-card-title>
  <va-divider />
  <div id="submitted">
    <h1>3</h1>
    <p>requests submitted</p>
  </div>
  <div id="in_progress">
    <h1>1</h1>
    <p>Request in progress</p>
  </div>
  <div id="completed">
  <h1>12</h1>
    <p>Requests completed</p>
  </div>
</va-card>
</template>

<script>
export default {
  name: "requestsCard"
}
</script>

<style scoped>

.requests {
  text-align: center;
  display: block;
  margin-left: 20px;
  width: 96%;
  height: 180px;
}
#submitted, #completed, #in_progress {
  width: 33.33%;
  display: inline-block;
  margin-bottom: 15px;
}
#submitted > h1 {
  color: #2db1ea;
  font-size: 4em;
}
#in_progress > h1 {
  color: #08ff00;
  font-size: 4em;
}
#completed > h1 {
  color: #8d968d;
  font-size: 4em;
}


</style>