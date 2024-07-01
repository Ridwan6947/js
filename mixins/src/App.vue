<template>
  <div id="app">
    <ButtonClicked />
    <HeadingHovered />
  </div>
</template>

<script>
import ButtonClicked from './components/ButtonClicked.vue';
import HeadingHovered from './components/HeadingHovered.vue';

export default {
  name: 'App',
  components: {
    ButtonClicked,
    HeadingHovered
  }
}
</script>

<style>

</style>
