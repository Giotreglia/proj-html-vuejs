<script>
export default {
    name: 'Jumbotron',
}
</script>
<template>
    <section id="jumbotron">

        <!-- Jumbo images -->
        <div id="jumbo-images-container">
            <img src="../assets/images/slider_slide3_img2.png" alt="jumbo img">
            <img src="../assets/images/slider_slide3_img3.png" alt="jumbo img">
        </div>

        <!-- Jumbo squares -->
        <div class="jumbo-squares-container">
            <div class="jumbo-square" v-for="square in 3"></div>
        </div>

        <!-- Jumbo text -->
        <div class="container">
            <span class="jumbo-text">Learning & Fun</span>
        </div>
    </section>
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#jumbotron {
    height: 600px;
    background-image: url('../assets/images/slider_slide3_background.png');
    background-size: contain;
    position: relative;
    overflow-x: hidden;

    #jumbo-images-container {
        position: absolute;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        bottom: 60px;
        left: 38%;
        width: 900px;
    }

    .jumbo-squares-container {
        height: 30px;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%);
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 10px;

        .jumbo-square {
            width: 50px;
            height: 50%;
            border: solid 3px $color-secondary;

            &:last-child {
                align-self: flex-start;
            }
        }
    }

    .jumbo-text {
        color: rgb(238, 231, 228);
        font-family: cursive;
        font-size: 35px;
        display: block;
        padding-top: 200px;
    }
}
</style>