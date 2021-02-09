<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "sass/app.scss";
</style>
