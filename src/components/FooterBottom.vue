<script>

export default {
    name: 'FooterBottom',
    data() {
        return {
            social: [
                `behance`,
                `dribbble`,
                `envato`,
                `facebook`,
                `twitter`
            ]
        }
    },
}
</script>
<template>
    <section id="footer-bottom">
        <div class="social">
            <div class="social-wrapper" v-for="img in social"><img :src="`src/assets/images/${img}.png`" alt="social">
            </div>
        </div>

        <div class="credits">
            <span> &#xa9; Fable - Children Kindergarten WordPress Theme by QuanticaLabs</span>
        </div>

        <div class="up">
            <a href="#"><i class="fa-solid fa-chevron-up"></i></a>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#footer-bottom {
    padding: 40px 0;
    height: 220px;
    position: relative;
}

.social {
    display: flex;
    justify-content: center;
    gap: 2px;
    padding: 30px 10px;
    width: 100%;

    .social-wrapper {
        background-color: $color-secondary;
        padding: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
}

.credits {
    display: flex;
    justify-content: center;
    color: $color-grey;
}

.up {
    background-color: grey;
    color: white;
    position: absolute;
    bottom: 20px;
    right: 20px;
    padding: 20px;
    cursor: pointer;

    a {
        color: white;
    }
}
</style>