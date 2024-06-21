<template>
  <div class="loginPage">
    <div class="loginForm">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div class="formGroup">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="email" placeholder="Enter your email">
        </div>
        <div class="formGroup">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="password" placeholder="Enter your password">
        </div>
        <div class="formButton">
          <button type="submit">Login</button>
          <button type="button" @click="goToRegister">Register</button>
        </div>
        <p v-if="authError" class="error">{{ authError }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const authError = computed(() => store.getters.authError);

const handleSubmit = async () => {
  try {
    await store.dispatch('login', { email: email.value, password: password.value });
    router.push('/home'); 
  } catch (error) {
    console.error('Login error:', error);
  }
};

const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.loginPage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.loginForm {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8em;
  color: #333;
}

.formGroup {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.formButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #28a745;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
