\<template>
  <div>
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
          console.error(this.$t('messages.error_fetching_products'), error); // Translate error message
        });
    },
    fetchProductsByCategory(category) {
      axiosInstance.get(`/products/category/${category}`)
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(this.$t('messages.error_fetching_products'), error); // Translate error message
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
