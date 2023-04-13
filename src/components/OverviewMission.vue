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
            ],
            thumbnails: [
                {
                    img: 'src/assets/images/gallery_07-690x506.jpg',
                    visible: false
                },
                {
                    img: 'src/assets/images/gallery_01-690x506.jpg',
                    visible: false
                },
                {
                    img: 'src/assets/images/gallery_08-690x506.jpg',
                    visible: false
                }
            ],
            activeImage: 0
        }
    },
    methods: {
        nextImage() {
            if (this.activeImage != this.thumbnails.length - 1) {
                this.activeImage++;
            } else if (this.activeImage == this.thumbnails.length - 1) {
                this.activeImage = 0;
            }
        },
        prevImage() {
            if (this.activeImage != 0) {
                this.activeImage--;
            } else if (this.activeImage == 0) {
                this.activeImage = this.thumbnails.length - 1;
            }
        },
    },
}
</script>
<template>
    <section id="overview-mission">
        <div id="overview-mission-container" class="container">
            <div class="overview-mission-left">
                <div class="overview-buttons">
                    <button class="btn-left btn bg-secondary">
                        <span class="arrow-down"><i class="fa-solid fa-sort-down"></i></span>
                        Overview
                    </button>

                    <button class="btn-right btn">Our Mission</button>
                </div>

                <h2 class="primary">Our philosophy is learning through play as we offer a stimulating environment for
                    children.</h2>

                <div class="overview-list" v-for="(card, i) in overviewList" :key="i">
                    <div class="overvie-img-wrapper">
                        <img :src="card.image" :alt="card.title">
                    </div>
                    <div class="overview-list-left">
                        <h3 class="primary">{{ card.title }}</h3>
                        <p class="text-grey">{{ card.text }}</p>
                    </div>
                </div>
            </div>

            <div class="overview-mission-right">
                <div class="overview-carousel">
                    <img :src="thumbnails[activeImage].img" alt="team">
                    <div class="chevron prev" @click="this.prevImage"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="chevron next" @click="this.nextImage"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
                <div class="overview-thumbnails">
                    <div class="overview-thumbnail" v-for="(slide, i) in thumbnails" :key="i"
                        @click="this.activeImage = i; this.thumbnails[activeImage].visible = true">
                        <img :src="slide.img" alt="thumbnail">
                        <div :class="(this.activeImage == i ? 'thumbnailUnderline' : '')"></div>
                    </div>
                </div>
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
    display: flex;
    padding: 80px 0;
}

.overview-mission-left {
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.overview-mission-right {
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin-left: 20px;

    .overview-carousel {
        width: 100%;
        height: 70%;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .overview-thumbnails {
        display: flex;
        justify-content: center;
        height: 28%;
        gap: 10px;
        cursor: pointer;

        .overview-thumbnail {
            width: calc(100% / 3);
            padding: 10px 0;
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

        }
    }

}

.chevron {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    background-color: $color-secondary;
    padding: 10px;
    cursor: pointer;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}



.overview-buttons {
    .btn-left {
        color: white;
        position: relative;

        &::after {
            content: "";
        }
    }

    .btn-right {
        color: darken($color-tertiary, 30);
    }
}

.overview-list {
    display: flex;
    align-items: center;
    gap: 20px;

    .overview-list-left {
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
    display: flex;
}

.arrow-down {
    color: $color-secondary;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 25px;
}

.thumbnailUnderline {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: $color-secondary;
}
</style>