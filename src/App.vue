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
        <v-btn
          target="_blank"
          text
          @click="toggleForm"
        >
          <span class="mr-2">login</span>
        </v-btn>
    </v-app-bar>

    <v-main>
      <createAccount v-if="login"></createAccount>
    </v-main>
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue';
import CreateAccount from "@/components/CreateAccount.vue";
// Tell Vue to use the plugin
/* eslint @typescript-eslint/no-var-requires: "off" */
Vue.use(require('vue-cookie'));

export default Vue.extend({
  name: 'App',
  components: { CreateAccount,},
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
