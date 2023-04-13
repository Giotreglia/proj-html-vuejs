<script>

export default {
    name: 'FooterTop',
    data() {
        return {
            months: ['OCTOBER', 'SEPTEMBER', 'AUGUST', 'JULY', 'JUNE', 'MAY'],
            features: [
                'Friendly and welcoming place',
                'Science and art classes',
                'Positive learning environment',
                'Educational field trips',
                'Writing and reading classes',
                'Science and art classes'
            ],
            posts: [
                {
                    img: '09',
                    title: 'Drawing and Painting Lessons',
                    date: 'October 03, 2014'
                },
                {
                    img: '10',
                    title: 'Fall Parents Meeting Da',
                    date: 'October 03, 2014'
                },
                {
                    img: '08',
                    title: 'Birthday in Kindergarten',
                    date: 'September 20, 2014'
                }
            ]

        }
    },
}
</script>
<template>
    <section id="footer-top">
        <div class="footer-top-container container">

            <!-- About us -->
            <div class="footer-top-col text-grey">
                <h3 class="text-grey">ABOUT US</h3>
                <div class="line"></div>
                <p class="text-grey">Elipsis magna a nulla elite forte maecenas est elementum magna etos interdum movum
                    morbi vehicula morbi.
                </p>
                <div>
                    <img src="../assets/images/logo_footer.png" alt="logo fable">
                </div>

            </div>

            <!-- Archives -->
            <div class="footer-top-col text-grey">
                <h3 class="text-grey">ARCHIVES</h3>
                <div class="line"></div>
                <ul class="archives-list">
                    <li v-for="month in months">{{ month }} 2014 (2)</li>
                </ul>

            </div>

            <!-- Our features -->
            <div class="footer-top-col text-grey">
                <h3 class="text-grey">OUR FEATURES</h3>
                <div class="line"></div>
                <p class="text-grey">Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul lacus ligul mattis
                    ac vene:
                </p>
                <ul class="features-list">
                    <li v-for="feature in features">
                        <i class="fa-regular fa-square-check"></i>
                        {{ feature }}
                    </li>
                </ul>

            </div>

            <!-- Recent posts -->
            <div class="footer-top-col text-grey">
                <h3 class="text-grey">RECENT POSTS</h3>
                <div class="line"></div>

                <div class="post" v-for="post in posts">
                    <div class="post-left">
                        <img :src="`src/assets/images/blog_${post.img}-150x150.jpg`" alt="img">
                    </div>
                    <div class="post-right">
                        <p class="bold">{{ post.title }}</p>
                        <p>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span class="date">{{ post.date }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#footer-top {
    padding: 50px 0;
    background-image: url('../assets/images/pattern.png');
    height: 600px;
}

.footer-top-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .footer-top-col {
        width: calc(100% / 4);
        display: flex;
        flex-direction: column;
        gap: 20px;

        .line {
            width: 50px;
            height: 2px;
            background-color: $color-grey;
        }

        img {
            width: 80%;
        }
    }
}

.archives-list {
    list-style: none;

    li {
        color: $color-grey;
        border: $color-grey solid 1px;
        padding: 10px;
        margin: 5px 0;
        cursor: pointer;
        transition: all 0.1s;

        &:hover {
            background-color: $color-secondary;
            color: white;
        }
    }
}

.features-list {
    list-style: none;
    color: $color-grey;

    li {
        margin: 10px 0;
    }

    i {
        color: white;
        margin-right: 10px;
    }
}

.post {
    display: flex;

    .post-left {

        width: 40%;

        img {
            width: 100%;
            display: inline-block;
        }
    }

    .post-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        width: 60%;

        i {
            margin-right: 10px;
        }

        .date {
            font-size: 12px;
        }
    }
}
</style>