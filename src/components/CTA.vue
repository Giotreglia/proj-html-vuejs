<script>
export default {
    name: 'CTA',
    props: {
        title: String,
        buttonText: String
    }
}
</script>
<template>
    <section id="cta">
        <div id="cta-container" class="container">
            <p class="cta-text">{{ title }}</p>
            <button class="btn-big btn-white">{{ buttonText }} <i class="fa-solid fa-chevron-right"></i></button>
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
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    .cta-text {
        font-size: 40px;
    }

    i {
        font-size: 8px;
    }

}
</style>