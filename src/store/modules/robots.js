
import axios from 'axios';

/**
 * Module definition
 */

/** State changes - Detection */
export default {
  namespaced: true,
  /**
   * What is there in the State.
   * It is always namespaced.
   */
  state: {
    /**
     * Store contains the CART.
     */
    cart: [], /** Default state for the property cart. */
    parts: null,
    foo: 'robot-foo',
  },
  mutations: { /** Mutations. */
    /** Add the robot to the cart. */
    addRobotToCart(state, robot) {
      state.cart.push(robot);
      console.log(state);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  /** Actions */
  actions: {
    /**
     * Fetch the parts from the remote service.
     * @param {*} commit - to call the state commit.
     */
    getParts({ commit }) {
      /** Use axios to make the HTTP call. */
      axios.get('/api/parts') /** Configured Web Proxy. */
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
    /** Add robot action. */
    addRobotToCart({ commit, state }, robot) {
      /** Spread syntax -> ... */
      const cart = [...state.cart, robot];
      return axios.post('/api/cart', cart)
        .then(() => commit('addRobotToCart', robot));
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.heads.onSale);
    },
    foo(state) {
      return `robotsGetter/${state.foo}`;
    },
  },
};
