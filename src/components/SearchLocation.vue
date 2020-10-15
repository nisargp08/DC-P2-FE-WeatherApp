<template>
<div class="fixed inset-0 bg-background-primary h-full w-full overflow-hidden z-10">
    <div class="h-full w-full overflow-auto">
        <!-- Close icon -->
        <svg @click="close()" class="w-6 h-6 ml-auto m-4 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
        </svg>
        <!-- Search input and button -->
        <div class="flex px-4 mt-6">
            <div class="flex flex-1 items-center border rounded-lg px-4">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
                <input class="w-full h-full bg-transparent ml-4 focus:outline-none" type="text" placeholder="Search Location">
            </div>
            <button class="ml-4 py-3 px-4 bg-light-blue rounded-lg font-semibold focus:outline-none hover:bg-blue-800">Search</button>
        </div>
        <!-- Location Suggestion list -->
        <div class="flex flex-col px-4 mt-10">
            <a v-for="(location,index) in locations.near" :key="index" href="#" class="location flex items-center font-medium p-4 rounded-lg border border-transparent hover:border-boundary-primary">
                <span class="flex-1">{{ location.title }}</span>
                <span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </span>
            </a>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    methods : {
        // emits 'close' event to parent
        close(){
            this.$emit('close');
        }
    },
    computed : {
        // Near locations suggestion list
        ...mapState(['locations']),
    }
}
</script>

<style lang="scss" scoped>
.location {
    svg {
        color: transparent;
    }

    &:hover svg {
        color: var(--boundary-primary);
    }
}
</style>