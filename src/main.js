import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store'; /** Import Store from the definition. */
import pinDirectice from './shared/pin-directive';

Vue.config.productionTip = false;
Vue.directive('pin', pinDirectice); /** Global Directive */
//Vue.filter
/**
 * A new VUE instance to render APP.
 */
new Vue({
  render: h => h(App),
  router,
  store, /** Store definition. */
}).$mount('#app');
