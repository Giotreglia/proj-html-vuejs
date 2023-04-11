<script>
export default {
    name: 'CTA',
}
</script>
<template>
    <section id="cta">
        <div id="cta-container">
            <p class="cta-text">How to Enroll Your Child to a Class?</p>
            <button class="btn btn-white">Learn more <i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </section>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#cta {
    height: 138px;
    background-image: url('../assets/images/pattern.png');

    #cta-container {
        max-width: 1000px;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .cta-text {
        font-size: 40px;
    }
}
</style>