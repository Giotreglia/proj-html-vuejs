<script>
import Welcome from '../components/Welcome.vue';
import OverviewMission from './OverviewMission.vue';
import StatsSection from './StatsSection.vue';
import Classes from './Classes.vue';
import Education from './Education.vue';
import StaffSection from './StaffSection.vue';
import QuoteBanner from './QuoteBanner.vue';

export default {
    name: 'AppMain',
    components: {
        Welcome,
        OverviewMission,
        StatsSection,
        Classes,
        Education,
        StaffSection,
        QuoteBanner
    }
}
</script>
<template>
    <main>
        <Welcome />
        <OverviewMission />
        <StatsSection />
        <Classes />
        <Education />
        <StaffSection />
        <QuoteBanner />
    </main>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>