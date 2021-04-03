<template>
    <div class="container">
        <header class="jumbotron">
            <h3>{{ content }}</h3>
        </header>
    </div>
</template>

<script>
import TourneeService from "../services/tournee.service";

export default {
    name: "Tournees",
    data() {
        return {
            content: "",
        };
    },
    mounted() {
        TourneeService.getAllTournees().then(
            (response) => {
                this.content = response.data;
            },
            (error) => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            },
        );
    },
};
</script>
