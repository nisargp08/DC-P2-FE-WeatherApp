import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  
  state : {
    currentTheme : 'light-theme',
    userCoords : {},
    locations : [],
    weather : [],
  },

  mutations : {
    //Updates the theme to the passed theme name
    setTheme(state,themeName){
      state.currentTheme = themeName;
    },
    // Set user coords
    setUserCoords(state,coords){
      state.userCoords.Latitude = coords.Latitude;
      state.userCoords.Longitude = coords.Longitude;
    },
    // Set Locations
    setLocations(state,locations){
      state.locations = locations;
    },
    // Set Weather information
    setWeatherInfo(state,weather){
      state.weather = weather;
    }
  },

  actions : {
    // Toggle theme
    toggleTheme({state,commit}){
      // If not empty
        if(state.currentTheme === 'light-theme'){
          //Switch to dark-theme
          commit("setTheme","dark-theme");
        } else {
          //Else switch to light-theme 
          commit("setTheme","light-theme");
        }
    },
    //Get user co-ordinates
    getUserCoords({commit},coords){
      //Mutate state
      commit("setUserCoords",coords);
    },
    //Get users current and near locations
    getLocations({commit},locations){
      //Mutate state
      commit("setLocations",locations);
    },
    //Get current and forecast of the weather
    getWeatherInfo({commit},weather){
      //Mutate state
      commit("setWeatherInfo",weather);
    }
  },

  modules: {
  }
})

export default store
