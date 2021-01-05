import { createRouter, createWebHistory } from "vue-router";

// import UserShow from "./views/Users/Show";
import Header from "../components/HelloWorld.vue";
import UserAuth from "../pages/auth/UserAuth.vue";
import FriendContact from "../components/FriendContact.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Header,
        meta: { title: "News Feed" },
    },
    {
        path: "/auth",
        name: "auth",
        component: UserAuth,
    },
    {
        path: "/friend-contact",
        component: FriendContact,
    },
    // {
    //     path: "/users/:userId",
    //     name: "user.show",
    //     component: UserShow,
    //     meta: { title: "Profile" },
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
