<script>
import Card from './Card.vue';
import CTA from '../components/CTA.vue';

export default {
    name: 'Education',
    components: {
        Card,
        CTA
    }
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
                    <li><i class="fa-regular fa-square-check"></i> Comprehensive reporting on individual achievement</li>
                    <li><i class="fa-regular fa-square-check"></i> Educational field trips and school presentations</li>
                    <li><i class="fa-regular fa-square-check"></i> Individual attention in a small-class setting</li>
                    <li><i class="fa-regular fa-square-check"></i> Learning program with after-school care</li>
                    <li><i class="fa-regular fa-square-check"></i> Opportunities to carry out scientific investigations</li>
                    <li><i class="fa-regular fa-square-check"></i> Positive learning environment for your Child</li>
                </ul>
            </div>

            <!-- Education right -->
            <div class="education-right">
                <Card :color="`bg-white`" :img="`src/assets/images/toy.png`" :title="`Learnin & Fun`"
                    :titleColor="`primary`" :text="`Praesent modea est gravida node vehicula luctus.`"
                    :subtitleColor="`text-grey`" />
                <Card :color="`bg-white`" :img="`src/assets/images/meal.png`" :title="`Healthy Meals`"
                    :titleColor="`primary`" :text="`Terminal interdum a eleifend maecenas est morbi.`"
                    :subtitleColor="`text-grey`" />
                <Card :color="`bg-white`" :img="`src/assets/images/school.png`" :title="`Friendly Place`"
                    :titleColor="`primary`" :text="`Terminal interdum a eleifend maecenas est morbi.`"
                    :subtitleColor="`text-grey`" />
                <Card :color="`bg-white`" :img="`src/assets/images/shield.png`" :title="`Children Safety`"
                    :titleColor="`primary`" :text="`Praesent modea est gravida node vehicula luctus.`"
                    :subtitleColor="`text-grey`" />
            </div>

        </div>

        <!-- Education bottom images -->
        <div class="education-images-container">
            <img src="../assets/images/gallery_01-690x506.jpg" alt="">
            <img src="../assets/images/gallery_02-690x506.jpg" alt="">
            <img src="../assets/images/gallery_03-690x506.jpg" alt="">
            <img src="../assets/images/gallery_04-690x506.jpg" alt="">
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