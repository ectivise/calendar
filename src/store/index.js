import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    holidays: [
      {
        id: 0,
        name: "New Year's Day",
        start: "2020-01-01",
        end: "2020-01-01",
        color: "red",
      },
      {
        id: 1,
        name: "Chinese New Year",
        start: "2020-01-25",
        end: "2020-01-26",
        color: "red",
      },
      {
        id: 2,
        name: "Good Friday",
        start: "2020-04-10",
        end: "2020-04-10",
        color: "red",
      },
      {
        id: 3,
        name: "Labour Day",
        start: "2020-05-01",
        end: "2020-05-01",
        color: "red",
      },
      {
        id: 4,
        name: "Vesak Day",
        start: "2020-05-07",
        end: "2020-05-07",
        color: "red",
      },
      {
        id: 5,
        name: "Hari Raya Puasa",
        start: "2020-05-24",
        end: "2020-05-24",
        color: "red",
      },
      {
        id: 6,
        name: "Hari Raya Haji",
        start: "2020-07-31",
        end: "2020-07-31",
        color: "red",
      },
      {
        id: 7,
        name: "National Day",
        start: "2020-08-09",
        end: "2020-08-09",
        color: "red",
      },
      {
        id: 8,
        name: "Deepavali",
        start: "2020-11-14",
        end: "2020-11-14",
        color: "red",
      },
      {
        id: 9,
        name: "Christmas Day",
        start: "2020-12-25",
        end: "2020-12-25",
        color: "red",
      },
    ],
    accesspoints: [
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "-1",
        },
        last_speedtest: {
          ping: 83,
          download: 17,
          upload: 11,
          jitter: 19,
          timestamp: 1591624801997,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d9017",
        device_id: "1",
        name: "lg-mb1-m&e-wap01",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-mb1",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "-1",
        },
        last_speedtest: {
          ping: 146,
          download: 163,
          upload: 40,
          jitter: 20,
          timestamp: 1591624801997,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d9018",
        device_id: "4",
        name: "lg-mb1-ldm-wap04",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-mb1",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "-1",
        },
        last_speedtest: {
          ping: 67,
          download: 66,
          upload: 39,
          jitter: 3,
          timestamp: 1591624801998,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d9019",
        device_id: "2",
        name: "lg-mb1-cof-wap02",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-mb1",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "-1",
        },
        last_speedtest: {
          ping: 61,
          download: 338,
          upload: 13,
          jitter: 1,
          timestamp: 1591624801998,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d901b",
        device_id: "6",
        name: "lg-mb1-nsp-wap06",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-mb1",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1",
        },
        last_speedtest: {
          ping: 99,
          download: 416,
          upload: 21,
          jitter: 15,
          timestamp: 1591624801998,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d901c",
        device_id: "9",
        name: "lg-m01-caf-wap14",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-m01",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1",
        },
        last_speedtest: {
          ping: 40,
          download: 281,
          upload: 32,
          jitter: 9,
          timestamp: 1591624801999,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d901a",
        device_id: "10",
        name: "lg-m01-gym-wap15",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-m01",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "-1",
        },
        last_speedtest: {
          ping: 83,
          download: 112,
          upload: 68,
          jitter: 1,
          timestamp: 1591624801999,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d901e",
        device_id: "7",
        name: "lg-mb1-chk-wap07",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-mb1",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Podium Block",
          level: "2",
        },
        last_speedtest: {
          ping: 113,
          download: 418,
          upload: 70,
          jitter: 16,
          timestamp: 1591624801999,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d9020",
        device_id: "18",
        name: "lg-p02-207-wap242",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-p02",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1",
        },
        last_speedtest: {
          ping: 102,
          download: 203,
          upload: 100,
          jitter: 7,
          timestamp: 1591624802000,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d901f",
        device_id: "16",
        name: "lg-m01-mtg-wap21",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-m01",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1",
        },
        last_speedtest: {
          ping: 198,
          download: 473,
          upload: 79,
          jitter: 5,
          timestamp: 1591624802000,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d901d",
        device_id: "11",
        name: "lg-m01-coc-wap16",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-m01",
        __v: 0,
      },
      {
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1",
        },
        last_speedtest: {
          ping: 151,
          download: 48,
          upload: 33,
          jitter: 3,
          timestamp: 1591624802000,
        },
        ssid: [""],
        _id: "5ed8befc7b334415c04d9021",
        device_id: "13",
        name: "lg-m01-llo-wap18",
        os: "",
        hardware: "",
        ignore: 0,
        status: 0,
        quality: 0,
        raspi: "iot-lg-m01",
        __v: 0,
      },
    ],
    raspberrypis: [
      {
        name: "iot-lg-m01",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 0,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m02",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 0,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m03",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 0,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m04",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 1,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m05",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 0,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m06",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 0,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m07",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 1,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m08",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 0,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m09",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 1,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m10",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 0,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
      {
        name: "iot-lg-m11",
        location: {
          site: "Le Grove",
          building: "Main Block",
          level: "1"
        },
        ip: "10.12.80.221",
        status: 2,
        runtime: 397440000,
        user: 'admin',
        password:  'admin@espl_1234',
        APs:  'APlist'
      },
    ],
  },
  mutations: {
    addholiday(state, holiday) {
      state.holidays.push(holiday);
    },
    deleteholiday(state, id) {
      state.holidays = state.holidays.filter((holiday) => holiday.id !== id);
    },
    editholiday(state, updatedholiday) {
      state.holidays = state.holidays.map((holiday) =>
        holiday.id == updatedholiday.id ? updatedholiday : holiday
      );
    },
    getholidays(state, holidays){
      state.holidays = holidays;
    }
  },
  actions: {
    getholidays(context,holidays) {
      context.commit('getholidays', holidays);
    }
  },
  modules: {},
});
