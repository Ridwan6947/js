<template>
  <div class="registerPage">
    <div class="registerForm">
      <h1>Register</h1>
      <form @submit.prevent="handleRegister">
        <div class="formGroup">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="email" placeholder="Enter your email">
        </div>
        <div class="formGroup">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="password" placeholder="Enter your password">
        </div>
        <div class="formButton">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const store = useStore();
const router = useRouter();

const handleRegister = async () => {
  if (email.value && password.value) {
    const user = { email: email.value, password: password.value };
    await store.dispatch('register', user);
    router.push('/login');
  }
};
</script>

<style scoped>
.registerPage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.registerForm {
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
  justify-content: center;
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
</style>
