import Vue from 'vue'
import vuetify from 'vuetify'
import App from './App.vue'
import router from "@/router";
import bootstrap_vue from 'bootstrap-vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
Vue.use(bootstrap_vue)
Vue.use(VueAxios, axios)
Vue.use(vuetify)

new Vue({
  router,
  bootstrap_vue,
  render: h => h(App),
}).$mount('#app')


