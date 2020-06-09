import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    holidays: [
      {
        id:0,
        name: "New Year's Day",
        start: "2020-01-01",
        end: "2020-01-01",
        color: "red",
      },
      { 
        id:1,
        name: "Chinese New Year",
        start: "2020-01-25",
        end: "2020-01-26",
        color: "red",
      },
      { 
        id:2,
        name: "Good Friday",
        start: "2020-04-10",
        end: "2020-04-10",
        color: "red",
      },
      {
        id:3,
        name: "Labour Day",
        start: "2020-05-01",
        end: "2020-05-01",
        color: "red",
      },
      {
        id:4,
        name: "Vesak Day",
        start: "2020-05-07",
        end: "2020-05-07",
        color: "red",
      },
      {
        id:5,
        name: "Hari Raya Puasa",
        start: "2020-05-24",
        end: "2020-05-24",
        color: "red",
      },
      {
        id:6,
        name: "Hari Raya Haji",
        start: "2020-07-31",
        end: "2020-07-31",
        color: "red",
      },
      {
        id:7,
        name: "National Day",
        start: "2020-08-09",
        end: "2020-08-09",
        color: "red",
      },
      {
        id:8,
        name: "Deepavali",
        start: "2020-11-14",
        end: "2020-11-14",
        color: "red",
      },
      {
        id:9,
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
    },
    deleteholiday(state,id){
      state.holidays = state.holidays.filter((holiday) => holiday.id !== id)
    },
    editholiday(state,updatedholiday){
      state.holidays = state.holidays.map((holiday) => holiday.id == updatedholiday.id ? updatedholiday : holiday)
    },
  },
  actions: {
  },
  modules: {
  }
})
