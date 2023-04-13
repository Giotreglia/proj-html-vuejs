<script>
export default {
    name: 'ClassesCard',
    props: {
        title: String,
        age: String,
        size: String,
        img: String,
    }


}
</script>
<template>
    <div class="classes-card">
        <div class="classes-card-left">
            <h3>{{ title }}</h3>
            <span class="text-grey">Class name</span>
            <div class="class-data">
                <div class="data-left">
                    <span>{{ age }}</span>
                    <span class="text-grey">Month olds</span>
                </div>
                <div class="data-right">
                    <span>{{ size }}</span>
                    <span class="text-grey">Class size</span>
                </div>

            </div>
        </div>
        <div class="classes-card-right">
            <img :src="img" :alt="title">
            <button class="classes-btn btn-big bg-secondary text-white">
                READ MORE
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

.classes-card {
    display: flex;
    overflow: hidden;
}

.classes-card-left,
.classes-card-right {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 200px;
    background-color: $color-primary;
    margin: 20px 0;
    color: white;
}

.classes-card-left {
    padding: 20px;
}

.classes-card-right {
    position: relative;

    img {
        object-fit: cover;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
}

.class-data {
    margin-top: 80px;
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