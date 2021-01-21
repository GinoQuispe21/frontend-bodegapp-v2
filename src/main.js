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

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});