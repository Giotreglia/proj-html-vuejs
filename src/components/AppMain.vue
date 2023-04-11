<script>
import Welcome from '../components/Welcome.vue';

export default {
    name: 'AppMain',
    components: {
        Welcome
    }
}
</script>
<template>
    <main>
        <Welcome />
    </main>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>