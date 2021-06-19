<template>
  <div class="row">
    <div v-for="key in restos" :key="key.name">
      <restocard :resto="key"></restocard>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import restocard from '../components/restocard.vue'
  let data = {
    restos: [
      {name: "test", address:"7 route du quemeneau", city:"saint-nazaire"},
      {name: "test2", address:"7 route du quemeneau", city:"saint-nazaire"},
      {name: "test3", address:"7 route du quemeneau", city:"saint-nazaire"}
    ],
  }
  export default Vue.extend({
    name: 'Home',
    components: {
      restocard,
    },
    data() {
      return data
    },
  })
</script>
