import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store'; /** Import Store from the definition. */

Vue.config.productionTip = false;

/**
 * A new VUE instance to render APP.
 */
new Vue({
  render: h => h(App),
  router,
  store, /** Store definition. */
}).$mount('#app');
