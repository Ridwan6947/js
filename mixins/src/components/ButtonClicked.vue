<template>
  <button @click="incrementCounter">Clicked {{ counter }} times</button>
</template>

<script>
import counterMixin from '../mixins/index.js'
export default {
  name : 'ButtonClicked',
  mixins : [counterMixin],
}
</script>


<style scoped>

</style>
