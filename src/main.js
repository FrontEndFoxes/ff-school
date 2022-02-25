// src/main.js
import { createApp } from 'vue';
import router from './router';

import App from './App.vue';
import './index.css';

let app = createApp(App)
//form status and url set here
app.config.globalProperties.regFormOpen = false;
app.config.globalProperties.formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe09HSqhJE9mAf_x26J4SFeTITF848nqaTmz-kGoVhMULVqCA/viewform"
app.config.globalProperties.status = "Our next cohort will start in the summer of 2022."
app.use(router).mount('#app')
