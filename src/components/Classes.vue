<script>
import SectionHeader from './SectionHeader.vue';
import ClassesCard from './ClassesCard.vue';

export default {
    name: 'Classes',
    components: {
        SectionHeader,
        ClassesCard
    }
}
</script>
<template>
    <section id="classes">

        <!-- Classes header -->
        <SectionHeader :title="`Our Classes`" :subtitle="`Our preschool program has four dedicated classes`" />

        <!-- Classes main -->
        <div class="classes-container">
            <div class="classes-left">
                <p class="classes-claim primary">
                    We provided four classes with nine to twenty children each aged twelve month to five
                    years of age.
                </p>

                <ClassesCard :title="`Little Lambs`" :age="`12-24`" :size="`9`"
                    :img="`src/assets/images/gallery_04-690x506.jpg`" />

                <ClassesCard :title="`Tenderhearts`" :age="`3-4`" :size="`15`"
                    :img="`src/assets/images/class_03-690x506.jpg`" />

            </div>
            <div class="classes-right">
                <p class="classes-right-text text-grey">
                    Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna
                    eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae
                    sodales, magna ante feugiat elit maecenas.
                </p>

                <ClassesCard :title="`Bouncy Bears`" :age="`2-3`" :size="`12`" :img="`src/assets/images/team_03.jpg`" />

                <ClassesCard :title="`Shining Stars`" :age="`4-5`" :size="`20`"
                    :img="`src/assets/images/class_04-690x506.jpg`" />


            </div>

        </div>


    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#classes {
    padding: 50px 0;
    max-width: 1170px;
    margin: auto;
}

.classes-container {
    display: flex;
    gap: 30px;
    margin-top: 40px;

    .classes-left,
    .classes-right {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
}

.classes-claim {
    font-size: 35px;
    margin-bottom: 40px;
}

.classes-right-text {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 40px;
}


.classes-card {
    display: flex;
}

.classes-card-left,
.classes-card-right {
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: $color-primary;
    margin: 20px 0;
    color: white;
    padding: 20px;
}

.classes-card-right {
    background-image: url('../assets/images/gallery_04-690x506.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.class-data {
    margin-top: 90px;
    display: flex;

    .data-left,
    .data-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 50%;
    }

    .data-left {
        border-right: grey solid 1px;
    }
}

.classes-btn {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>