<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import flexble from "./flexble";

import Index from "./pages/Index.vue"
export default {
  name: 'app',
  components: {
    Index
  },
  mounted() {
    
  },
}
</script>

<style>
html,body,h1,h2,h3 {
  margin: 0;
  padding: 0;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: .240741rem !important;
}
.swiper-pagination-bullet-active {
  background: #ff494b !important;
}
</style>
