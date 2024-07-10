<script>
// import HelloWorld from './components/HelloWorld.vue'

// import axios
import axios from "axios";

import AppHeader from './components/AppHeader.vue';
import CardsList from "./components/CardsList.vue";
import AppSelect from "./components/AppSelect.vue";

// import store
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    CardsList,
    AppSelect
  },


  data() {
    return {
      store,
    }
  },

  // metodo per gestione api
  methods: {
    getCards() {
      axios.get(store.apiURL).then(res => {
        console.log(res.data.data);
        // riempio array con dati dell'api
        store.cardsArray = res.data.data;
        console.log(store.cardsArray);

      })
    }
  },
  // life cicle hook
  created() {
    this.getCards();
  }
}
</script>

<template>
  <AppHeader />

  <main>
    <AppSelect />
    <CardsList />
  </main>

</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as*;

main {
  background-color: $primary;
  padding: 50px 0;
}
</style>
