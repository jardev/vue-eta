import Vue from 'vue'
import Router from'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import Dashboard from './views/Dashboard.vue'
import Help from './views/Help.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './bootstrap.min.css'

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";
import { rtdbPlugin } from 'vuefire';

Vue.use(Router);

Vue.use(rtdbPlugin)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : "/"
    );
  }
});

Vue.config.productionTip = false;

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }, {
      path: '/help',
      name: 'help',
      component: Help
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
