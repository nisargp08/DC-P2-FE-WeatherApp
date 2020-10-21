<template>
<div>
    <div class="flex items-center justify-between py-3 px-4">
        <!-- Search location button -->
        <button @click="toggleSidebar()" title="Search locations" class="font-medium leading-5 bg-background-ternary py-3 px-5 rounded-md hover:bg-gray-700 btn">Search for places</button>
        <div class="flex items-center">
            <!-- Current Location Button -->
            <button @click="getCurrentPosition()" title="Current location" class="mx-4 bg-background-ternary rounded-full p-2 btn hover:bg-gray-700">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 8a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m-8.95 5H1v-2h2.05C3.5 6.83 6.83 3.5 11 3.05V1h2v2.05c4.17.45 7.5 3.78 7.95 7.95H23v2h-2.05c-.45 4.17-3.78 7.5-7.95 7.95V23h-2v-2.05C6.83 20.5 3.5 17.17 3.05 13M12 5a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z" />
                </svg>
            </button>
            <!-- Theme Switcher icons with functionality -->
            <app-theme-switcher></app-theme-switcher>
        </div>
    </div>
    <!-- Search location input -->
    <transition enter-active-class="animate__animated animate__slideInLeft animate__faster" leave-active-class="animate__animated animate__slideOutLeft animate__faster" mode="out-in">
        <!-- Search location window -->
       <app-search-location v-if="isOpen" @close="toggleSidebar()"></app-search-location>
    </transition>

</div>
</template>

<script>
import 'animate.css'
import { weatherData } from '@/mixins/weatherMixin.js';

export default {
    mixins: [weatherData],
    components: {
        'AppThemeSwitcher': () => import('@/components/ThemeSwitcher.vue'),
        'AppSearchLocation': () => import('@/components/SearchLocation.vue'),
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>
