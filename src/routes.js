import About from "./pages/About.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHashHistory } from 'vue-router';

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
    history: createWebHashHistory(),
    routes,
})

export default router;
