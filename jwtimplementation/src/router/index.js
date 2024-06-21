import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue';
import RegistrationPage from '../pages/RegistrationPage.vue';
import HomePage from '../pages/HomePage.vue';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegistrationPage },
  { path: '/home', component: HomePage }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
