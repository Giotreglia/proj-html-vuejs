<script>
export default {
    name: 'ContactsCard',
    props: {
        img: String,
        title: String,
        textA: String,
        textB: String,
        textC: String,
        color: String,
        titleColor: String,
        subtitleColor: String
    }
}
</script>
<template>
    <div class="card">
        <div class="card-img-container" :class="color">
            <img v-if="img" :src="img" alt="">
        </div>
        <h3 :class="titleColor">{{ title }}</h3>
        <div>
            <p :class="subtitleColor">{{ textA }}</p>
            <p :class="subtitleColor">{{ textB }}</p>
            <p :class="subtitleColor">{{ textC }}</p>
        </div>

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
    padding: 20px 0;

    p {
        width: 200px;
    }
}

.card-img-container {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-number {
    font-size: 40px;
}
</style>