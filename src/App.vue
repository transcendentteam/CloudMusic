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
  created() {
     //在页面加载时读取localStorage里的状态信息
    // localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
    
    // //在页面刷新时将vuex里的信息保存到localStorage里
    // window.addEventListener("beforeunload",()=>{
    //     localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
    // })
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

.pulldown-wrapper {
    z-index: -1 !important;
}
</style>
