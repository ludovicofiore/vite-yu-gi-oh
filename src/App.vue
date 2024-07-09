<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue';
import CardsList from "./components/CardsList.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    CardsList,
  }
}
</script>

<template>
  <AppHeader />

  <main>
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
