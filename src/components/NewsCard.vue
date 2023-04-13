<script>
export default {
    name: 'NewsCard',
    props: {
        img: String,
        title: String,
        date: String,
        name: String,
        number: String,
        text: String,
        type: String,
    }
}
</script>
<template>
    <div class="card">
        <span class="date text-grey">{{ date }}</span>
        <div class="card-img-container">
            <img v-if="img" :src="img" :alt="title">
            <div class="number">{{ number }}</div>
        </div>
        <span class="name primary">{{ title }}</span>
        <p class="text-grey">{{ text }}</p>
        <div class="author">
            <div class="author-details">
                <img src="../assets/images/author.png" alt="author">
                <span class="text-grey">{{ name }}</span>
            </div>
            <div class="author-details">
                <img src="../assets/images/category.png" alt="author">
                <span class="text-grey">{{ type }}</span>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

.card {
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    gap: 20px;
    padding: 20px 0;

    .name {
        font-size: 26px;
        margin-top: 20px;
    }
}

.card-img-container {
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }

    .number {
        background-color: $color-secondary;
        position: absolute;
        bottom: 0;
        right: 0;
        color: white;
        padding: 15px;
        font-size: 25px;
    }
}

p {
    line-height: 25px;
    font-size: 20px;
    border-bottom: solid 1px rgb(238, 224, 224);
    padding-bottom: 20px;

    &::after {
        content: " [...]";
    }
}

.social {
    display: flex;
    gap: 2px;
    padding: 30px 10px;
    width: 100%;

    .social-wrapper {
        background-color: $color-secondary;
        padding: 5px;
        cursor: pointer;
    }
}

.author {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 10px;

    .author-details {
        display: flex;
        gap: 10px;
        align-items: center;
    }
}
</style>