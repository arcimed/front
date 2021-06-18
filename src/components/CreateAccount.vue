<template>
  <div class="create-account">
    <form class="form-signup" @submit.prevent="createAccount">
      <img
        class="mb-4"
        src="../assets/create-account.svg"
        alt
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Create an account</h1>
      <div
        class="alert alert-danger"
        role="alert"
        v-for="(error, index) in errorMessage"
        :key="index"
      >
        {{ error }}
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="First Name"
            v-model="user.firstname"
            required
          />
        </div>
        <div class="col-md-6 mb-3">
          <input
            type="text"
            class="form-control"
            v-model="user.lastname"
            id="lastName"
            placeholder="Last Name"
            value
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <input
            type="text"
            class="form-control"
            v-model="user.email"
            id="emailId"
            placeholder="Email address"
            value
            required
          />
        </div>
        <div class="col-md-6 mb-3">
          <input
            type="text"
            class="form-control"
            id="act-password"
            placeholder="New password"
            value
            v-model="user.password"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <input
              type="text"
              class="form-control"
              id="act-address"
              placeholder="Address"
              value
              v-model="user.address"
              required
          />
        </div>
        <div class="col-md-6 mb-3">
          <input
              type="text"
              class="form-control"
              id="act-city"
              placeholder="City"
              value
              v-model="user.city"
              required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <span>role : </span>
          <select v-model="user.role" class="form-control" placeholder="Role">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </div>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        <i class="fa fa-spinner fa-spin mr-1" v-if="showLoader"></i>Sign Up
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { successToaster, errorToaster } from "./service/ErrorHandler.js";
export default {
  name: "CreateAccount",
  data() {
    return {
      showLoader: false,
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        address:"",
        city: "",
        role: "",
      },
      errorMessage: [],
    };
  },
  methods: {
    createAccount() {
      this.showLoader = true;

      this.errorMessage = [];

      if (this.user.firstname.length < 5) {
        this.errorMessage.push(
          "FirstName should contains more than 5 character"
        );
      }

      if (this.ValidateEmail(this.user.email) === false) {
        this.errorMessage.push("Please provide a valid Email address");
      }
      if (this.errorMessage.length === 0) {
        axios
          .post(`http://localhost:3000/user-register`, this.user)
          .then(() => {
            this.showLoader = false;
            successToaster(
              "Registered Successfully",
              "User Registered Successfully"
            );
          })
          .catch((error) => {
            console.log(error);
            errorToaster(
                "Registeration Failed",
                "Please try again after sometime"
            );
          });
      }
    },

    ValidateEmail(mail) {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    },
  },
};
</script>

<style>
.form-signup {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
}
</style>
