<template>
  <v-app>
    <Navbar @openDialog="toggleForm"/>
    <v-main class="ma-10">
      <createAccount @closeDialog="toggleForm" v-if="login"></createAccount>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from './components/Navbar';
import CreateAccount from './components/CreateAccount';
import Vue from 'vue';
import VueSession from 'vue-session'
Vue.use(VueSession)

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
