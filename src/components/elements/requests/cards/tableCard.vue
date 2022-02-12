<template>
  <va-card class="tab-card">
    <va-card-title>Your requests</va-card-title>
    <va-divider></va-divider>
    <va-data-table
        :items="rows"
        :columns="columns">
      <template #header(episodes)>Episode(s)</template>

    </va-data-table>
  </va-card>
</template>

<script>

import {defineComponent} from 'vue'
import dayjs from "dayjs";
import requestService from "@/components/scripts/requestService/requestService";
import Cookies from 'js-cookie'

function itemsToFields(items) {
  let rows = []
  for (let i = 0; i < items.length; i++) {
    items[i].item = JSON.parse(items[i].item)
    let sisn = "/"
    let epi = "/"
    let dat = dayjs(parseInt(items[i].date_reported)).format("DD.MM.YYYY HH:mm")
    let stat = ""
    let typ = ""

    switch (items[i].status) {
      case "submit":
        stat = "Submitted"
        break
      case "inprog":
        stat = "In progress"
        break
      case "finish":
        stat = "Finished"
    }

    switch (items[i].item.type) {
      case "tv-show":
        typ = "TV Show season"
        break
      case "tv-show-episode":
        typ = "TV Show episode"
        break
      case "movie":
        typ = "Movie"
    }

    if (items[i].item.season) sisn = items[i].item.season
    if (items[i].item.episodes) epi = items[i].item.episodes
    rows.push({
      id: 'REQ000' + items[i].id, title: items[i].item.title, type: typ, season: sisn,
      episodes: epi, date: dat, status: stat
    })
  }
  console.log(rows)
  return rows
}

export default defineComponent({
  name: "tableCard",
  methods: {},

  mounted() {
    this.loading = true
    requestService.getUserRequests(this.$store.getters.getUser.id, Cookies.get("session"))
    .then(response => {
      // eslint-disable-next-line no-empty
      if(response.status === 200){
        this.data = response.data
        this.rows = itemsToFields(this.data)
      }
    })
  },

  data() {
    let data = []

    const columns = [
      {key: "id", sortable: true},
      {key: "title", sortable: true},
      {key: "type", sortable: true},
      {key: "season", sortable: true},
      {key: "episodes", sortable: true},
      {key: "date", sortable: true},
      {key: "status", sortable: true}
    ]

    return {
      columns, rows: itemsToFields(data)
    }
  },

})
</script>

<style scoped>

@media only screen and (min-width: 992px) {
  .tab-card {
    min-width: 750px;
  }
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
  .tab-card {
    min-width: 684px;
  }
}


</style>