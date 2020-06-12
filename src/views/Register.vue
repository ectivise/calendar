<template>
  <v-container>
    <v-col cols="lg6 md6 sm12 xs12">
      <v-form>
        <h1>Register</h1>
        <v-text-field label="Phone Number" v-model="phonenumber" required></v-text-field>
        <v-text-field label="Password" v-model="password" required></v-text-field>

        <!-- login with OTP -->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mx-3">Register</v-btn>
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
                    <v-text-field label="OTP" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "Register",
      phonenumber: "",
      password: "",
      dialog: false,
    };
  }
};
</script>
