<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title" class="product-image">
    <div class="product-details">
      <h2 class="product-name">{{ product.title }}</h2> //declaretive rendering to render product title
      <p class="product-description">{{ product.description }}</p>
      <div class="product-price">{{ product.price }}</div>
      <button @click="addToCart" class="add-to-cart-button">Add to Cart</button> //addToCart calls the action which dispatches mutation which commit state and push item to cart and update its state
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {            //props are the data that will be passed to the component , here we are passing product object as props
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);     // this.$emit is used to emit the event , listen here and execute in the home.vue
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 250px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-image {
  width: 100%;
  border-radius: 5px;
}

.product-name {
  font-size: 18px;
  margin-bottom: 5px;
}

.product-description {
  margin-bottom: 10px;
}

.product-price {
  font-weight: bold;
  margin-bottom: 10px;
}

.add-to-cart-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}
</style>
