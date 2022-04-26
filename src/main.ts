import { createApp } from "vue";
import router from "@/router";
import { createPinia } from "pinia";
import App from "@/App";

import "@/assets/styles/global.styl";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
