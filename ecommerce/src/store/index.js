import { createStore } from 'vuex';

export default createStore({

  // state objects to hold application data
  state: {
    username: localStorage.getItem('username') || '', 
    password: localStorage.getItem('password') || '',
    users:JSON.parse(localStorage.getItem('users')) || [],
    cart: []
  },

  //mutations to modify the state of application data 
  mutations: {
    // add product to cart mutaion
    ADD_TO_CART(state, product) {   
      state.cart.push(product);
    },
    registerSuccess(state, user) {
      state.users.push(user);
    },
    loginSuccess(state, user) {
      state.username = user.username;
      state.password = user.password;
    }
  },

  //actions to commit mutations and perform asynchronous operations
  actions: { 
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    login({ commit , state }, {username, password}) {
      const user = state.users.find(user => user.username === username && user.password === password);
      if (user) {
        localStorage.setItem('username', user.username);
        localStorage.setItem('password', user.password);
        commit('loginSuccess', user);
      }else{
        alert('Invalid username or password');
      }
    },
    register({ commit , state }, {username, password}) {
      const user = state.users.find(user => user.username === username);
      if (user) {
        alert('Username already exists');
      }else{
        const newUser = { username, password };
        commit('registerSuccess', newUser);
        localStorage.setItem('users', JSON.stringify(state.users));  //JSON.stringify converts users array into JSON string, data is stored even if browser is closed
      }
    }
  },

  getters: {
    cart: (state) => state.cart //getter to access the cart state
  }
});
