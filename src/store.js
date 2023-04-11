import { reactive } from 'vue';

export const store = reactive(
    {
        navList: [
            {
                text: 'Home',
                icon: 'src/assets/images2/home',
                visible: true
            },
            {
                text: 'Pages',
                icon: 'src/assets/images2/document',
                visible: true
            },
            {
                text: 'Blog',
                icon: 'src/assets/images2/printer',
                visible: true
            },
            {
                text: 'Shop',
                icon: 'src/assets/images2/cart',
                visible: true
            },
            {
                text: 'Shortcodes',
                icon: 'src/assets/images2/lab',
                visible: true
            },
            {
                text: 'Support',
                icon: 'src/assets/images2/chat',
                visible: true
            },
            {
                text: 'Contact',
                icon: 'src/assets/images2/envelope',
                visible: true
            }
        ]
    }
);