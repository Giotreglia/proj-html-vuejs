<script>
export default {
    name: 'QuoteBanner',
}
</script>
<template>
    <section id="quote">
        <div class="container">
            <div class="apix"><img src="../assets/images/quote_alt.png" alt="quotes"></div>

            <p class="text-white">
                Fable Kindergarten is a great place for my daughter to start her schooling experience.
                lt's welcoming and safe and my daughter loves being there.
            </p>

            <div class="break-line"></div>

            <span class="text-white">Joe R. Hamblen</span>

            <!-- Stats squares -->
            <div class="stats-squares-container">
                <div class="stats-square" v-for="square in 6"></div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#quote {
    padding: 80px 0 200px;
    height: 600px;
    background-image: url('../assets/images/parallax_02.jpg');
    background-position: center;
    position: relative;

    .container {

        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;

        p {
            font-size: 40px;
            text-align: center;
        }

        .break-line {
            width: 80px;
            background-color: white;
            height: 2px;
        }
    }
}

.apix {
    border: white 2px solid;
    border-radius: 50%;
    padding: 25px;
}

.stats-squares-container {
    height: 30px;
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;

    .stats-square {
        width: 50px;
        height: 50%;
        border: solid 3px white;

        &:nth-child(4) {
            align-self: flex-start;
        }
    }
}
</style>