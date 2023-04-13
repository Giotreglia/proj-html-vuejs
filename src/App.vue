<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import "@fontsource/noto-sans/400.css";



export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}

</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <AppMain />

  <!-- Footer -->
  <AppFooter />
</template>

<style lang="scss" scoped>
@use './styles/general.scss';
@use './styles/partials/variables' as *;
</style>
