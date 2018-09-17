import Vue from 'vue';
import Vuex from 'vuex';
import robotModule from './modules/robots';
import userModule from './modules/users';

/**  Tell Vue to use VUEX */
Vue.use(Vuex);
/**
 * +--------------------+
 * + Shared state tree  + // Single object that contains all the data for your application.
 * +                    + // First state: Defaults essentilal for change detection.
 * + Mutations          + // Synchronous state mutation.
 * + Actions            + // Asynchronous call and commits mutation.
 * + Getters            + // Getters
 * +--------------------+
 */
/** State changes - Detection */
export default new Vuex.Store({
  modules: {
    robots: robotModule,
    users: userModule,
  },
  /** Root state as it is not in the namespace module. */
  state: {
    foo: 'root-foo',
  },
  getters: {
    // foo(state) {
    //   return `rootGetter/${state.foo}`;
    // },
  },
});
