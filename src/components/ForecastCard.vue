<template>
<div class="flex flex-col items-center bg-background-primary rounded-lg p-5 m-4">
    <p class="font-medium text-base text-center">{{ day.applicable_date | formatDate }}</p>
    <div class="w-16 mx-auto flex-1">
        <img :src="weatherImage(day.weather_state_name)" :alt="day.weather_state_name">
    </div>
    <div class="flex items-center justify-between font-medium text-base mt-8">
        <span>{{ day.min_temp | round }} &deg;C</span>
        <span class="text-tc-secondary ml-4">{{ day.max_temp | round }} &deg;C</span>
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
        }
    },
}
</script>

<style>

</style>
