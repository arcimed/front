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

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJpYXQiOjE2MjQxMTU4NzYsImV4cCI6MTYyNDE1MTg3Nn0.B4iibbMEL3uFgjx-bFSfBqdnWORQwrtpWd87b3EpE_U'
const config = {
  headers: { Authorization: `Bearer ${token}` }
};
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
    axios
        .get(`http://localhost:3000/api/article/all`, config)
        .then((response) => {
          this.article = response.data
        });
  }
}
</script>

<style scoped>

</style>