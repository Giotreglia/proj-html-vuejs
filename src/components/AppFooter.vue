<script>
import FooterTop from '../components/FooterTop.vue';



export default {
    name: 'AppFooter',
    components: {
        FooterTop,


    }
}
</script>
<template>
    <footer>
        <FooterTop />
    </footer>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;
</style>