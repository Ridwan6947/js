<template>
  <div class="product-card">
    <img :src="product.imageUrl" :alt="product.name" class="product-image">
    <div class="product-details">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-price">{{ product.price }}</div>
      <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product); 
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
}

.product-image {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
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
