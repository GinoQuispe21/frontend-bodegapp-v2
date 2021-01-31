import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import bootstrap_vue from 'bootstrap-vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false
Vue.use(bootstrap_vue)
Vue.use(VueAxios, axios)

new Vue({
  router,
  bootstrap_vue,
  render: h => h(App),
}).$mount('#app')

