import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    holidays: [
      {
        name: "New Year's Day",
        start: "2020-01-01",
        end: "2020-01-01",
        color: "red",
      },
      {
        name: "Chinese New Year",
        start: "2020-01-25",
        end: "2020-01-26",
        color: "red",
      },
      {
        name: "Good Friday",
        start: "2020-04-10",
        end: "2020-04-10",
        color: "red",
      },
      {
        name: "Labour Day",
        start: "2020-05-01",
        end: "2020-05-01",
        color: "red",
      },
      {
        name: "Vesak Day",
        start: "2020-05-07",
        end: "2020-05-07",
        color: "red",
      },
      {
        name: "Hari Raya Puasa",
        start: "2020-05-24",
        end: "2020-05-24",
        color: "red",
      },
      {
        name: "Hari Raya Haji",
        start: "2020-07-31",
        end: "2020-07-31",
        color: "red",
      },
      {
        name: "National Day",
        start: "2020-08-09",
        end: "2020-08-09",
        color: "red",
      },
      {
        name: "Deepavali",
        start: "2020-11-14",
        end: "2020-11-14",
        color: "red",
      },
      {
        name: "Christmas Day",
        start: "2020-12-25",
        end: "2020-12-25",
        color: "red",
      },
    ],
  },
  mutations: {
    addholiday(state, holiday){
      state.holidays.push(holiday);
    }
  },
  actions: {
  },
  modules: {
  }
})
