<script>
export default {
    name: 'StaffCard',
    props: {
        img: String,
        name: String,
        role: String,
        text: String,
        socialA: String,
        socialB: String,
        socialC: String
    }
}
</script>
<template>
    <div class="card">
        <div class="card-left">
            <div class="card-img-container">
                <img v-if="img" :src="img" :alt="name">
            </div>
            <span class="name">{{ name }}</span>
            <span class="role text-grey">{{ role }}</span>
        </div>
        <div class="card-right">
            <div class="apix"><img src="../assets/images/quote.png" alt="quotes"></div>
            <p class="text-grey">{{ text }}</p>
            <div class="social">
                <div class="social-wrapper"><img :src="socialA" alt="social"></div>
                <div class="social-wrapper"><img :src="socialB" alt="social"></div>
                <div class="social-wrapper"><img :src="socialC" alt="social"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

.card {
    display: flex;
    width: 100%;
    gap: 20px;
    padding: 20px 0;

    p {
        width: 250px;
    }

    .card-left,
    .card-right {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: relative;
    }
}

.card-img-container {
    img {
        width: 100%;
    }
}

.card-right {
    padding-top: 110px;

    .apix {
        border: $color-secondary solid 2px;
        position: absolute;
        top: 30px;
        left: -50px;
        width: 100px;
        height: 50px;
        padding: 5px 10px 10px 50px;
    }

    p {
        line-height: 25px;
        font-size: 18px;
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
}
</style>