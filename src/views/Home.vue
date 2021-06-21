<template>
  <div class="row">
    <div v-for="resto in restos" :key="resto.name">
      <restocard :resto="resto"></restocard>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import restocard from '../components/restocard.vue'
  import axios from "axios";

  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxLCJpYXQiOjE2MjQxMTU4NzYsImV4cCI6MTYyNDE1MTg3Nn0.B4iibbMEL3uFgjx-bFSfBqdnWORQwrtpWd87b3EpE_U'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  export default Vue.extend({
    name: 'Home',
    components: {
      restocard,
    },
    data() {
      return {
        restos: [],
      };
    },
    created: function () {
      axios
          .get(`http://localhost:3000/api/restaurant/all`, config)
          .then((response) => {
            this.restos = response.data.data
          });
    }
  })
</script>
