<script>
import SectionHeader from './SectionHeader.vue';
import NewsCard from './NewsCard.vue';

export default {
    name: 'News',
    components: {
        SectionHeader,
        NewsCard
    }
}
</script>
<template>
    <section id="news" class="container">

        <!-- News header -->
        <SectionHeader :title="`What's New`" :subtitle="`Keep up to date with the latest news`" />


        <!-- News Cards -->
        <div class="news-container">
            <NewsCard :title="`Drawing and Painting Lessons`" :date="`October 03, 2014`"
                :text="`Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum`"
                :number="`42`" :name="`Anna Brown`" :type="`Events, Fun`" :img="`src/assets/images/blog_09-525x315.jpg`" />

            <NewsCard :title="`Fall Parents Meeting Day`" :date="`October 03, 2014`"
                :text="`Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum`"
                :number="`19`" :name="`Anna Brown`" :type="`Dance, Education`"
                :img="`src/assets/images/blog_10-525x315.jpg`" />

            <NewsCard :title="`Birthday in Kindergarten`" :date="`September 20, 2014`"
                :text="`Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum`"
                :number="`22`" :name="`Anna Brown`" :type="`Games, General`"
                :img="`src/assets/images/blog_08-525x315.jpg`" />

        </div>

        <!-- Blog button -->
        <div class="container">
            <button class="btn-big text-white bg-secondary">GO TO BLOG <i class="fa-solid fa-chevron-right"></i></button>
        </div>




    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#news {
    padding: 80px 0;

    button {
        margin: 30px auto;
    }
}

.staff-container {
    display: flex;
    gap: 30px;
    margin-top: 40px;
}

.news-container {
    display: flex;
    gap: 30px;
}
</style>