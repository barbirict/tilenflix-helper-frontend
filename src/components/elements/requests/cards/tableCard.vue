<template>
  <va-card>
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

function itemsToFields(items) {
  let rows = []
  for (let i = 0; i < items.length; i++) {
    let sisn = "/"
    let epi = "/"
    let dat = dayjs(items[i].date).format("DD.MM.YYYY HH:mm")
    let stat = ""
    let typ = ""

    switch (items[i].status){
      case "submit":
        stat = "Submitted"
            break
      case "inprog":
        stat = "In progress"
            break
      case "finish":
        stat = "Finished"
    }

    switch (items[i].item_o.type){
      case "tv-show":
          typ = "TV Show season"
            break
      case "tv-show-episode":
        typ = "TV Show episode"
            break
      case "movie":
        typ = "Movie"
    }

    if (items[i].item_o.season) sisn = items[i].item_o.season
    if (items[i].item_o.episodes) epi = items[i].item_o.episodes
    rows.push({
      id: items[i].id, title: items[i].item_o.title, type: typ, season: sisn,
      episodes: epi, date: dat, status: stat
    })
  }
  console.log(rows)
  return rows
}

export default defineComponent({
  name: "tableCard",
  methods: {},
  data() {
    const sampleData = [
      {
        id: "REQ000001",
        item_o: {
          title: "It's always sunny in philadelphia",
          type: "tv-show",
          season: "3",
          episodes: "1-24",
        },
        date: "2022-01-10T23:30:52",
        status: "submit",
      },
      {
        id: "REQ000002",
        item_o: {
          title: "Star wars: Episode III",
          type: "movie"
        },
        date: "2022-01-10T22:30:40",
        status: "inprog",
      },
      {
        id: "REQ000003",
        item_o: {
          title: "Filthy frank show: Dade special",
          type: "tv-show-episode",
          season: "3",
          episodes: "1",
        },
        date: "2022-01-08T12:45:03",
        status: "finish",
      },
      {
        id: "REQ000004",
        item_o: {
          title: "The Boondocks",
          type: "tv-show",
          season: "4",
          episodes: "18",
        },
        date: "2022-01-01T21:15:21",
        status: "finish",
      },
    ]

    const columns = [
      {key: "id", sortable: true },
      {key: "title", sortable: true },
      {key: "type", sortable: true },
      {key: "season", sortable: true },
      {key: "episodes", sortable: true },
      {key: "date", sortable: true },
      {key: "status", sortable: true }
    ]

    return {
      columns, rows: itemsToFields(sampleData)
    }
  },

})
</script>

<style scoped>

</style>