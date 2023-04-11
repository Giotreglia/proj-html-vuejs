<script>
import { store } from '../store';
import Jumbotron from '../components/Jumbotron.vue';
import CTA from '../components/CTA.vue';

export default {
    name: 'AppHeader',
    components: {
        Jumbotron,
        CTA
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <header>

        <!-- Header -->
        <div id="header-container">

            <!-- Logo -->
            <div id="logo-container">
                <img src="../assets/images/logo.png" alt="logo fable">
            </div>

            <!-- Menu -->
            <nav>
                <ul id="nav-list">
                    <li v-for="(item, i) in store.navList" :key="i">
                        <div class="list-item-container" @mouseenter="item.visible = !item.visible"
                            @mouseout="item.visible = !item.visible">
                            <div>
                                <img v-if="item.visible" :src="`${item.icon}.png`" :alt="item.text">
                                <img v-if="!item.visible" :src="`${item.icon}-2.png`" :alt="item.text">
                            </div>
                            <span class="nav-text">{{ item.text }}</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Jumbotron -->
    <Jumbotron />

    <!-- Call to action -->
    <CTA :title="`How to Enroll Your Child to a Class?`" :buttonText="`LEARN MORE`" />
</template>
<style lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

header {
    height: 125px;
}

#header-container {
    max-width: 1000px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#logo-container {
    height: 100%;

    img {
        height: 100%;
    }
}


#nav-list {
    display: flex;
    list-style: none;
    color: $color-primary;

    li {

        .list-item-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            height: 125px;
            width: 100px;
            cursor: pointer;


            img {
                height: 100%;
                display: block;
                margin: auto;
            }

            &:hover {
                background-color: $color-secondary;
                color: white;
            }

            .nav-text {
                font-size: 14px;
            }
        }

    }
}
</style>