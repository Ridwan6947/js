<template>
    <div class="login-container">
      <div class="login-form">
        <h1>Sign-In</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" name="username" v-model="username" placeholder="Enter your username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" placeholder="Enter your password">
          </div>
          <button type="submit" class="login-button">Sign-In</button>
        </form>
        <div class="new-user">
          <p>New to Amazon?</p>
          <button @click="goToRegister">Register</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';

    const username = ref('');
    const password = ref('');
    const store = useStore();

    const login = () =>{
      try {
        store.dispatch('login' , {username: username.value, password: password.value}); // Dispatch login action , passing value of username and password by wrapping them in a reactive object using ref
        window.location.hash = '/home';
      } catch (error) {
        console.log(error);
      }
    }

    const goToRegister = () => {
      window.location.hash = '/register';
    }

  </script>
  
  <style scoped>
  .login-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; 
  }
  
  .login-form {
    background: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .login-button {
    width: 100%;
    padding: 10px;
    background-color: #f0c14b;
    border: 1px solid #a88734;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .new-user {
    margin-top: 20px;
  }
  
  .new-user button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #e7e9ec;
    border: 1px solid #adb1b8;
    border-radius: 4px;
    text-decoration: none;
    color: #111;
  }
  </style>
  