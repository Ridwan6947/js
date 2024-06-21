<template>
    <h1>Home Page</h1>
    <button @click="testHeader">Test Me</button>
  </template>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 20px;
    font-size: 2em;
    color: #333;
  }
  </style>
  
  <script setup >
  import axiosInstance from '../axios.js';

  const testHeader = () => {
    axiosInstance.get('https://fakestoreapi.com/products/1').then((response) => {
      console.log(response.data);
      
    }).catch((error) => {
      console.log(error);
    });
  };
    
  </script>
  