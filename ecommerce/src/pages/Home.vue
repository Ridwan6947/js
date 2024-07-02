<template>
  <div>
    <!-- Navigation bar with search input and category/sort buttons -->
    <section class="navBar">
      <img src="" alt="Amazon">
      <input class="search" type="text" :placeholder="$t('nav.search_placeholder')">
      <div class="nav-buttons">
        <button @click="sort('asc')" class="btn">{{$t('buttons.low_to_high')}}</button>
        <button @click="sort('desc')" class="btn">{{$t('buttons.high_to_low')}}</button>
        <button @click="setCategory('electronics')" class="btn">{{$t('buttons.electronics')}}</button>
        <button @click="setCategory('jewelery')" class="btn">{{$t('buttons.jewelery')}}</button>
        <button @click="setCategory('men\'s clothing')" class="btn">{{$t('buttons.mens_clothing')}}</button>
        <button @click="setCategory('women\'s clothing')" class="btn">{{$t('buttons.womens_clothing')}}</button>
        <button @click="goToCart" class="btn">{{$t('buttons.cart')}}</button>
      </div>
    </section>

    <!-- Product cards display -->
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
      products: [], // Array to hold fetched products
      currentCategory: 'electronics', // Default category to fetch products
    };
  },
  methods: {
    ...mapActions(['addToCart']), // Map Vuex action to add products to cart
    goToCart() {
      window.location.hash = '/cart'; // Navigate to the cart page
    },
    // Fetch products by category and sort order (asc/desc)
    fetchProductsBySort(category, order) {
      axiosInstance.get(`/products/category/${category}?sort=${order}`)
        .then(response => {
          this.products = response.data; // Update products with fetched data
        })
        .catch(error => {
          console.error(this.$t('messages.error_fetching_products'), error); // Translate and log error message
        });
    },
    // Fetch products by category
    fetchProductsByCategory(category) {
      axiosInstance.get(`/products/category/${category}`)
        .then(response => {
          this.products = response.data; // Update products with fetched data
        })
        .catch(error => {
          console.error(this.$t('messages.error_fetching_products'), error); // Translate and log error message
        });
    },
    // Set the current category and fetch products for that category
    setCategory(category) {
      this.currentCategory = category;
      this.fetchProductsByCategory(category);
    },
    // Sort products by order (asc/desc)
    sort(order){
      this.fetchProductsBySort(this.currentCategory , order);
    }
  },
  created() {
    // Fetch products for the default category when component is created
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
