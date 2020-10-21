<template>
<div id="app">
    <div class="flex flex-col min-h-screen bg-background-primary h-full" :class="currentTheme">
        <div class="flex-1 flex flex-col font-raleway text-tc-primary text-base transition-background-25-ease-in">
            <div class="flex flex-col flex-1">
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
                    <template v-else-if="loader.isDone">
                        <!-- Today's weather information -->
                        <app-todays-card></app-todays-card>
                    </template>
                </div>
            </div>
            <!-- Week & Highlight information -->
            <div class="bg-background-secondary">
                <!-- Display when loading is finished -->
                <template v-if="loader.isDone">
                    <!-- Weather information for the next 7 days -->
                    <div class="flex justify-center flex-wrap py-12">
                        <!-- Forecast card for next 5 days -->
                        <app-forecast-card v-for="(day,index) in forecast" :key="index" :day="day"></app-forecast-card>
                    </div>
                    <!-- Today's weather highlights - Wind,Humidity,Visibility,Air Pressure -->
                    <app-highlights></app-highlights>
                </template>
            </div>
        </div>
        <!-- Footer -->
        <footer class="bg-background-secondary py-12 text-tc-ternary">
            <p class="font-montserrat text-sm text-center">Weather API by <a class="text-red-500" href="https://www.metaweather.com/" target="_blank">MetaWeather</a></p>
            <p class="font-montserrat text-sm text-center">Nisarg Patel @ DevChallenges.io</p>
        </footer>
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
        if(!this.userCoords.Latitude || !this.userCoords.Longitude){
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
        ...mapState(['currentTheme', 'weather', 'loader','userCoords']),
        // Return forecast Array from the weather Object
        forecast() {
            return this.weather.forecast;
        }
    },
    data() {
        return {}
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
}
</style>
