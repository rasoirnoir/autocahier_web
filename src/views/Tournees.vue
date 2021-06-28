<template>
    <div class="container">
        <header class="jumbotron">
            <p>{{ content }}</p>
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
        console.log("Tournees Mounted() start");
        TourneeService.getAllTournees().then(
            (response) => {
                console.log(
                    `récupération de la liste des tournées : ${JSON.stringify(
                        response.data,
                    )}`,
                );
                this.content = response.data
                    ? response.data
                    : "Aucune tournée.";
            },
            (error) => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            },
        );
        console.log("Tournees Mounted() finished");
    },
};
</script>
