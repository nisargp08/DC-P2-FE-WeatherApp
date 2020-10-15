import axios from "axios";
import { mapState } from "vuex";

export const weatherData = {
  data() {
    return {
      //API status tracker
      isLoading: false,
      isError: false,
      isDone: false,
      // Error message storage
      errArray: [],
      //API URL
      apiURL: "https://www.metaweather.com/api/location",
      corsURL: "https://cors-anywhere.herokuapp.com",
    };
  },
  created() {
    this.getCurrentCoordinates();
  },
  computed: {
    ...mapState(["userCoords"]),
  },
  methods: {
    //Get users current co-ordinates
    getCurrentCoordinates() {
      // Reset variables
      this.resetTracker();
      // Begin loading
      this.isLoading = true;

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          // Co ordinates object
          let coords = {
            Latitude: position.coords.latitude,
            Longitude: position.coords.longitude,
          };
          // Dispatch action to update user co ordinates
          this.$store.dispatch("getUserCoords", coords);
          this.getCurrentLocation();
          this.getWeatherInfoById();
          //Fetching Done
          this.isDone = true;
        });
      } else {
        // Geolocation not supported in the browser
        this.setErrorMessage(
          "Looks like you are using an outdated browser ! Please use an updated browser"
        );
      }
      //Loading done
      this.isLoading = false;
    },
    async getCurrentLocation() {
      try {
        let response = await axios.get(
          `${this.corsURL}/${this.apiURL}/search/?lattlong=${this.userCoords.Latitude},${this.userCoords.Longitude}`
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
        this.setErrorMessage("Error loading data ! Please try again later ...");
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
        this.setErrorMessage(
          "Error loading weather data ! Please try again later ..."
        );
      }
    },
    // Function to reset api tracking variables
    resetTracker() {
      this.isLoading = this.isError = this.isDone = false;
      this.errArray = [];
    },
    //Sets the error message
    setErrorMessage(errMsg) {
      this.isError = true;
      this.errArray.push(errMsg);
    },
  },
};
