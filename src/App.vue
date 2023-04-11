<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  }
}

</script>

<template>
  <!-- Header -->
  <AppHeader />

  <!-- Main -->
  <AppMain />
</template>

<style lang="scss" scoped>
@use './styles/general.scss';
@use './styles/partials/variables' as *;
</style>
