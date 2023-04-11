<script>
export default {
    name: 'OverviewMission',
    data() {
        return {
            overviewList: [
                {
                    image: 'src/assets/images/clock_alt.png',
                    title: 'Full Day Sessions',
                    text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
                },
                {
                    image: 'src/assets/images/diagram_alt.png',
                    title: 'Varied Classes',
                    text: 'Pulvinar est metro ligula blandit maecenas retrum gravida cuprum. Maecenas node estibulum.'
                }
            ]
        }
    },
}
</script>
<template>
    <section id="overview-mission">
        <div id="overview-mission-container">
            <div class="overview-mission-left">
                <div class="overview-buttons">
                    <button class="btn-left btn bg-secondary">Overview</button>
                    <button class="btn-right btn">Our Mission</button>
                </div>

                <h2 class="primary">Our philosophy is learning through play as we offer a stimulating environment for
                    children.</h2>

                <div class="overview-list" v-for="(card, i) in overviewList" :key="i">
                    <div class="overvie-img-wrapper">
                        <img :src="card.image" :alt="card.title">
                    </div>
                    <div class="overview-list-right">
                        <h3 class="primary">{{ card.title }}</h3>
                        <p class="text-grey">{{ card.text }}</p>
                    </div>
                </div>
            </div>

            <div class="overview-mission-right">

            </div>
        </div>

    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#overview-mission {
    background-color: $color-tertiary;

    h2 {
        font-size: 35px;
    }
}

#overview-mission-container {
    max-width: 1170px;
    margin: auto;
    display: flex;
    padding: 50px 0;
}

.overview-mission-left {
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.overview-mission-right {
    width: 45%;
    display: flex;
    flex-direction: column;
}

.overview-buttons {
    .btn-left {
        color: white;
    }

    .btn-right {
        color: darken($color-tertiary, 30);
    }
}

.overview-list {
    display: flex;
    align-items: center;
    gap: 20px;

    .overview-list-right {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 15px;

        h3 {
            font-size: 25px;
        }

        p {
            font-size: 18px;
        }
    }
}

.overvie-img-wrapper {
    background-color: $color-secondary;
    border-radius: 50%;
    padding: 30px;
}
</style>