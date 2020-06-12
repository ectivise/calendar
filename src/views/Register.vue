<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="4" md="6" sm="12" offset-lg="3" offset-md="2" offset-sm="0" offset="0">
        <v-form>
          <h1>{{ title }}</h1>
          <v-text-field
            label="Phone Number"
            v-model="logininfo.phonenumber"
            required
            :rules="phonerules"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="logininfo.password"
            required
            :rules="[v => !!v || 'item is required for Login']"
            type="password"
          ></v-text-field>

          <!-- login with OTP -->
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
                class="ma-3"
                @click="handlesignup()"
                :disabled="regdisabled"
              >Register</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">One-Time-Password</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row justify="center">
                    <small class="subtitle-1">OTP have been sent to your Phonenumber via SMS</small>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field label="OTP" required v-model="logininfo.otp" :rules="otprules"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="saveuser()">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "Register",
      logininfo: {
        phonenumber: "",
        password: "",
        otp: ""
      },
      dialog: false
    };
  },
  computed: {
    title() {
      if (this.$store.getters.forgetpw == true) {
        return "Forget Password";
      } else {
        return "Register";
      }
    },
    phonerules() {
      const rules = [];

      const rule = v => !!v || "item is required";
      rules.push(rule);

      if (this.logininfo.phonenumber !== "") {
        const rule = v => /(^[0-9]+$)/.test(v) || "number only";
        rules.push(rule);
      }
      return rules;
    },
    otprules() {
      const rules = [];

      const rule = v => !!v || "item is required";
      rules.push(rule);

      if (this.logininfo.phonenumber !== "") {
        const rule1 = v => /(^[0-9]+$)/.test(v) || "number only";
        rules.push(rule1);

        const rule2 = v => v.length <= 6 || "Otp length is 6 digit code only";
        rules.push(rule2);
      }
      return rules;
    },
    regdisabled() {
      if (
        this.logininfo.phonenumber !== "" &&
        /(^[0-9]+$)/.test(this.logininfo.phonenumber) &&
        this.logininfo.password !== ""
      ) {
        return false;
      }
      return true;
    }
  },
  methods: {
    handlesignup() {
      this.$store.dispatch("usersignup", this.logininfo);
    },
    async saveuser() {
      await this.$store.dispatch("saveuser", this.logininfo);
      if (this.$store.getters.loginerrorcode == 0) {
        let url = "/";
        this.$router.push(url);
        this.$store.commit("forgetpw", false);
        this.$store.commit("login");
      }
    }
  }
};
</script>
