// src/main.js
import { createApp } from 'vue';
import router from './router';

import App from './App.vue';
import './index.css';

let app = createApp(App)
//form status and url set here
app.config.globalProperties.regFormOpen = false;
app.config.globalProperties.formUrl = "https://forms.gle/odtFXjx7xtU78JH5A"
app.config.globalProperties.status = "Thank you for your support for the past 5 years!"
app.use(router).mount('#app')
