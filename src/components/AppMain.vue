<script>
import Welcome from '../components/Welcome.vue';
import OverviewMission from './OverviewMission.vue';
import StatsSection from './StatsSection.vue';
import Classes from './Classes.vue';

export default {
    name: 'AppMain',
    components: {
        Welcome,
        OverviewMission,
        StatsSection,
        Classes
    }
}
</script>
<template>
    <main>
        <Welcome />
        <OverviewMission />
        <StatsSection />
        <Classes />
    </main>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>