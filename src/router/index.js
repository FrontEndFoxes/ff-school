import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import OurSchool from '../views/OurSchool.vue';
import Sponsors from '../views/Sponsors.vue';
import Team from '../views/Team.vue';

const history = createWebHistory();
const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/ourschool', component: OurSchool },
	{ path: '/sponsors', component: Sponsors },
	{ path: '/team', component: Team },
];
const router = createRouter({ history, routes });
export default router;