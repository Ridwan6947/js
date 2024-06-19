<script>
export default {
  name: 'Login',
  methods: {
    goToRegister() {
      this.$router.push({ name: 'Register' });
    }
  }
};
</script>

<template>
  <div class="login">
    <h2>Login</h2>
    <form>
        <div class="emailDiv">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email">
        </div>
        <div class="passwordDiv">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="password">
        </div>
        <div class="btn">
            <button type="submit">Login</button>
            <button @click="goToRegister">Register</button>
        </div>  
    </form> 
  </div>
</template>

<style scoped>
login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}


label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button:hover {
  background-color: #0056b3;
}
</style>