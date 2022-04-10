import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Apollo
import * as apolloProvider from "./graphql/apollo.provider";

const app = createApp(App);

app.use(apolloProvider.apolloProvider).use(store).use(router).mount("#app");
