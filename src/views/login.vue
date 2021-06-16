<template>
  <div class="login">
    <div class="row">
      <div class="col">
        <createAccount v-if="isSignUp"></createAccount>
        <popup v-if="isError" :title="'error'" :message="'ceci est une erreur'"></popup>
        <form class="form-signin col-mb-12" @submit.prevent="login" v-if="!isSignUp">
          <img
            class="mb-4"
            src="../assets/login-img.png"
            alt
            width="72"
            height="72"
          />
          <h1 class="h3 mb-12 font-weight-normal">Please sign in</h1>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="email"
              placeholder="Email address"
              required
              autocomplete="email"
            />
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Password"
            required
            autocomplete="current-password"
          />
          <p class="text-muted">
            <a href="javascript:;;">Forget password ?</a>
          </p>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i> Log In
          </button>
        </form>
        <p class="mt-3 text-muted">
          <span v-if="isSignUp">
            Already a member?
            <a href="javascript:;;" @click="toggleForm">Sign in</a>
          </span>
          <span v-if="!isSignUp">
            New to cesitonplat?
            <a href="javascript:;;" @click="toggleForm">Create an Account</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import CreateAccount from "@/components/CreateAccount";
import axios from "axios";
import { errorToaster } from "../components/service/ErrorHandler.js";
import popup from '../components/popup.vue'

import { mapMutations } from "vuex";

export default {
  name: "login",
  components: { CreateAccount, popup },
  data() {
    return {
      email: "",
      password: "",
      showLoader: false,
      isSignUp: false,
      isError:false
    };
  },
  methods: {
    toggleForm() {
      this.isSignUp = !this.isSignUp;
    },

    ...mapMutations(["ADD_LOGGED_USER"]),

    //  Login function usign email and password
    login(event) {
      this.showLoader = true;
      const user = {
        email: this.email,
        password: this.password,
      };
      axios
        .post(`http://localhost:3000/user-connect`, user)
        .then((response) => {
          this.showLoader = false;
          this.ADD_LOGGED_USER(response.data[0]);
          event.target.reset();
          this.$router.push(this.$route.query.from || "/");
        })
        .catch((error) => {
          this.showLoader = false;
          this.isError = true;
          errorToaster("Invalid Credentials", "");
          console.log(error);
          console.log(this.isError);
        });
    },
  },
};
</script>
<style>
.login {
  position: relative;
  top: 50px;
  margin-bottom: 15%;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}
.form-control{
  border-width: 1px;
  border: solid;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  z-index: 2;
  border-width: 5px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
