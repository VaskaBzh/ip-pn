import { createApp } from 'vue';
import { router } from "./router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import "./styles/app.scss"
import ui from "./components/ui";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.use(ElementPlus)
    .use(pinia)
    .use(router)
    .mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
for (const [key, value] of Object.entries(ui)) {
  app.component(key, value);
}