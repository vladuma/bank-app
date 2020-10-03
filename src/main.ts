import Vue from 'vue';
import Amplify from 'aws-amplify';
import App from './App.vue';
import router from './router';
import store from './store';
import '@aws-amplify/ui-vue';
import config from './aws-exports';
import './registerServiceWorker';

Amplify.configure(config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
