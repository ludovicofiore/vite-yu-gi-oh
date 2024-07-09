<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<template>
  <AppHeader />

</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/variables' as*;
</style>
