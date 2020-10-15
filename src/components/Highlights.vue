<template>
<div class="px-5">
    <h3 class="font-bold text-2xl">Today's highlights </h3>
    <div class="">
        <!-- Wind Status -->
        <div class="flex flex-col items-center justify-center bg-background-primary py-5 mt-8 rounded-lg">
            <p class="font-medium text-lg">Wind status</p>
            <h4>
                <span class="text-64px font-bold">{{ currentDayWeather.wind_speed | round }}</span>
                <span class="text-4xl font-medium pl-2">mph</span>
            </h4>
            <div class="flex items-center mt-6">
                <svg class="inline w-8 h-8 p-2 fill-current bg-background-ternary rounded-full transform rotate-n150" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                </svg>
                <span class="uppercase font-medium text-sm ml-2">{{ currentDayWeather.wind_direction_compass }}</span>
            </div>
        </div>
        <!-- Humidity -->
        <div class="flex flex-col items-center justify-center bg-background-primary py-5 mt-8 rounded-lg">
            <p class="font-medium text-lg">Humidty</p>
            <h4>
                <span class="text-64px font-bold">{{ currentDayWeather.humidity | round }}</span>
                <span class="text-4xl font-medium pl-2">%</span>
            </h4>
            <!-- Humidity level percentage -->
            <div class="flex flex-col items-center w-64 mt-4 font-bold text-xs text-tc-secondary">
                <div class="flex items-center justify-between w-full">
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                </div>
                <!-- Total Bar -->
                <div class="w-full h-2 bg-tc-primary rounded-80px">
                    <!-- Current bar -->
                    <div class="bg-yellow-500 h-2 rounded-80px" :style="humidityBar"></div>
                </div>
                <p class="w-full text-right">%</p>
            </div>
        </div>
        <!-- Visibility -->
        <div class="flex flex-col items-center justify-center bg-background-primary py-5 mt-8 rounded-lg">
            <p class="font-medium text-lg">Visibility</p>
            <h4>
                <span class="text-64px font-bold">{{ currentDayWeather.visibility | round }}</span>
                <span class="text-4xl font-medium pl-2">miles</span>
            </h4>
        </div>
        <!-- Air Pressure -->
        <div class="flex flex-col items-center justify-center bg-background-primary py-5 mt-8 rounded-lg">
            <p class="font-medium text-lg">Air Pressure</p>
            <h4>
                <span class="text-64px font-bold">{{ currentDayWeather.air_pressure | round }}</span>
                <span class="text-4xl font-medium pl-2">mb</span>
            </h4>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['weather']),
        //Unpacking current day weather info from weather object
        currentDayWeather() {
            return this.weather.currentDay;
        },
        // Humidity percentage bar
        humidityBar(){
            return {
                width : Math.round(this.currentDayWeather.humidity) + "%",
            }
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
