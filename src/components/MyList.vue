<template>
    <div class="mylist-box">
      <div class="mylist-item" v-for="l in lists" :key="l.id">
        <div class="left">
          <div class="list-cover" @click="listdetail(l.id);to()" ><img :src="l.coverImgUrl"></div>
          <div class="list-info">
            <h1 class="list-name">{{l.name}}</h1>
            <div class="song-number">{{l.trackCount}}首 <span v-if="l.creator.userId==78801737?false:true">by {{l.creator.nickname}}</span></div>
          </div>
        </div>
        
        <div class="right">
          <span class="iconfont icon-sandian1"></span>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  props:["lists"],
  methods: {
    ...mapActions(["listdetail"]),
    to(){
      this.$router.push({path:'/discover/list/detail'})
    }
  },
};
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_1324779_eqteax7voav.css");
.mylist-box {
  padding: 0 0.574074rem 0 0.444444rem
}
.mylist-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: .277778rem;
}
.mylist-item .left {
  display: flex;
  justify-content: left;
}
.mylist-item .left p{
  margin: 0;
}
.mylist-item .list-cover{
  width: 1.388889rem;
  height: 1.388889rem;
  border-radius: .185185rem;
  overflow: hidden;
  margin-right: .296296rem;
}
.list-info .list-name {
  line-height: .888889rem;
  font-size: .333333rem;
}
.list-info .song-number {
  color: #808080;
}
.mylist-item .list-cover img {
  width: 100%;
}
</style>
