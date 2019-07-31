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
html,body,h1,h2,h3 {
  margin: 0;
  padding: 0;
}
</style>
