import axios from "axios";
import { mapState } from "vuex";

export const weatherData = {
  data() {
    return {
      //API URL
      apiURL: "https://www.metaweather.com/api/location",
      corsURL: "https://cors-anywhere.herokuapp.com",
    };
  },
  created() {
    // this.getCurrentPosition();
  },
  computed: {
    ...mapState(["userCoords"]),
  },
  methods: {
    // Get users coordinates
    getCurrentCoordinates(callback) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          //   Success - Permission Given
          (position) => {
            // Reset api tracking variables
            this.$store.dispatch("hideIsError");
            // Co ordinates object
            let coords = {
              Latitude: position.coords.latitude,
              Longitude: position.coords.longitude,
            };
            callback(coords);
          },
          //   Error - Permission declined
          () => {
            this.$store.dispatch(
              "setErrorMessage",
              "Location permission denied by the user"
            );
            // Stop loading
            this.$store.dispatch("stopLoading");
          }
        );
      } else {
        // Geolocation not supported in the browser
        this.$store.dispatch(
          "setErrorMessage",
          "Looks like you are using an outdated browser ! Please use an updated browser"
        );
        // Stop loading
        this.$store.dispatch("stopLoading");
      }
    },
    //Get users current position
    async getCurrentPosition() {
      // Reset api tracking variables
      this.$store.dispatch("resetTracker");
      // Start loading
      this.$store.dispatch("startLoading");

      this.getCurrentCoordinates(async (coords) => {
        // coords = {};
        // Dispatch action to update user co ordinates
        this.$store.dispatch("getUserCoords", coords);
        await this.getLocationByCoords(coords);
        await this.getWeatherInfoById();
        // Stop loading
        this.$store.dispatch("stopLoading");
        // Process done if no error
        if (!this.$store.state.loader.isError) {
          this.$store.dispatch("showIsDone");
        }
      });
    },
    async getLocationByCoords(coords) {
      try {
        let response = await axios.get(
          `${this.corsURL}/${this.apiURL}/search/?lattlong=${coords.Latitude},${coords.Longitude}`
        );
        // If request OK
        if (response.status == 200) {
          //Prepare locations object
          const locations = {
            // First location in the array is exact or the most near location
            current: response.data[0],
            // Rest are near location in ascending distance
            near: response.data.splice(1),
          };

          // Dispatch action to store current and near locations
          this.$store.dispatch("getLocations", locations);
        }
      } catch (err) {
        // Error fetching data from the api
        this.$store.dispatch(
          "setErrorMessage",
          "Error loading data ! Please try again later ..."
        );
      }
    },
    // To get weather information of a location by 'woeid' - Where on earth id
    async getWeatherInfoById() {
      // Location's where on earth id
      const woeid = this.$store.state.locations.current.woeid;
      try {
        let response = await axios.get(
          `${this.corsURL}/${this.apiURL}/${woeid}`
        );
        // If request OK
        if (response.status == 200) {
          //Prepare weather object
          const weather = {
            // First record of current day's weather
            currentDay: response.data.consolidated_weather[0],
            // Rest of the records are a set of 5 day forecast
            forecast: response.data.consolidated_weather.splice(1),
          };

          // Dispatch action to store current and forecast of weather
          this.$store.dispatch("getWeatherInfo", weather);
        }
      } catch (err) {
        // Error fetching data from the api
        this.$store.dispatch(
          "setErrorMessage",
          "Error loading weather data ! Please try again later ..."
        );
      }
    },
    // To get location infromation by user search query
    async getLocationByQuery(query) {
      if (query != "") {
        try {
          let response = await axios.get(
            `${this.corsURL}/${this.apiURL}/search/?query=${query}`
          );
          // If request OK
          if (response.status == 200) {
            // Return matching location llist
            return response.data;
          }
        } catch (err) {
          // Error fetching data from the api
          this.$store.dispatch(
            "setErrorMessage",
            "Error searching location ! Please try again later ..."
          );
        }
      }
    },
  },
};
