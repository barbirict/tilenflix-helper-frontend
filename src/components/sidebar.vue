<template>
  <va-sidebar hoverable textColor="dark" minimizedWidth="64px">
    <!--LOGIN-->
    <va-sidebar-item
        v-if="!isLogin"
        id="s0"
        v-on:click="handleClick(0)"
    >
      <va-sidebar-item-content>
        <va-icon name="login" />
        <va-sidebar-item-title style="height: 12px;">
          Login
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
    <!--DASHBOARD-->
      <va-sidebar-item
          v-if="isLogin"
          id="s1"
          v-on:click="handleClick(1)"
      >
        <va-sidebar-item-content>
          <va-icon name="dashboard" />
          <va-sidebar-item-title style="height: 12px;">
            Dashboard
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    <!--SETTINGS-->
      <va-sidebar-item
          v-if="isLogin"
          id="s2"
          v-on:click="handleClick(2)"
      >
        <va-sidebar-item-content>
          <va-icon name="settings" />
          <va-sidebar-item-title style="height: 12px;">
            Settings
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    <!--ABOUT-->
    <va-sidebar-item
        id="s3"
        v-on:click="handleClick(3)"
    >
      <va-sidebar-item-content>
        <va-icon name="info_outline" />
        <va-sidebar-item-title style="height: 12px;">
          About
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
    <!--LOG OUT-->
    <va-sidebar-item
        v-if="isLogin"
        id="s4"
        v-on:click="handleClick(4)"
    >
      <va-sidebar-item-content>
        <va-icon name="logout" />
        <va-sidebar-item-title style="height: 12px;">
          Log out
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>

  </va-sidebar>
</template>

<script>
import logout from "@/components/scripts/logout";
export default {
  name: "sidebar",
  created() {
    this.emitter.on('userLoggedIn', () =>{
      alert("ALOOOO")
      this.isLogin = true
    })
  },
  updated() {
    alert(JSON.stringify(this.$store.getters.getUser))
    if(this.$store.getters.getUser != null){
      this.isLogin = true
    }
  },
  data () {
    return {
      items: [
        { id: 0, title: 'Login', icon: 'login', btType: 0, active: true, oc: 'handleClick(0)'},
        { id: 1, title: 'Dashboard', icon: 'dashboard', btType: 1, to: 'dashboard,', oc: 'this.handleClick(1)'},
        { id: 2, title: 'Settings', icon: 'settings', btType: 1, oc: 'handleClick(2)'},
        { id: 3, title: 'About', icon: 'info_outline', btType: 2, oc: 'handleClick(3)'},
        { id: 4, title: 'Log out', icon: 'logout', btType: 1, oc: 'handleClick(4)'}
      ],
      isLogin : false,
      isAdmin : false
    }
  },
  methods:{
    log_out(){
      logout();
    },
    handleClick(which){
        switch (which){
          case 0:
            //alert("b0")
            // eslint-disable-next-line no-undef
              $("#s0").attr("active","true")
            break
          case 1:
            alert("b1")
            break
          case 2:
            alert("b2")
            break
          case 3:
            alert("b3")
            break
          case 4:
            alert("b4")
            break
          default:
            alert("err")
        }
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


<!--
<va-sidebar-outer-item-wrapper
        v-for="item in items"
        :key="item.to"
        v-on:click="handleClick(0)"
        >
    <va-sidebar-item
        v-if="item.btType == 0 && !isLogin"
        :active="item.active"

    >
      <va-sidebar-item-content>
        <va-icon :name="item.icon" />
        <va-sidebar-item-title style="height: 12px;">
          {{ item.title }}
        </va-sidebar-item-title>
      </va-sidebar-item-content>
    </va-sidebar-item>
      <va-sidebar-item
          v-else-if="item.btType == 1 && isLogin"
          :active="item.active"
          :v-on:click=item.oc
      >
        <va-sidebar-item-content>
          <va-icon :name="item.icon" />
          <va-sidebar-item-title style="height: 12px;">
            {{ item.title }}
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
      <va-sidebar-item
          v-else-if="item.btType == 2"
          :active="item.active"
          :v-on:click=item.oc
      >
        <va-sidebar-item-content>
          <va-icon :name="item.icon" />
          <va-sidebar-item-title style="height: 12px;">
            {{ item.title }}
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

    </va-sidebar-outer-item-wrapper>
  </va-sidebar>
-->