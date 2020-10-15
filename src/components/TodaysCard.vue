<template>
<div class="todays-weather relative flex-1 flex flex-col items-center justify-center my-16">
    <div class="w-40">
        <img :src="weatherImage" :alt="currentDayWeather.weather_state_name">
    </div>
    <h1>
        <span class="text-144px font-medium">{{ currentDayWeather.the_temp | round }}</span>
        <span class="text-48px font-semibold text-tc-secondary">&deg;C</span>
    </h1>
    <h2 class="text-4xl font-semibold text-tc-secondary">{{ currentDayWeather.weather_state_name }}</h2>
    <!-- Fri, 5 Jun -->
    <p class="font-medium text-lg text-tc-ternary my-8">Today <span class="mx-4">&middot;</span> {{ currentDayWeather.applicable_date }}</p>
    <div class="flex items-center font-semibold text-lg text-tc-ternary">
        <svg class="inline" style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 11.5A2.5 2.5 0 019.5 9 2.5 2.5 0 0112 6.5 2.5 2.5 0 0114.5 9a2.5 2.5 0 01-2.5 2.5M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
        </svg>
        <span class="mx-2">{{ curentLocation.title }}</span>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed : {
        ...mapState(['locations','weather']),
        //Unpacking current location from locations object
        curentLocation(){
            return this.locations.current;
        },
        //Unpacking current day weather info from weather object
        currentDayWeather(){
            return this.weather.currentDay;
        },
        // Return image based on the type of weather
        weatherImage(){
            let weatherType = this.currentDayWeather.weather_state_name;
            weatherType = weatherType.replace(/\s+/g,'');
            return require(`@/assets/images/${weatherType}.png`);   
        }
    },
    filters : {
        // Round value
        round(value){
            if(value != ""){
                return Math.round(value);
            }
        }
    }
}
</script>

<style>
</style>
