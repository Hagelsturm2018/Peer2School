import Vue from 'vue'
import App from './app.vue'
import './lib/registerServiceWorker'
import { state } from './state'

import './config/fontawesome';
import "vue-slider-component/theme/default.css";

Vue.config.productionTip = false

require('debug').enable('app:*')

Vue.mixin({
  data() {
    return { state }
  },
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
