import Amplify, * as AmplifyModules from 'aws-amplify';
import API from '@aws-amplify/api';
import { AmplifyPlugin } from 'aws-amplify-vue';

import Vuetify from 'vuetify';

import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';

import '@aws-amplify/ui-vue';
import './registerServiceWorker';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import vuetify from './plugins/vuetify';
import config from './aws-exports';

Amplify.configure(config);
API.configure(config);

Vue.use(Vuetify);
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
