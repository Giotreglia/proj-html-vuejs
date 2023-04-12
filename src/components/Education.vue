<script>
import Card from './Card.vue';
import CTA from '../components/CTA.vue';

export default {
    name: 'Education',
    components: {
        Card,
        CTA
    },
    data() {
        return {
            listText: [
                'Comprehensive reporting on individual achievement',
                'Educational field trips and school presentations',
                'Individual attention in a small-class setting',
                'Learning program with after-school care',
                'Opportunities to carry out scientific investigations',
                'Positive learning environment for your Child'
            ],
            educationThumbnails: [
                {
                    item: 'toy',
                    title: 'Learnin & Fun',
                    text: 'Praesent modea est gravida node vehicula luctus.',
                },
                {
                    item: 'meal',
                    title: 'Healthy Meals',
                    text: 'Terminal interdum a eleifend maecenas est morbi.',
                },
                {
                    item: 'school',
                    title: 'Friendly Place',
                    text: 'Terminal interdum a eleifend maecenas est morbi.',
                },
                {
                    item: 'shield',
                    title: 'Children Safety',
                    text: 'Praesent modea est gravida node vehicula luctus.',
                }
            ]
        }
    },
}
</script>
<template>
    <section id="education">
        <div class="education-container container">

            <!-- Education left -->
            <div class="education-left">
                <p class="education-claim primary">
                    We have been educating children for over fifteen years. Our goal is to create a place that engages each
                    child.
                </p>

                <p class="text-grey">
                    Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna
                    eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae
                    sodales, magna ante feugiat elit maecenas.
                </p>

                <ul id="education-list" class="text-grey">
                    <li v-for="item in listText"><i class="fa-regular fa-square-check"></i> {{ item }}</li>
                </ul>
            </div>

            <!-- Education right -->
            <div class="education-right">
                <Card v-for="item in educationThumbnails" :color="`bg-white`" :img="`src/assets/images/${item.item}.png`"
                    :title="item.title" :titleColor="`primary`" :text="item.text" :subtitleColor="`text-grey`" />
            </div>

        </div>

        <!-- Education bottom images -->
        <div class="education-images-container">
            <img :src="`src/assets/images/gallery_0${i + 1}-690x506.jpg`" alt="gallery-image" v-for="(img, i) in 4">
        </div>

        <!-- Call to action -->
        <CTA :title="`See Our Kindergarten Photo Gallery!`" :buttonText="`VIEW GALLERY`" />

    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#education {
    background-color: $color-tertiary;
}

.education-container {
    display: flex;
    gap: 30px;
    margin-top: 40px;
    padding: 80px 0;

    .education-left,
    .education-right {
        display: flex;
        justify-content: center;
        width: 50%;
    }
}

.education-left {
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
}

.education-claim {
    font-size: 35px;
    margin-bottom: 40px;
}

#education-list {
    margin-top: 40px;
    list-style: none;

    li {
        line-height: 30px;

        i {
            color: $color-secondary;
            margin-right: 10px;
        }

    }
}

.education-right {
    flex-wrap: wrap;
}

.education-images-container {
    height: 300px;
    display: flex;

    img {
        width: calc(100% / 4);
    }
}
</style>