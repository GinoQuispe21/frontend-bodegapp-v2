import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import bootstrap_vue from 'bootstrap-vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import vuetify from './plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
Vue.use(bootstrap_vue)
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)

new Vue({
  router,
  bootstrap_vue,
  vuetify,
  render: h => h(App)
}).$mount('#app')


