<template>
  <v-app>
    <v-main>
      <ListView />
    </v-main>
  </v-app>
</template>

<script>
import ListView from './view/ListView.vue'

export default {
  name: 'App',

  components: {
    ListView,
  },

  data: () => ({

  }),
};
</script>
