<script>
export default {
    name: 'MapLocation',
}
</script>

<template>
    <!-- Map -->
    <section id="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.6665712414374!2d-75.67921892333301!3d45.39589643799293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05eea825aaab%3A0x5d1d325426cfc369!2sFable%20Care%20Center!5e0!3m2!1sit!2sit!4v1681716067352!5m2!1sit!2sit"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

iframe {
    width: 100%;
}
</style>