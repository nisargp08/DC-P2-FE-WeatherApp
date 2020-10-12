<template>
<div id="app">
    <div class="min-h-screen bg-background-primary h-full" :class="currentTheme">
        <div class="font-raleway text-tc-primary text-base transition-background-25-ease-in">
            <div>
                <!-- Header - Search Location,Current Lcoation,Theme switch -->
                <app-sidebar></app-sidebar>
                <!-- Today's weather information -->
                <div class="todays-weather relative flex-1 flex flex-col items-center justify-center my-16">
                    <div class="w-40">
                        <img src="@/assets/images/Shower.png" alt="">
                    </div>
                    <h1>
                        <span class="text-144px font-medium">15</span>
                        <span class="text-48px font-semibold text-tc-secondary">&deg;C</span>
                    </h1>
                    <h2 class="text-4xl font-semibold text-tc-secondary">Shower</h2>
                    <p class="font-medium text-lg text-tc-ternary my-8">Today <span class="mx-4">&middot;</span> Fri, 5 Jun</p>
                    <div class="flex items-center font-semibold text-lg text-tc-ternary">
                        <svg class="inline" style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 11.5A2.5 2.5 0 019.5 9 2.5 2.5 0 0112 6.5 2.5 2.5 0 0114.5 9a2.5 2.5 0 01-2.5 2.5M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
                        </svg>
                        <span class="mx-2">Helsinki</span>
                    </div>
                </div>
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
                <div class="px-5">
                    <h3 class="font-bold text-2xl">Today's highlights </h3>
                    <div class="">
                        <!-- Wind Status -->
                        <div class="flex flex-col items-center justify-center bg-background-primary py-5 mt-8 rounded-lg">
                            <p class="font-medium text-lg">Wind status</p>
                            <h4>
                                <span class="text-64px font-bold">7</span>
                                <span class="text-4xl font-medium pl-2">mph</span>
                            </h4>
                            <div class="flex items-center mt-6">
                                <svg class="inline w-8 h-8 p-2 fill-current bg-background-ternary rounded-full transform rotate-n150" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                                </svg>
                                <span class="uppercase font-medium text-sm ml-2">wsw</span>
                            </div>
                        </div>
                        <!-- Humidity -->
                        <div class="flex flex-col items-center justify-center bg-background-primary py-5 mt-8 rounded-lg">
                            <p class="font-medium text-lg">Humidty</p>
                            <h4>
                                <span class="text-64px font-bold">84</span>
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
                                    <div class="bg-yellow-500 h-2 rounded-80px" style="width : 80%"></div>
                                </div>
                                <p class="w-full text-right">%</p>
                            </div>
                        </div>
                        <!-- Visibility -->
                        <div class="flex flex-col items-center justify-center bg-background-primary py-5 mt-8 rounded-lg">
                            <p class="font-medium text-lg">Visibility</p>
                            <h4>
                                <span class="text-64px font-bold">6,4</span>
                                <span class="text-4xl font-medium pl-2">miles</span>
                            </h4>
                        </div>
                        <!-- Air Pressure -->
                        <div class="flex flex-col items-center justify-center bg-background-primary py-5 mt-8 rounded-lg">
                            <p class="font-medium text-lg">Air Pressure</p>
                            <h4>
                                <span class="text-64px font-bold">998</span>
                                <span class="text-4xl font-medium pl-2">mb</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer class="bg-background-secondary py-12 text-tc-ternary">
            <p class="font-montserrat text-sm text-center">Nisarg Patel @ DevChallenges.io</p>
        </footer>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'App',
    components: {
        'AppSidebar': () => import('@/components/Sidebar.vue'),
    },
    computed: {
        ...mapState(['currentTheme'])
    }
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
