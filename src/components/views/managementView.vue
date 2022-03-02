<template>
  <div id="content">
    <div id="tabs">
      <news-tab v-if="selected === 'News'"/>
      <users-tab v-if="selected === 'Users'"/>
      <requests-tab v-if="selected === 'Requests'"/>
      <incidents-tab v-if="selected === 'Incidents'"/>
    </div>
    <div id="nav">
      <va-tabs v-model="selected">
        <template #tabs>
          <va-tab
              name="News"
              label="News"
          >
          </va-tab>
          <va-tab
              name="Users"
              label="Users"
          >
          </va-tab>
          <va-tab
              name="Requests"
              label="Requests"
          >
          </va-tab>
          <va-tab
              name="Incidents"
              label="Incidents"
          >
          </va-tab>
        </template>
      </va-tabs>
    </div>
  </div>
</template>

<script>
import usersTab from "@/components/elements/management/tabs/usersTab";
import NewsTab from "@/components/elements/management/tabs/newsTab";
import RequestsTab from "@/components/elements/management/tabs/requestsTab";
import IncidentsTab from "@/components/elements/management/tabs/incidentsTab";

export default {
  name: "managementView",
  components: {IncidentsTab, RequestsTab, NewsTab, usersTab},
  data() {
    return {selected: "Users"}
  }
}
</script>

<style scoped>
#content {
}

#nav {
  margin: auto;
  width: 300px
}
</style>