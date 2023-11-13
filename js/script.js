const { createApp } = Vue;

const app = createApp({
    data() {
        return {
           messageText: "Ciao Utente",
           imagePrint: "https://picsum.photos/400/400"
        };
    },
    methods: {

    }
});

app.mount("#app");