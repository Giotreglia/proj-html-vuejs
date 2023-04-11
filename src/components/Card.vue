<script>
export default {
    name: 'Card',
    props: {
        img: String,
        title: String,
        text: String,
        color: String
    }
}
</script>
<template>
    <div class="card">
        <div class="card-img-container" :class="color">
            <img :src="img" alt="">
        </div>
        <h3 class="primary">{{ title }}</h3>
        <p>{{ text }}</p>
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
    padding: 50px;
    border-radius: 50%;
}
</style>