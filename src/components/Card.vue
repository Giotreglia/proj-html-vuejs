<script>
export default {
    name: 'Card',
    props: {
        img: String,
        title: String,
        text: String,
        color: String,
        number: String,
        titleColor: String,
        subtitleColor: String
    }
}
</script>
<template>
    <div class="card">
        <div class="card-img-container" :class="color">
            <img v-if="img" :src="img" alt="">
            <span class="card-number" :class="titleColor" v-else>{{ number }}</span>
        </div>
        <h3 :class="titleColor">{{ title }}</h3>
        <p :class="subtitleColor">{{ text }}</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
}

.card-img-container {
    width: 140px;
    height: 140px;
    padding: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-number {
    font-size: 40px;
}
</style>