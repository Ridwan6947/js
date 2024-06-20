<template>
    <div>
      <section class="navBar">
        <img src="" alt="Amazon">
        <input class="search" type="text" placeholder="Search">
        <button @click="goToCart" class="cart-btn">Cart</button>
      </section>
  
      <section class="products">
        <ProductCard :product="product1" @add-to-cart="addToCart" />
        <ProductCard :product="product2" @add-to-cart="addToCart" />
      </section>
    </div>
  </template>
  
  <script>
  import ProductCard from '../components/productCard.vue';
  
  export default {
    name: 'AmazonHome',
    components: {
      ProductCard
    },
    data() {
      return {
        product1: {
          name: 'Product 1',
          description: 'Description of product 1',
          price: '$10',
          imageUrl: 'product1.jpg'
        },
        product2: {
          name: 'Product 2',
          description: 'Description of product 2',
          price: '$20',
          imageUrl: 'product2.jpg'
        }
      };
    },
    methods: {
      goToCart() {
        window.location.hash = '/cart';
      },
      addToCart(product) {
        this.$emit('add-to-cart', product);
      }
    }
  };
  </script>
  
  <style scoped>
  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
  }
  
  .search {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 400px;
  }
  
  .cart-btn {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .products {
    display: flex;
    justify-content: center;
  }
  </style>
  