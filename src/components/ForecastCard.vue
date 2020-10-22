<template>
<div class="flex flex-col items-center bg-background-primary rounded-lg p-5 m-4">
    <p class="font-medium text-base text-center">{{ day.applicable_date | formatDate }}</p>
    <div class="w-16 mx-auto flex-1">
        <img :src="weatherImage(day.weather_state_name)" :alt="day.weather_state_name">
    </div>
    <div class="flex items-center justify-between font-medium text-base mt-8">
        <span>
            {{ minTemperature(day.min_temp) | round }}
            <span v-html="tempText"></span>
        </span>
        <span class="text-tc-secondary ml-4">
            {{ maxTemperature(day.max_temp) | round }}
            <span v-html="tempText"></span>
        </span>
    </div>
</div>
</template>

<script>
import { helperFilters,helperMethods } from '@/mixins/helperUtils.js';

export default {
    mixins : [helperFilters,helperMethods],
    props: {
        day: {
            type: Object,
            required: true
        },
        isCelcius : {
            type : Boolean,
        }
    },
    methods : {
        // Return minimum temperature based on selected type
        minTemperature(temp){
            //If 'isCelcius' true then convert temperature to celcius
            if(this.isCelcius){
                // Return temp from api as it is in celcius by default
                return temp;
            } else {
                // convert temperature to fahrenheit
                return((temp * 9/5) + 32);
            }
        },
        // Return maximum temperature based on selected type
        maxTemperature(temp){
            //If 'isCelcius' true then convert temperature to celcius
            if(this.isCelcius){
                // Return temp from api as it is in celcius by default
                return temp;
            } else {
                // convert temperature to fahrenheit
                return((temp * 9/5) + 32);
            }
        },
    },
    computed : {
        // Return temperature type text based on selection
        tempText(){
            if(this.isCelcius){
                return "&deg;C";
            } else {
                return "&deg;F";
            }
        }
    }
}
</script>

<style>

</style>
