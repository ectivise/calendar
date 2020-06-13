<template>
<v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <!-- <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-calendar-weekend-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Public Holidays</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/calendar">
            <v-list-item-action>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Calendar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item link to="/access_point">
            <v-list-item-action>
              <v-icon>mdi-access-point</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Access Point</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
          <!-- <v-list-item link to="/raspberry_pi">
            <v-list-item-action>
              <v-icon>mdi-router-wireless</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Raspberry Pi</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
          <!-- <v-list-item link to="/power">
            <v-list-item-action>
              <v-icon>mdi-speedometer</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Power Summary</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn v-if="login" @click="logout()">Log Out</v-btn>
        <div v-else>
          <!-- <v-btn to="/register" class="mx-3" color="secondary">Register</v-btn> -->
          <v-btn to="/login" class="mx-3" color="secondary">Login</v-btn>
        </div>
        
      </v-app-bar>
  
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-snackbar
      v-model="snackbar.showing"
      :timeout="3000"
      color="primary"
      >
      {{snackbar.text}}
      
      <v-btn text @click="snackbar.showing = false">
        close
      </v-btn>
      </v-snackbar>
      <v-footer
        color="indigo"
        app
      >
        
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {},
  created() {
    this.syncsession();
  },
  watch: {
    $route(to, from) {
      if(from.fullPath == "/register"  && to.fullPath !== from.fullPath) {
        this.$store.commit("forgetpw",false);
      }
    },
  },
  data: () => ({
    drawer: false,
  }),
  computed:{
    login(){
      return this.$store.getters.login;
    },
    ...mapState(['snackbar'])
  },
  methods:{
    async logout(){
      // await this.$store.dispatch("logout",this.$store.getters.currentuser.mobile);
      this.$store.commit('logout');
      this.loginstatus();
    },
    loginstatus(){
      var obj = {
        login: this.$store.getters.login,
      }
      sessionStorage.setItem('data', JSON.stringify(obj))
    },
    syncsession(){
      this.$store.commit('synclogin',JSON.parse(sessionStorage.getItem('data')).login)
    },
  },
};
</script>