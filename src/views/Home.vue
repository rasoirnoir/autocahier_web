<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>Page d'accueil</h1>
        <h2>{{ apiResponse }}</h2>
        <p>Cette page afffichera la liste des tournées disponibles.</p>
    </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
// const API_URL = "http://127.0.0.1:5000";
// const API_URL = "http://cpincorp.ddns.net:51510";

export default {
    name: "Home",
    components: {},
    data() {
        return {
            apiResponse: undefined,
        };
    },
    methods: {},
    mounted() {
        console.log("HOME MOUNTED");
        console.log(this.apiResponse);
        Vue.axios.get(this.$API_URL).then((response) => {
            this.apiResponse = response.data.message;
            console.log(response);
        });
    },
};
</script>
