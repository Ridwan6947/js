<template>
    <div class="register-container">
      <div class="register-form">
        <h1>Register</h1>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" name="username" v-model="username" placeholder="Enter your username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password" placeholder="Enter your password">
          </div>
          <button type="submit" class="register-button">Register</button>
        </form>
        <div class="existing-user">
          <p>Already have an account?</p>
          <button @click="goToLogin">Login</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'userRegister',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      register() {
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const existingUser = registeredUsers.find(user => user.username === this.username);
  
        if (existingUser) {
          console.log('User already exists:', existingUser);
        } else {
          registeredUsers.push({ username: this.username, password: this.password });
          localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
          console.log('User registered successfully:', { username: this.username, password: this.password });
          window.location.hash = '/';
        }
      },
      goToLogin(event) {
        event.preventDefault();
        window.location.hash = '/';
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
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
  
  .register-form {
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
  
  .register-button {
    width: 100%;
    padding: 10px;
    background-color: #34a853;
    border: 1px solid #2d8e3e;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .existing-user {
    margin-top: 20px;
  }
  
  .existing-user button {
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
  