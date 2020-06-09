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
              <v-card-title>
                <span class="headline">Holiday</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm12 md12>
                      <v-text-field label="Holiday Name*" v-model="holiday.name" required></v-text-field>
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
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="holiday.start"
                            label="Start Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="holiday.start" @input="menu1 = false"></v-date-picker>
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
                            v-model="holiday.end"
                            label="End Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="holiday.end" @input="menu2 = false"></v-date-picker>
                      </v-menu>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="saveholiday">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-row>
      <v-row justify="center">
        <div class="calendar">
          <v-simple-table :dense="dense" :fixed-header="fixedHeader" :height="height">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center font-weight-bold">Name</th>
                  <th class="text-center font-weight-bold">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(holiday,index) in holidays" :key="index">
                  <td>{{ holiday.name }}</td>
                  <td>{{ convertdate[index] }}</td>
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
      holiday: {
        name: "",
        start: "",
        end: "",
        color: "red",
      },
      holidays: [],
      dialog: false,
      menu1: false,
      menu2: false,
    };
  },
  mounted() {
    this.getholidays();
  },
  computed: {
    convertdate() {
      let dates = [];
      for (let i = 0; i < this.holidays.length; i++) {
        if (this.holidays[i].start == this.holidays[i].end) {
          dates.push(this.holidays[i].start);
        } else {
          dates.push(this.holidays[i].start + " to " + this.holidays[i].end);
        }
      }
      return dates;
    }
  },
  methods: {
    getholidays() {
      this.holidays = this.$store.state.holidays;
    },
    saveholiday(){
        this.dialog = false;
        this.$store.commit('addholiday',this.holiday);
    }
  }
};
</script>
