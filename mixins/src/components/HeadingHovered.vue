<template>
    <h1 @mouseover="incrementCounter">Hovered {{ counter }} times</h1>
</template>

<script>
import counterMixin from '../mixins/index.js'
  export default {
    name : 'HeadingHovered',
    mixins:[counterMixin],
  }
</script>

<style scoped>
h1{
  color: red;
}
</style>
  