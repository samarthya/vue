import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

/**  Tell Vue to use VUEX */
Vue.use(Vuex);

/** State changes - Detection */
export default new Vuex.Store({
  /**
   * What is there in the State.
   */
  state: {
    /**
     * Store contains the CART.
     */
    cart: [], /** Default state for the property cart. */
    parts: null,
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
  actions: {
    /**
     * Fetch the parts from the remote service.
     * @param {*} commit - to call the state commit.
     */
    getParts({ commit }) {
      /** Use axios to make the HTTP call. */
      axios.get('/api/parts') /** Configured Web Proxy. */
        .then(result => commit('updateParts', result.data))
        .catch(console.log);
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.heads.onSale);
    },
  },
});
