import About from "./pages/About.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/:pathMatch(.*)*",
        component: ErrorPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
