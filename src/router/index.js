import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView,
        iconClass: 'fa-solid fa-home',
        mainMenu: true
    },
    {
        path: '/explore',
        name: 'Explore',
        component: HomeView,
        iconClass: 'fa-solid fa-search',
        mainMenu: true
    },
    {
        path: '/notifications',
        name: 'Notifications',
        component: HomeView,
        iconClass: 'fa-solid fa-bell',
        mainMenu: true
    },
    {
        path: '/messages',
        name: 'Messages',
        component: HomeView,
        iconClass: 'fa-solid fa-envelope',
        mainMenu: true
    },
    {
        path: '/profile',
        name: 'Profile',
        component: HomeView,
        iconClass: 'fa-solid fa-user'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router