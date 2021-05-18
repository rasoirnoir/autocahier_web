import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import * as VeeValidate from "vee-validate";
import {
    // defineRule,
    ValidationProvider,
    extend,
    ValidationObserver,
} from "vee-validate";
import { required } from "vee-validate/dist/rules";
import Vuex from "vuex";
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

// Vue.use(VeeValidate);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.use(Vuex);

//Form validation. Règles à appliquer sur les pages de login et register
extend("required", {
    ...required,
    message: "This field is required.",
});

Vue.prototype.$API_URL = "http://cpincorp.ddns.net:51510";

const appli = new Vue({
    router,
    store,
    render: function (h) {
        return h(App);
    },
}).$mount("#app");
