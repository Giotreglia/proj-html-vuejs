<script>
import Welcome from '../components/Welcome.vue';
import OverviewMission from './OverviewMission.vue';

export default {
    name: 'AppMain',
    components: {
        Welcome,
        OverviewMission
    }
}
</script>
<template>
    <main>
        <Welcome />
        <OverviewMission />
    </main>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>