<template>
  <component :is="currentView" :cart="cart" @add-to-cart="addToCart" />
</template>

<script setup>
import { ref, computed } from 'vue';
import Register from '../src/pages/Register.vue';
import Login from '../src/pages/Login.vue';
import Home from '../src/pages/Home.vue';
import Cart from '../src/pages/Cart.vue';

const routes = {
  '/': Login,
  '/register': Register,
  '/home': Home,
  '/cart': Cart
};

const currentPath = ref(window.location.hash);
const cart = ref([]);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'];
});

const addToCart = (product) => {
  cart.value.push(product);
};
</script>

<style>

</style>
