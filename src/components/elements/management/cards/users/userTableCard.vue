<template>
  <va-card class="table-card">
    <va-card-title>List of Users</va-card-title>
    <va-divider/>
    <va-data-table
        :items="rows"
        :columns="columns"
        :per-page="perPage"
        :current-page="currentPage"
        selectable
        selected-mode="single"
        v-model="selectedUser"
        @selectionChange="log"
    >

      <template #bodyAppend>
        <tr>
          <td colspan="12" class="table--pagination">
            <va-pagination
                v-model="currentPage"
                input
                :pages="pages"
            />
          </td>
        </tr>
      </template>


    </va-data-table>
  </va-card>
</template>

<script>
import userService from "@/components/scripts/userService/userService";
import Cookies from "js-cookie";
export default {
  name: "userTableCard",
  data() {
    let userData = []
    const columns = [
      {key: "id", sortable: false},
      {key: "username", sortable: false},
      {key: "name", sortable: true},
      {key: "surname", sortable: true},
      {key: "roles", sortable: true}
    ]
    return {
      columns, rows: userData, perPage: 5, currentPage: 1, selectedUser: ""
    }
  },
  mounted(){
    this.getData()
  },
  methods: {
    getData() {
      userService.getAll(Cookies.get("session"))
          .then(response => {
            console.log(response)
            if (response.status === 200) {
              this.userData = response.data
              this.rows = this.userData
              console.log(this.rows)
            }
          })
    },
    log(){
      console.log(this.selectedUser)
    }
  },
  computed: {
    pages(){
      return (this.perPage && this.perPage !== 0)
          ? Math.ceil(this.rows.length / this.perPage)
          : this.rows.length
    }
  }
}
</script>

<style scoped>


.table--pagination {
  text-align: center;
  text-align: -webkit-center;
}
</style>