<template>
  <div class="main">
    <HeaderNav />
    <PlayerBottom />
  </div>
</template>

<script>

import HeaderNav from "@/components/HeaderNav.vue"
import PlayerBottom from "@/components/PlayerBottom.vue"
export default {
  components: {
    HeaderNav,
    PlayerBottom
  },
  mounted() {
    
  },
}
</script>

<style>
.el-dialog {

  position: absolute !important;
  margin: 0 !important;
  border-radius: 0.277778rem 0.277778rem 0 0 !important;
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
  box-shadow: 0 1px 3px rgba(0,0,0,.3);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100% !important;
  bottom: 0 !important;
}
.el-dialog__header {
    padding: 0 !important;
}
.el-dialog--center .el-dialog__body {
    padding: 0 !important;
}
.el-icon-close {
    color: #fff !important;
}
.el-dialog__footer {
    height: 5.555556rem;
    text-align: right;
    padding: 0 !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
