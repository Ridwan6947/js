<template>
  <div class="cart">
    <h2>Cart Items</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index" class="cart-item">  //v-for is used to iterate through the items in cart array
        <div class="item-details">
          <span class="item-name">{{ item.title }}</span> //declaretive rendering for title
          <span class="item-price">{{ item.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AmazonCart',
  setup() {
    const store = useStore();
    const cart = computed(() => store.getters.cart);   //computed to get cart data from store and pass it to cart

    return {
      cart
    };
  }
};
</script>

<style scoped>
.cart {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.cart-item {
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-name {
  font-size: 18px;
}

.item-price {
  font-size: 16px;
  color: #007bff;
}
</style>
