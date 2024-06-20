<template>
  <component :is="currentView" />
</template>

<script setup>
import { ref, computed } from 'vue';
import Register from '../src/pages/Register.vue';
import Login from '../src/pages/Login.vue';

const routes = {
  '/': Login,
  '/register': Register
};

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound;
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
