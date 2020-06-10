<template>
  <v-data-table
    :headers="headers"
    :items="raspberrypis"
    :search="search"
    expanded.sync="expanded"
    sort-by="name"
    class="elevation-1"
    show-expand
  >
    <template v-slot:expanded-item="{item}">
      <h1>{{item.name}}</h1>
    </template>
    <template v-slot:item.status="{ item }">
      <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
    </template>
    <template v-slot:item.runtime="{item}">
        <durationdisplay :duration="item.runtime"/>
    </template>
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title class="font-weight-bold display-1">Raspberry Pi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          clearable
          outlined
          dense
          class="px-6 mx-6"
        ></v-text-field>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-1" v-bind="attrs" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md=12>
                    <v-text-field v-model="editedItem.name" readonly label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.location.building" label="Building"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.location.level" label="Storey"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.ip" label="IP"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.password" label="Password"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import durationdisplay from "../components/durationdisplay.vue"
export default {
    name:"Raspberry_Pi",
  components:{
      durationdisplay,
  },
  data: () => ({
    expanded: [],
    singleExpand: false,
    dialog: false,
    search: "",
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: true,
        value: "name"
      },
      { text: "User", value: "user", sortable: false },
      { text: "Password", value: "password", sortable: false },
      { text: "IP", value: "ip" },
      { text: "Building", value: "location.building" },
      { text: "Storey", value: "location.level" },
      { text: "Status", value: "status" },
      { text: "Runtime", value: "runtime" },
      { text: "Actions", value: "actions", sortable: false },
      { text: '', value: 'data-table-expand', sortable: false },
    ],
    raspberrypis: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      location: {
        site: "Le Grove",
        building: "",
        level: ""
      },
      ip: "",
      status: 0,
      runtime: 0,
      user: "admin",
      password: "admin@espl_1234",
      APs: "APlist"
    },

    defaultItem: {
      name: "",
      location: {
        site: "Le Grove",
        building: "",
        level: ""
      },
      ip: "",
      status: 0,
      runtime: 0,
      user: "admin",
      password: "admin@espl_1234",
      APs: "APlist"
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.raspberrypis = this.$store.state.raspberrypis;
    },

    editItem(item) {
      this.editedIndex = this.raspberrypis.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.raspberrypis.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.raspberrypis.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.raspberrypis[this.editedIndex], this.editedItem);
      } else {
        this.raspberrypis.push(this.editedItem);
      }
      this.close();
    },

    getColor(status) {
      switch (status) {
        case 0:
          return "green";
        case 1:
          return "orange";
        case 2:
          return "red";
      }
    }
  }
};
</script>
