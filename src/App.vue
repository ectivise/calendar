<template>
<v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
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
          <v-list-item link to="/holiday">
            <v-list-item-action>
              <v-icon>mdi-calendar-weekend-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Public Holidays</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
  
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer
        color="indigo"
        app
      >
        
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>

export default {
  
  name: 'App',

  components: {},

  data: () => ({
    drawer: false,
  }),
};
</script>