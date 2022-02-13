<template>
  <va-card class="requests">
    <va-card-title>Your Requests</va-card-title>
    <va-divider/>
    <div id="submitted">
      <transition
        name="slide-fade"
        mode="out-in">
      <h1 :key="subCount">{{ subCount }}</h1>
      </transition>
      <p>Submitted</p>
    </div>
    <div id="in_progress">
      <transition
          name="slide-fade"
          mode="out-in">
      <h1 :key="inProCount">{{ inProCount }}</h1>
      </transition>
      <p>In progress</p>
    </div>
    <div id="completed">
      <transition
          name="slide-fade"
          mode="out-in">
      <h1 :key="compCount">{{ compCount }}</h1>
      </transition>
      <p>Completed</p>
    </div>
  </va-card>
</template>

<script>
import Cookies from "js-cookie";
import requestService from "@/components/scripts/requestService/requestService";

export default {
  name: "requestsCounter",
  data() {
    return {subCount: 0, inProCount: 0, compCount: 0}
  },
  created() {
    requestService.getUserRequests(this.$store.getters.getUser.id, Cookies.get('session'))
        .then(response => {
          if (response.status === 200) {
            for (let i = 0; i < response.data.length; i++) {
              switch (response.data[i].status) {
                case "submit":
                  this.subCount++
                  break
                case "inprog":
                  this.inProCount++
                  break
                case "finish":
                  this.compCount++
              }
            }
          }
        })
  }
}
</script>

<style scoped>

.requests {
  text-align: center;
  display: block;
  margin-left: 20px;
  margin-top: 20px;
  width: 96%;
  height: 200px;
}

#submitted, #completed, #in_progress {
  height: 100%;
  width: 33.33%;
  display: inline-block;
  margin-bottom: 15px !important;
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
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

</style>