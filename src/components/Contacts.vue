<script>
import SectionHeader from './SectionHeader.vue';
import ContactsCard from './ContactsCard.vue';

export default {
    name: 'Contacts',
    components: {
        SectionHeader,
        ContactsCard
    },
    data() {
        return {
            contacts: [
                {
                    img: 'envelope (1)',
                    title: 'Postal Address',
                    textA: 'Fable Care Center',
                    textB: '85 Fentiman Ave',
                    textC: 'Ottawa, ON K1S 0T7',
                },
                {
                    img: 'mobile',
                    title: 'Phone & E-mail',
                    textA: 'Phone: 1-800-64-38',
                    textB: 'Fax: 1-800-64-39',
                    textC: 'office@fable.com',
                },
                {
                    img: 'clock',
                    title: 'Business Hours',
                    textA: 'Monday - Friday',
                    textB: '8.00 am - 5.00 pm',
                    textC: 'Weekend Closed',
                },
                {
                    img: 'document (1)',
                    title: 'Sessions',
                    textA: 'Mornings, 8 am - 12 noon',
                    textB: 'Afternoons, 1 pm - 5 pm',
                    textC: 'Full Day, 8 am - 5 pm',
                },
            ]
        }
    },
}
</script>
<template>
    <section id="contacts" class="container">

        <!-- Contacts header -->
        <SectionHeader :title="`Contact Us`" :subtitle="`Our postal address and contact details`" />

        <div class="cards-container">
            <ContactsCard v-for="item in contacts" :color="`bg-white`" :img="`src/assets/images/${item.img}.png`"
                :title="item.title" :titleColor="`primary`" :textA="item.textA" :textB="item.textB" :textC="item.textC"
                :subtitleColor="`text-grey`" />
        </div>

        <!-- Contacts Form -->
        <form class="contacts-form">
            <div class="form-left">
                <input type="text" placeholder="Your Name *">
                <input type="text" placeholder="Your E-mail *">
                <input type="text" placeholder="Subject">
            </div>
            <div class="form-right">
                <textarea id="form-message" cols="30" rows="10" placeholder="Your Message *"></textarea>
            </div>
        </form>

        <button class="btn-big text-white bg-secondary">SEND MESSAGE</button>


    </section>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/partials/variables' as *;

#contacts {
    padding: 50px 0;

    button {
        margin: 30px auto;
    }
}

.cards-container {
    display: flex;
    justify-content: space-between;
}

.card-wrapper {
    width: 200px;
}

.contacts-form {
    display: flex;
    gap: 20px;
    margin-top: 40px;

    .form-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        width: 50%;

        input {
            padding: 10px;
            width: 100%;
            border: lightgrey 1px solid;
        }
    }

    .form-right {
        width: 50%;
        height: 100%;

        textarea {
            width: 100%;
            height: 100%;
            padding: 10px;
            border: lightgrey 1px solid;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
}
</style>