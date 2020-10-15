<template>
<div id="app">
    <div class="min-h-screen bg-background-primary h-full" :class="currentTheme">
        <div class="font-raleway text-tc-primary text-base transition-background-25-ease-in">
            <div>
                <!-- Header - Search Location,Current Lcoation,Theme switch -->
                <app-sidebar></app-sidebar>
                <!-- Today's weather information -->
                <app-todays-card></app-todays-card>
            </div>
            <!-- Week & Highlight information -->
            <div class="bg-background-secondary">
                <!-- Weather information for the next 7 days -->
                <div class="flex items-center justify-center flex-wrap py-12">
                    <!-- Day card -->
                    <div v-for="(day,index) in 5" :key="index" class="bg-background-primary rounded-lg p-5 m-4">
                        <p class="font-medium text-base text-center">Tomorrow</p>
                        <div class="w-16 mx-auto">
                            <img src="@/assets/images/Sleet.png" alt="">
                        </div>
                        <div class="flex items-center justify-between font-medium text-base mt-8">
                            <span>16 &deg;C</span>
                            <span class="text-tc-secondary ml-4">11 &deg;C</span>
                        </div>
                    </div>
                </div>
                <!-- Today's weather highlights - Wind,Humidity,Visibility,Air Pressure -->
                <app-highlights></app-highlights>
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
    mixins : [weatherData],
    components: {
        'AppSidebar': () => import('@/components/Sidebar.vue'),
        'AppTodaysCard': () => import('@/components/TodaysCard.vue'),
        'AppHighlights': () => import('@/components/Highlights.vue'),
    },
    computed: {
        ...mapState(['currentTheme'])
    },
    data() {
        return {
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
}
</style>
