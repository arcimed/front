<template>
  <v-card
      :loading="loading"
      class="mx-4 my-4"
      max-width="200"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        height="125"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{ resto.name }}</v-card-title>


    <v-card-text>
      <div class="my-4 text-subtitle-1">
        {{ resto.city }}
      </div>

      <div>{{ resto.address }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
      >
        commander
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "restocard",
  props: ['resto'],
}
</script>

<style scoped>

</style>