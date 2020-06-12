<template>
  <v-container>
    <v-col cols="lg6 md6 sm12 xs12">
      <v-form v-model="valid" >
        <h1>Login</h1>
        <v-text-field label="Phone Number" v-model="logininfo.loginphonenumber" :rules="phonerules" required @focus="resetvalidation()"></v-text-field>
        <v-text-field label="Password" v-model="logininfo.loginpassword" :rules="[v => !!v || 'item is required for Login']" required @focus="resetvalidation()"></v-text-field>
        <v-btn class="primary ma-3" @click="handlelogin()" :disabled="!valid">login</v-btn>

        <!-- login with OTP -->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on" class="ma-3" @click="handleloginotp()" :disabled="otpdisabled">Login with OTP</v-btn>
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
                    <v-text-field label="OTP" required v-model="logininfo.loginotp" :rules="otprules"></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" sm="6" md="6" offset="3">
                    <v-btn text>Resend OTP</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="loginotp()">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn color="blue darken-1" text @click="dialog = false">Forgot Password</v-btn>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid:false,
      name: "Login",
      logininfo: {
        loginphonenumber: "",
        loginpassword: "",
        loginotp:"",
      },
      dialog: false,
    };
  },
  computed:{
      loginmessage(){
          return this.$store.getters.loginmessage
      },
      phonerules(){
          const rules = [];

          const rule = v => !!v || 'item is required'
          rules.push(rule);
          
          if(this.logininfo.loginphonenumber !== ""){
              const rule = v => /(^[0-9]+$)/.test(v) || 'number only'
              rules.push(rule);
          }
          return rules
      },
      otprules(){
          const rules = [];

          const rule = v => !!v || 'item is required'
          rules.push(rule);
          
          if(this.logininfo.loginphonenumber !== ""){
              const rule1 = v => /(^[0-9]+$)/.test(v) || 'number only'
              rules.push(rule1);

              const rule2 = v => v.length <= 6 || 'Otp length is 6 digit code only'
              rules.push(rule2);
          }
          return rules
      },
      otpdisabled(){
          if(this.logininfo.loginphonenumber !== "" && /(^[0-9]+$)/.test(this.logininfo.loginphonenumber)){
              return false
          }
          return true
      },
  },
  methods:{
    async handlelogin(){
        await this.$store.dispatch('login',this.logininfo);
        if (this.$store.getters.loginerrorcode == 0) {
            this.$store.commit("login");
            let url = "/";
            this.$router.push(url);
        }
      },
     handleloginotp(){
        this.$store.dispatch('logingetotp',this.logininfo);
     },
     async loginotp(){
        await this.$store.dispatch('login2fa',this.logininfo);
        if (this.$store.getters.loginerrorcode == 0) {
            this.dialog = false;
            this.$store.commit("login");
            let url = "/";
            this.$router.push(url);
        }
     },
     resetvalidation(){
         this.valid=false;
     },
  },
    
};
</script>
