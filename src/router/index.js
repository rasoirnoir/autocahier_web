import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Tournees from "../views/Tournees.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            import(/* webpackChunkName: "about" */ "../views/About.vue");
        },
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: function () {
            import("../views/Profile.vue");
        },
    },
    {
        path: "/tournees",
        component: Tournees,
    },
];

export const router = new VueRouter({
    mode: "history",
    routes,
});

// export default router;

router.beforeEach(function (to, from, next) {
    const publicPages = ["/login"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next("/login");
    } else {
        next();
    }
});
