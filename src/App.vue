<template>
  <v-app>
    <Navbar/>
    <v-main>
      <createAccount v-if="login"></createAccount>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar';
import Vue from 'vue';
// Tell Vue to use the plugin
/* eslint @typescript-eslint/no-var-requires: "off" */
Vue.use(require('vue-cookie'));

export default Vue.extend({
  name: 'App',
  components: { CreateAccount, Navbar },
  data() {
    return {
      login: false,
    };
  },
  methods: {
    toggleForm() {
      this.login = !this.login;
    },
  }
});
</script>
