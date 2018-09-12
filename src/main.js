import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

/**
 * A new VUE instance to render APP.
 */
new Vue({
  render: h => h(App),
}).$mount('#app');
