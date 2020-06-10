<template>
  <div class="table">
    <v-simple-table :dense="dense" :fixed-header="fixedHeader" :height="height">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left font-weight-bold">Device ID</th>
            <th class="text-left font-weight-bold">Name</th>
            <!-- <th class="text-center font-weight-bold">Password</th> -->
            <!-- <th class="text-center font-weight-bold">IP</th> -->
            <th class="text-left font-weight-bold">Building</th>
            <th class="text-left font-weight-bold">Storey</th>
            <th class="text-left font-weight-bold">Status</th>
            <th class="text-left font-weight-bold">Raspi ID</th>
            <th class="text-left font-weight-bold">Ping(ms)</th>
            <th class="text-left font-weight-bold">Raspi(mb/s)</th>
            <th class="text-left font-weight-bold">Raspi(mb/s)</th>
            <th class="text-left font-weight-bold">Raspi ID(ms)</th>
            <th class="text-left font-weight-bold">timestamp</th>
            <th class="text-center font-weight-bold" colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(accesspoint,index) in accesspoints" :key="index">
            <td class="text-left" >{{ accesspoint.device_id }}</td>
            <td class="text-left" >{{ accesspoint.name }}</td>
            <td class="text-left" >{{ accesspoint.location.building }}</td>
            <td class="text-left" >{{ accesspoint.location.level }}</td>
            <td class="text-left" >{{ accesspoint.status }}</td>
            <td class="text-left" >{{ accesspoint.raspi }}</td>
            <td class="text-left" >{{ accesspoint.last_speedtest.download }}</td>
            <td class="text-left" >{{ accesspoint.last_speedtest.upload}}</td>
            <td class="text-left" >{{ accesspoint.last_speedtest.ping }}</td>
            <td class="text-left" >{{ accesspoint.last_speedtest.jitter }}</td>
            <td class="text-left" >{{ accesspoint.last_speedtest.timestamp }}</td>
            <td class="px-0 mx-0">
              <v-btn class="px-0 mx-0" text small @click="editmode(holiday)">
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
            </td>
            <td class="px-0 mx-0">
              <v-btn class="px-0 mx-0" text small @click="deleteholiday(holiday.id)">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
    name: "accesspoint",
    data(){
        return {
            accesspoints: this.$store.state.accesspoints
        }
    }

};
</script>

<style>
</style>