<script>
import Welcome from '../components/Welcome.vue';
import OverviewMission from './OverviewMission.vue';
import StatsSection from './StatsSection.vue';

export default {
    name: 'AppMain',
    components: {
        Welcome,
        OverviewMission,
        StatsSection
    }
}
</script>
<template>
    <main>
        <Welcome />
        <OverviewMission />
        <StatsSection />
    </main>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>