import Vue from 'vue';
import Vuex from 'vuex';

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
  },
  mutations: { /** Mutations. */
    /** Add the robot to the cart. */
    addRobotToCart(state, robot) {
      state.cart.push(robot);
      console.log(state);
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.heads.onSale);
    },
  },
});
