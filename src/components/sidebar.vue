<template>
  <va-sidebar hoverable textColor="dark" minimizedWidth="64px">
    <!--LOGIN-->

    <va-sidebar-item
        v-if="!isLogin"
        id="s0"
        :active="isActive('login')"

    >
      <va-sidebar-item-content v-on:click="handleClick('login')">

        <va-icon name="login"/>
        <va-sidebar-item-title style="height: 12px;">
          Login
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
    <!--DASHBOARD-->
    <va-sidebar-item
        v-if="isLogin"
        id="s1"
        :active="isActive('dashboard')"
    >
      <va-sidebar-item-content
          v-on:click="handleClick('dashboard')">
        <va-icon name="dashboard"/>
        <va-sidebar-item-title style="height: 12px;">
          Dashboard
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
    <!--SETTINGS-->
    <va-sidebar-item
        v-if="isLogin"
        id="s2"
    >
      <va-sidebar-item-content
          v-on:click="handleClick('settings')"
      >
        <va-icon name="settings"/>
        <va-sidebar-item-title style="height: 12px;">
          Settings
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
    <!--ABOUT-->
    <va-sidebar-item
        id="s3"
        :active="isActive('about')"
    >
      <va-sidebar-item-content
          v-on:click="this.$router.push('/about')"
      >
        <va-icon name="info_outline"/>
        <va-sidebar-item-title style="height: 12px;">
          About
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
    <!--LOG OUT-->
    <va-sidebar-item
        v-if="isLogin"
        id="s4"

    >
      <va-sidebar-item-content
          v-on:click="log_out"
      >
        <va-icon name="logout"/>
        <va-sidebar-item-title style="height: 12px;">
          Log out
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>

  </va-sidebar>
</template>

<script>
import firebase from "firebase/compat";
import Cookies from "js-cookie";

export default {
  name: "sidebar",
  created() {
    this.emitter.on('userLoggedIn', () => {
      console.log("User has logged in, adjusting sidebar")
      this.isLogin = true
    })
  },
  updated() {
    alert(JSON.stringify(this.$store.getters.getUser))
    if (this.$store.getters.getUser != null) {
      this.isLogin = true
    }
  },
  data() {
    return {
      items: [
        {id: 0, title: 'Login', icon: 'login', btType: 0, active: true, oc: 'handleClick(0)'},
        {id: 1, title: 'Dashboard', icon: 'dashboard', btType: 1, to: 'dashboard,', oc: 'this.handleClick(1)'},
        {id: 2, title: 'Settings', icon: 'settings', btType: 1, oc: 'handleClick(2)'},
        {id: 3, title: 'About', icon: 'info_outline', btType: 2, oc: 'handleClick(3)'},
        {id: 4, title: 'Log out', icon: 'logout', btType: 1, oc: 'handleClick(4)'}
      ],
      isLogin: false,
      isAdmin: false,
      curActive: 0
    }
  },
  methods: {
    log_out() {
      if (this.$store.getters.getUser != null) {
        firebase
            .auth()
            .signOut()
            .then(() => {
              alert("logged out successfully!")
              Cookies.remove("session")
              this.$router.replace({
                name: "login"
              });
              this.$store.commit("setUser", null)
            });
        this.isLogin = false
      } else alert("Not logged in, what are you trying to do?")
    },
    isActive(which) {

      return this.$route.name === which
    },
    handleClick(which) {
      this.$router.push({name: which})
          .then(() => {
            console.log('updated route', this.$route)
          })
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