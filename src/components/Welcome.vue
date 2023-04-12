<script>
import Card from './Card.vue'
import SectionHeader from './SectionHeader.vue';
export default {
    name: 'Welcome',
    components: {
        Card,
        SectionHeader
    },
    data() {
        return {
            welcomeList: [
                {
                    image: 'src/assets/images/schoolbag_alt.png',
                    title: 'Morbi Etos',
                    text: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
                    color: 'bg-secondary'
                },
                {
                    image: 'src/assets/images/stroller_alt.png',
                    title: 'Congue Gravida',
                    text: 'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.',
                    color: 'bg-primary'
                },
                {
                    image: 'src/assets/images/globe_alt.png',
                    title: 'Maecenas Node',
                    text: 'Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
                    color: 'bg-secondary'
                },
                {
                    image: 'src/assets/images/bell_alt.png',
                    title: 'Praesent interdum',
                    text: 'Elipsis magna a terminal nulla elementum morbi elite forte maecenas est magna etos interdum vitae est.',
                    color: 'bg-primary'
                }
            ]
        }
    },
}
</script>
<template>
    <section id="welcome">

        <!-- Welcome header -->
        <SectionHeader :title="`Welcome to Fable`" :subtitle="`Fable daycare, preschool, and kindergarten`" />

        <!-- Welcome list -->
        <div id="welcome-list-container">
            <div class="card-container" v-for="(card, i) in welcomeList" :key="i">
                <Card :img="card.image" :title="card.title" :text="card.text" :color="card.color" :titleColor="`primary`" />
            </div>
        </div>


    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#welcome {
    padding: 50px 0;
    max-width: 1170px;
    margin: auto;
}

#welcome-header {
    text-align: center;

    .welcome-title {
        font-size: 60px;
        display: block;
        margin-bottom: 10px;
    }

    .welcome-subtitle {
        font-size: 23px;
        color: rgb(160, 160, 160);
    }

    .welcome-img-container {
        padding: 30px 0;

    }
}

#welcome-list-container {
    display: flex;
}

.card-container {
    display: flex;
    justify-content: center;
}
</style>