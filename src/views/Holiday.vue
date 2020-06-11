<template>
  <v-container>
    <v-col cols="md6 sm6 xs12" offset="md4 sm4 xs0">
      <v-row>
        <v-layout row justify-center>
          <h1 class="mx-2">Public Holiday</h1>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">ADD HOLIDAY</v-btn>
            </template>

            <v-card>
              <v-form v-model="valid">
              <v-card-title>
                <span class="headline">Holiday</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                    <v-flex xs12 sm12 md12>
                      <v-text-field
                        label="Holiday Name*"
                        v-model="emptyholiday.name"
                        :rules="[v => !!v || 'item is required']"
                        required
                        ref="name"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-menu
                        v-model="menu1"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on,attrs }">
                          <v-text-field
                            v-model="emptyholiday.start"
                            label="Start Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            :rules="daterules"
                            ref="start"
                            required
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="emptyholiday.start" @input="menu1 = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="emptyholiday.end"
                            label="End Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            :rules="daterules"
                            ref="end"
                            required
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="emptyholiday.end" @input="menu2 = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Close</v-btn>
                <v-btn color="blue darken-1" text :disabled="!valid" @click="saveholiday">Save</v-btn>
              </v-card-actions>
              </v-form>
            </v-card>

          </v-dialog>
        </v-layout>
      </v-row>
      <v-row justify="center">
        <div class="table">
          <v-simple-table fixed-header>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center font-weight-bold">Name</th>
                  <th class="text-center font-weight-bold">Date</th>
                  <th class="text-center font-weight-bold" colspan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(holiday,index) in holidays" :key="index">
                  <td>{{ holiday.name }}</td>
                  <td>{{ convertdate[index] }}</td>
                  <td>
                    <v-btn class="px-0" text small @click="editmode(holiday)">
                      <v-icon small>mdi-pencil</v-icon>edit
                    </v-btn>
                  </td>
                  <td>
                    <v-btn class="px-0" text small @click="deleteholiday(holiday._id)">
                      <v-icon small>mdi-delete</v-icon>delete
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Holiday",
  data() {
    return {
      valid:false,
      emptyholiday: {
        name: "",
        start: "",
        end: ""
      },
      dialog: false,
      menu1: false,
      menu2: false,
      editing: false,
    };
  },
  created() {
    this.getholidays();
  },
  computed: {
    daterules() {
      const rules = [];

      if (this.emptyholiday.start !== "" && this.emptyholiday.end !== "") {
        const rule = () =>
          this.emptyholiday.start <= this.emptyholiday.end ||
          "Start Date must be earlier than End Date";
        rules.push(rule);
      }

      const rule = v => !!v || "date is required";
      rules.push(rule);

      return rules;
    },
    convertdate() {
      let dates = [];
      for (let i = 0; i < this.holidays.length; i++) {
        if (this.holidays[i].start == this.holidays[i].end) {
          dates.push(this.holidays[i].start);
        } else {
          dates.push(this.holidays[i].start + " - " + this.holidays[i].end);
        }
      }
      return dates;
    },
    holidays() {
      return this.$store.getters.holidays;
    }
  },
  methods: {
    getholidays() {
      this.$store.dispatch("getholidays");
    },
    saveholiday() {
        if (this.editing == true) {
          this.$store.dispatch("editholiday", this.emptyholiday);
          this.editing = false;
        } else {
          this.$store.dispatch("addholiday", this.emptyholiday);
        }

        this.dialog = false;
        this.resetholiday();
  
        

      
    },
    deleteholiday(id) {
      this.$store.dispatch("deleteholiday", id);
      this.getholidays();
    },
    editmode(holiday) {
      this.emptyholiday = Object.assign({}, holiday);
      this.dialog = true;
      this.editing = true;
    },
    close() {
      this.dialog = false;
      this.editing = false;
      this.resetholiday();
    },
    resetholiday() {
      this.emptyholiday = {
        id: 0,
        name: "",
        start: "",
        end: "",
        color: "red"
      };
    }
  }
};
</script>
