import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VeeValidate from "vee-validate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faHome,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component("font-awesome-icon", FontAwesomeIcon);
//Vue.componenet("_vm", VeeValidate);

new Vue({
    router,
    store,
    render: function (h) {
        return h(App);
    },
}).$mount("#app");
