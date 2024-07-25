// Import necessary functions and types from Vue Router and Ionic
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Import the HomePage component which will be used as a view
import HomePage from '../views/HomePage.vue'

// Define an array of route records. Each record represents a route in your application
const routes: Array<RouteRecordRaw> = [
  {
    // Default route, redirects to '/home'
    path: '/',
    redirect: '/home'
  },
  {
    // Route for the home page
    path: '/home',
    name: 'Home',
    component: HomePage
  }
]

// Create a router instance using the createRouter function
// createWebHistory is used to enable HTML5 history mode for the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Base URL for the router
  routes // The routes defined above
})

// Export the router instance to be used in your application
export default router
