// src/main.js
import { createApp } from 'vue';
import router from './router';

import App from './App.vue';
import './index.css';

let app = createApp(App)
//form status and url set here
app.config.globalProperties.regFormOpen = true;
app.config.globalProperties.formUrl = "https://forms.gle/odtFXjx7xtU78JH5A"
app.config.globalProperties.status = "Our C3 #RedFox cohort, sponsored by Reddit, will start on Sept 19th, 2022."
app.use(router).mount('#app')
