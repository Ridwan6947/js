<template>
    <div>
      <section class="navBar">
        <img src="" alt="Amazon">
        <input class="search" type="text" placeholder="Search">
        <div class="nav-buttons">
          <button @click="setCategory('electronics')" class="btn">Electronics</button>
          <button @click="setCategory('jewelery')" class="btn">Jewelery</button>
          <button @click="setCategory('men\'s clothing')" class="btn">Men's Clothing</button>
          <button @click="setCategory('women\'s clothing')" class="btn">Women's Clothing</button>
          <button @click="goToCart" class="btn">Cart</button>
        </div>
      </section>
      <section class="products">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
          @add-to-cart="addToCart" 
        />
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProductCard from '../components/productCard.vue';
  
  export default {
    name: 'AmazonHome',
    components: {
      ProductCard
    },
    data() {
      return {
        products: [],
        currentCategory: 'electronics' 
      };
    },
    methods: {
      goToCart() {
        window.location.hash = '/cart';
      },
      addToCart(product) {
        this.$emit('add-to-cart', product);
      },
      fetchProducts(category) {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error("Error fetching products:", error);
          });
      },
      setCategory(category) {
        this.currentCategory = category;
        this.fetchProducts(category);
      }
    },
    created() {
      this.fetchProducts(this.currentCategory);
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
  
  .nav-buttons {
    display: flex;
    gap: 10px;
  }
  
  .btn {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
  