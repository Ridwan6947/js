<template>
  <div>
    <section class="navBar">
      <img src="" alt="Amazon">
      <input class="search" type="text" placeholder="Search">
      <div class="nav-buttons">
        <button @click="sort('asc')" class="btn">Low to High</button>
        <button @click="sort('desc')" class="btn">High to Low</button>
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
import axiosInstance from '../axiosInstance.js';
import { mapActions } from 'vuex';
import ProductCard from '../components/productCard.vue';

export default {
  name: 'AmazonHome',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      currentCategory: 'electronics',
    };
  },
  methods: {
    ...mapActions(['addToCart']),
    goToCart() {
      window.location.hash = '/cart';
    },
    fetchProductsBySort(category, order) {
      axiosInstance.get(`/products/category/${category}?sort=${order}`)
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    },
    fetchProductsByCategory(category) {
      axiosInstance.get(`/products/category/${category}`)
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    },
    setCategory(category) {
      this.currentCategory = category;
      this.fetchProductsByCategory(category);
    },

    sort(order){
      this.fetchProductsBySort(this.currentCategory , order);
    }
  },
  created() {
    this.fetchProductsByCategory(this.currentCategory);
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
