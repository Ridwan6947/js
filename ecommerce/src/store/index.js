import { createStore } from 'vuex';

export default createStore({
  state: {
    username: localStorage.getItem('username') || '',
    password: localStorage.getItem('password') || '',
    users:JSON.parse(localStorage.getItem('users')) || [],
    cart: []
  },
  mutations: {
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
        localStorage.setItem('users', JSON.stringify(state.users));
      }
    }
  },
  getters: {
    cart: (state) => state.cart
  }
});
