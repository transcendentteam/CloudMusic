<template>
  <div id="app">
    <HeaderNav />
  </div>
</template>

<script>
import flexble from "./flexble";

import HeaderNav from "./components/HeaderNav.vue"
export default {
  name: 'app',
  components: {
    HeaderNav
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0 0.388889rem;
}
</style>
