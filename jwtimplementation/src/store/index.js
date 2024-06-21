import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    email: localStorage.getItem('email') || '',
    password: localStorage.getItem('password') || '',
    status: '',
    error: '',
    users: JSON.parse(localStorage.getItem('users')) || []
  },
  mutations: {
    authSuccess(state, token) {
      state.token = token;
      state.status = 'success';
      state.error = '';
    },
    authFailure(state, error) {
      state.token = '';
      state.status = 'error';
      state.error = error;
    },
    registerSuccess(state, user) {
      state.users.push(user);
      localStorage.setItem('users', JSON.stringify(state.users));
    }
  },
  actions: {
    login({ commit, state }, { email, password }) {
      return new Promise((resolve, reject) => {
        const user = state.users.find(u => u.email === email && u.password === password);
        if (user) {
          const token = Math.random().toString(36);
          localStorage.setItem('token', token);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          commit('authSuccess', token);
          resolve({ token });
        } else {
          commit('authFailure', 'Invalid email or password');
          reject({ error: 'Invalid email or password' });
        }
      });
    },
    register({ commit }, user) {
      return new Promise((resolve) => {
        commit('registerSuccess', user);
        resolve(user);
      });
    }
  },
  getters: {
    authError: state => state.error
  }
});
