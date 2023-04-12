<script>

export default {
    name: 'FooterTop',
    components: {

    }
}
</script>
<template>
    <section id="footer-top">
        <div class="footer-top-container container">
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

            <div class="footer-top-col text-grey">
                <h3 class="text-grey">ARCHIVES</h3>
                <div class="line"></div>
                <ul class="archives-list">
                    <li>OCTOBER 2014 (2)</li>
                    <li>SEPTEMBER 2014 (2)</li>
                    <li>AUGUST 2014 (2)</li>
                    <li>JULY 2014 (2)</li>
                    <li>JUNE 2014 (2)</li>
                    <li>MAY 2014 (2)</li>
                </ul>

            </div>

            <div class="footer-top-col text-grey">
                <h3 class="text-grey">OUR FEATURES</h3>
                <div class="line"></div>
                <p class="text-grey">Nunc gravida rutrum mauris vehin hasellus ac pretium augue vivamul lacus ligul mattis
                    ac vene:
                </p>
                <ul class="features-list">
                    <li>
                        <i class="fa-regular fa-square-check"></i>
                        Friendly and welcoming place
                    </li>
                    <li>
                        <i class="fa-regular fa-square-check"></i>
                        Science and art classes
                    </li>
                    <li>
                        <i class="fa-regular fa-square-check"></i>
                        Positive learning environment
                    </li>
                    <li>
                        <i class="fa-regular fa-square-check"></i>
                        Educational field trips
                    </li>
                    <li>
                        <i class="fa-regular fa-square-check"></i>
                        Writing and reading classes
                    </li>
                    <li>
                        <i class="fa-regular fa-square-check"></i>
                        Science and art classes
                    </li>


                </ul>

            </div>

            <div class="footer-top-col text-grey">
                <h3 class="text-grey">RECENT POSTS</h3>
                <div class="line"></div>

                <div class="post">
                    <div class="post-left">
                        <img src="../assets/images/blog_09-150x150.jpg" alt="img">
                    </div>
                    <div class="post-right">
                        <p class="bold">Drawing and Painting Lessons</p>
                        <p>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span class="date">October 03, 2014</span>
                        </p>
                    </div>
                </div>

                <div class="post">
                    <div class="post-left">
                        <img src="../assets/images/blog_10-150x150.jpg" alt="img">
                    </div>
                    <div class="post-right">
                        <p class="bold">Fall Parents Meeting Day</p>
                        <p>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span class="date">October 03, 2014</span>
                        </p>
                    </div>
                </div>

                <div class="post">
                    <div class="post-left">
                        <img src="../assets/images/blog_08-150x150.jpg" alt="img">
                    </div>
                    <div class="post-right">
                        <p class="bold">Birthday in Kindergarten</p>
                        <p>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span class="date">September 20, 2014</span>
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
    gap: 20px;

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
    gap: 10px;

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
        padding: 20px 10px;
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