<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld :msg="apiResponse" />
        <p>{{ apiResponse }}</p>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
    },
    data() {
        return {
            apiResponse: undefined,
        };
    },
    methods: {
        // fetchAPI() {
        //   fetch("http://cpincorp.ddns.net:51510", {
        //     method: "GET",
        //   })
        //     .then((response) => {
        //       this.apiResponse = response.json().message;
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // },
    },
    mounted() {
        console.log("HOME MOUNTED");
        Vue.axios
            .get("http://cpincorp.ddns.net:51510")
            .then(function (response) {
                this.apiResponse = response.data.message;
                console.log(response);
            });
        // this.fetchAPI();
    },
};
</script>
