<template>
<div class="self-center text-center p-4">
    <div>
        <img src="@/assets/images/404-dark.png" alt="Error">
    </div>
    <h1 class="font-bold text-3xl text-red-500">Oops ! Error Occured</h1>
    <div class=" my-2">
        <hr class="border-gray-800">
    </div>
    <!-- <p v-for="(error,index) in loader.errArray" :key="index">
                                {{ error }}
                            </p> -->
    <div class="text-left">
        <h3 class="font-bold mt-4">Reasons : </h3>
        <div>
            <li><a class="text-red-500" href="https://www.metaweather.com/" target="_blank">MetaWeather's</a> API could be down.</li>
            <li>Enable location services in your browser</li>
            <li>Use an updated browser if you are not getting a prompt for location access</li>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
