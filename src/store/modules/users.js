import axios from 'axios';

export default {
  // namespaced: true,
  state: {
    user: null,
    foo: 'users-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    foo(state) {
      return `usersGetter/${state.foo}`;
    },
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
    addRobotToCart() {
      console.log(' Users: addRobotToCart called.');
    },
  },
};
