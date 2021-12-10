<template>
  <va-sidebar hoverable textColor="dark" minimizedWidth="64px">
    <va-sidebar-item
        v-for="item in items"
        :key="item.to"
        :active="item.active"
    >
      <va-sidebar-item-content>
        <va-icon :name="item.icon" />
        <va-sidebar-item-title style="height: 12px;">
          {{ item.title }}
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
  </va-sidebar>
</template>

<script>
export default {
  name: "sidebar",
  data () {
    return {
      items: [
        { title: 'Login', icon: 'login', forLogin: false, active: true},
        { title: 'Dashboard', icon: 'dashboard', forLogin: true},
        { title: 'Settings', icon: 'settings', forLogin: true},
        { title: 'About', icon: 'info_outline', forLogin: false}
      ],
      isLogin : false,
      isAdmin : false
    }
  }
}
</script>

<style lang="scss" scoped>

.va-sidebar {
.va-sidebar__title {
  transition: opacity 0.2s ease-in-out;
}

&--minimized {
.va-sidebar__title {
  opacity: 0;
}
}
}

</style>