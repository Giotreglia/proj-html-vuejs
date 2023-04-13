<script>
import FooterTop from '../components/FooterTop.vue';
import FooterBottom from './FooterBottom.vue';

export default {
    name: 'AppFooter',
    components: {
        FooterTop,
        FooterBottom
    }
}
</script>
<template>
    <footer>
        <FooterTop />
        <FooterBottom />
    </footer>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>