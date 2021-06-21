<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span>CesiTonPlat</span>
      </div>

      <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn
          target="_blank"
          text
        >
          <span class="mr-2">login</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue';
// Tell Vue to use the plugin
/* eslint @typescript-eslint/no-var-requires: "off" */
Vue.use(require('vue-cookie'));

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
