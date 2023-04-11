<script>
import Card from './Card.vue'
export default {
    name: 'Welcome',
    props: {
        title: String,
        subtitle: String,
    }

}
</script>
<template>
    <!-- Welcome header -->
    <div id="welcome-header">
        <span class="welcome-title primary">{{ title }}</span>
        <span class="welcome-subtitle">{{ subtitle }}</span>
        <div class="welcome-img-container">
            <img src="src\assets\images\header_divider.png" alt="divisore">
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;


#welcome-header {
    text-align: center;

    .welcome-title {
        font-size: 60px;
        display: block;
        margin-bottom: 10px;
    }

    .welcome-subtitle {
        font-size: 23px;
        color: rgb(160, 160, 160);
    }

    .welcome-img-container {
        padding: 30px 0;

    }
}
</style>