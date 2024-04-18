import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import "./styles/app.scss"
import ui from "./components/ui";
import { router } from "./router";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.use(ElementPlus)
  .use(router)
  .use(pinia)
  .mount('#app')

app.component(ui)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}