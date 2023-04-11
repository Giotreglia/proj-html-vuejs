<script>
import { store } from '../src/store'
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      store
    }
  },
}

</script>

<template>
  <AppHeader />
</template>

<style lang="scss" scoped>
@use './styles/general.scss';
@use './styles/partials/variables' as *;
</style>
