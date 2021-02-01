<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
//import Login from './components/Login.vue';
export default {
  //components: { Login },
  name: 'App',
    data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "sass/app.scss";
</style>
