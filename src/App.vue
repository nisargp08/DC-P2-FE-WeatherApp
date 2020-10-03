<template>
  <div id="app">
    <div class="min-h-screen bg-background-primary" :class="currentTheme">
      <div class="text-tc-primary">
        <!-- Theme Switcher icons with functionality -->
        <app-theme-switcher></app-theme-switcher>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    'AppThemeSwitcher' : () => import('@/components/ThemeSwitcher.vue'),
  },
  computed  : {
    ...mapState(['currentTheme'])
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
