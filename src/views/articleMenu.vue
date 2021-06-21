<template>
  <div class="row">
    <div v-for="key in articles" :key="key.name">
      <articleCard :article="key"></articleCard>
    </div>
  </div>
</template>

<script>
import articleCard from "@/components/articleCard";
import axios from "axios";
import Vue from "vue";
/* eslint @typescript-eslint/no-var-requires: "off" */
Vue.use(require('vue-cookie'));




export default {
name: "articleMenu",
  components: {
    articleCard,
  },
  data() {
    return {
      articles: [],
    };
  },
  created: function () {
    let token = this.$cookie.get('user');
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(token).data.token}` }
    };
    axios
        .get(`http://localhost:3000/api/article/all`, config)
        .then((response) => {
          this.articles = response.data
        });
  }
}
</script>

<style scoped>

</style>