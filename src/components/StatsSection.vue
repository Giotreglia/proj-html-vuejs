<script>
import Card from './Card.vue'
export default {
    name: 'StatsSection',
    components: {
        Card,
    },
    data() {
        return {
            stats: [
                {
                    image: '',
                    number: '507',
                    title: 'Our Pupils',
                    text: 'Pulvinar forte terrnülal est elipsis prism.',
                    color: 'bg-transparent border-white'
                },
                {
                    image: '',
                    number: '235',
                    title: 'Teaching Hours',
                    text: 'Pulvinar forte terrnülal est elipsis prism.',
                    color: 'bg-transparent border-white'
                },
                {
                    image: '',
                    number: '100%',
                    title: 'Satisfied Parents',
                    text: 'Pulvinar forte terrnülal est elipsis prism.',
                    color: 'bg-transparent border-white'
                },
                {
                    image: '',
                    number: '1050',
                    title: 'Meals Per Year',
                    text: 'Pulvinar forte terrnülal est elipsis prism.',
                    color: 'bg-transparent border-white'
                }
            ]
        }
    },
}
</script>
<template>
    <section id="stats">

        <!--Stats list -->
        <div id="stats-list-container">
            <div class="card-container" v-for="(card, i) in stats" :key="i">
                <Card :img="card.image" :title="card.title" :text="card.text" :color="card.color" :number="card.number"
                    :titleColor="`text-white`" :subtitleColor="`text-white`" />
            </div>
        </div>

        <!-- Stats squares -->
        <div class="stats-squares-container">
            <div class="stats-square" v-for="square in 6"></div>
        </div>


    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#stats {
    padding: 50px 0 150px;
    background-image: url('../assets/images/parallax_01.jpg');
    background-position: center;
    position: relative;
}

#stats-list-container {
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
    margin: auto;

}

.card-container {
    display: flex;
    justify-content: center;
}

.stats-squares-container {
    height: 30px;
    position: absolute;
    bottom: 50px;
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

        &:first-child {
            align-self: flex-start;
        }
    }
}
</style>