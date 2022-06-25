import { createApp } from "vue";
import App from "./App.vue";

// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// grobal css
import "@/styles/main.css";

// createApp(App).mount("#app");
const app = createApp(App);

app.use(ElementPlus);

app.mount("#app");
