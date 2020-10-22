<template>
<div id="app">
    <div class="flex flex-col min-h-screen bg-background-primary h-full" :class="currentTheme">
        <div class="flex-1 flex flex-col font-raleway text-tc-primary text-base transition-background-25-ease-in xl:flex-row" :class=" loader.isError ? 'xl:flex-col' : ''">
            <div class="relative flex flex-col flex-1 xl:flex-reset" :class=" loader.isError ? 'xl:flex-1' : 'xl:w-460px'">
                <!-- Header - Search Location,Current Lcoation,Theme switch -->
                <app-sidebar></app-sidebar>
                <div class="flex flex-col justify-center flex-1">
                    <!-- Loading animation when api is fetching data -->
                    <template v-if="loader.isLoading">
                        <app-loader class="self-center"></app-loader>
                    </template>
                    <!-- Show error if occured -->
                    <template v-else-if="loader.isError">
                        <app-error></app-error>
                    </template>
                    <!-- Display when loading is finished -->
                    <template v-else-if="loader.isDone && !loader.isError">
                        <!-- Today's weather information -->
                        <app-todays-card :isCelcius="isCelcius"></app-todays-card>
                    </template>
                </div>
            </div>
            <!-- Week & Highlight information -->
            <div class="bg-background-secondary flex flex-col justify-center items-center" :class=" loader.isError ? '' : 'xl:flex-1'">
                <!-- Loading animation when api is fetching data -->
                <div v-if="loader.isLoading">
                    <app-loader class="self-center"></app-loader>
                </div>
                <!-- Display when loading is finished -->
                <div v-else-if="loader.isDone && !loader.isError" class="py-12">
                    <!-- Celcius & Fahrenheit -->
                    <div class="flex items-center justify-end">
                        <button :class="isCelcius ? 'bg-gray-600' : 'bg-background-ternary'" @click="isCelcius = true" class="font-bold text-lg text-tc-primary px-3 py-2 rounded-full mx-1 hover:bg-background-primary focus:outline-none">&deg;C</button>
                        <button :class="!isCelcius ? 'bg-gray-600' : 'bg-background-ternary'" @click="isCelcius = false" class="font-bold text-lg text-tc-primary px-3 py-2 rounded-full mx-1 hover:bg-background-primary focus:outline-none">&deg;F</button>
                    </div>
                    <!-- Weather information for the next 7 days -->
                    <div class="flex justify-center flex-wrap">
                        <!-- Forecast card for next 5 days -->
                        <app-forecast-card :isCelcius="isCelcius" v-for="(day,index) in forecast" :key="index" :day="day"></app-forecast-card>
                    </div>
                    <!-- Today's weather highlights - Wind,Humidity,Visibility,Air Pressure -->
                    <app-highlights class="mt-20"></app-highlights>
                </div>
                <!-- Footer -->
                <footer class="bg-background-secondary pt-12 pb-8 text-tc-ternary">
                    <p class="font-montserrat text-sm text-center">Weather API by <a class="text-red-500" href="https://www.metaweather.com/" target="_blank">MetaWeather</a></p>
                    <p class="font-montserrat text-sm text-center">Nisarg Patel @ DevChallenges.io</p>
                </footer>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import { weatherData } from '@/mixins/weatherMixin.js';

export default {
    name: 'App',
    mixins: [weatherData],
    created() {
        // this.getCurrentPosition();
        if (!this.userCoords.Latitude || !this.userCoords.Longitude) {
            this.getCurrentPosition();
        }
    },
    components: {
        'AppSidebar': () => import('@/components/Sidebar.vue'),
        'AppTodaysCard': () => import('@/components/TodaysCard.vue'),
        'AppForecastCard': () => import('@/components/ForecastCard.vue'),
        'AppHighlights': () => import('@/components/Highlights.vue'),
        'AppLoader': () => import('@/components/Loader.vue'),
        'AppError': () => import('@/components/Error.vue'),
    },
    computed: {
        ...mapState(['currentTheme', 'weather', 'loader', 'userCoords']),
        // Return forecast Array from the weather Object
        forecast() {
            return this.weather.forecast;
        }
    },
    data() {
        return {
            // Temperature type
            isCelcius : true,
        }
    },

}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.todays-weather::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: .05;
    background-image: url('./assets/images/Cloud-background.png');
    background-color: var(--bg-background-primary);
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: -20%;

    @media (min-width: 1280px){
        background-position-y: 0%;
    }
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--bg-background-primary); 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--bg-background-ternary); 
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
