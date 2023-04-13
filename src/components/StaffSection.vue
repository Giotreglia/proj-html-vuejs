<script>
import SectionHeader from './SectionHeader.vue';
import StaffCard from './StaffCard.vue';

export default {
    name: 'StaffSection',
    components: {
        SectionHeader,
        StaffCard
    }
}
</script>
<template>
    <section id="staff" class="container">

        <!-- staff header -->
        <SectionHeader :title="`Meet Our Staff`" :subtitle="`With education and experience in early childhood cares`" />

        <!-- staff main -->
        <div class="staff-container">
            <div class="staff-left">
                <p class="staff-claim primary">
                    Our staff consists of three teachers and one assistant with experience in early childhood care.
                </p>

                <div>
                    <StaffCard :name="`Ruth Richie`" :role="'Teacher'" :img="'src/assets/images/team_04.jpg'"
                        :text="`I have just finished my studies in Early Childhood Education, and I am also the kid's yoga teacher here at Fable. I enjoy cooking, swimming and bike riding.`"
                        :socialA="`src/assets/images/mail.png`" :socialB="`src/assets/images/facebook.png`"
                        :socialC="`src/assets/images/pinterest.png`" />

                    <StaffCard :name="`Angelica Watson`" :role="'Lead Teacher'" :img="'src/assets/images/team_02.jpg'"
                        :text="`I hold a degree in Early Childhood Education and an advanced English language certificate- I have been working as a kindergarten teacher since 2002.`"
                        :socialA="`src/assets/images/bing.png`" :socialB="`src/assets/images/skype.png`"
                        :socialC="`src/assets/images/linkedin.png`" />
                </div>

            </div>
            <div class="staff-right">
                <p class="staff-right-text text-grey">
                    Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna
                    eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae
                    sodales, magna ante feugiat elit maecenas.
                </p>

                <div>
                    <StaffCard :name="`Katie Willmore`" :role="'Assistant Teacher'" :img="'src/assets/images/team_03.jpg'"
                        :text="`My name is Katie. I grew up and studied in Canada. This is my second year at Fable and love every minute of it, making the children's learning experience fun`"
                        :socialA="`src/assets/images/dribbble.png`" :socialB="`src/assets/images/stumbleupon.png`"
                        :socialC="`src/assets/images/instagram.png`" />

                    <StaffCard :name="`Angela Lynn`" :role="'Teacher'" :img="'src/assets/images/team_01.jpg'"
                        :text="`I have completed a Graduate Diploma in Early Childhood Teaching. I have worked with children aged from Six weeks to eight years. This is my second year at Fable.`"
                        :socialA="`src/assets/images/youtube.png`" :socialB="`src/assets/images/twitter.png`"
                        :socialC="`src/assets/images/googleplus.png`" />
                </div>


            </div>

        </div>


    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#staff {
    padding: 80px 0;
}

.staff-container {
    display: flex;
    gap: 30px;
    margin-top: 40px;

    .staff-left,
    .staff-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
    }
}

.staff-claim {
    font-size: 35px;
    margin-bottom: 40px;
}

.staff-right-text {
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 40px;
}


.staff-card {
    display: flex;
}

.staff-card-left,
.staff-card-right {
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: $color-primary;
    margin: 20px 0;
    color: white;
    padding: 20px;
}

.staff-card-right {
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

.staff-btn {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>