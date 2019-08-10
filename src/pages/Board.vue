<template>
    <div class="board">
      <div class="top">
        <span class="iconfont icon-arrowleft" @click="back"></span>
        <h1>排行榜</h1>
      </div>
      <div class="board-jxb">
        <h1>江小白说唱榜</h1>
        <div class="board-item">
          <div class="cover" @click="listdetail(jxblist[0].id);to()">
            <img :src="jxblist[0].coverImgUrl">
            <div class="update-time">{{jxblist[0].updateFrequency}}</div>
          </div>
          <ul>
            <li>1.哪吒-GAI周延/大痒痒</li>
            <li>2.Follow Me-福克斯/咏者OGCJM</li>
            <li>3.friend $ Foes(feat.Snoop Dogg)</li>
          </ul>
        </div>
      </div>
      <div class="official">
        <h1>官方榜</h1>
        <div class="board-item" v-for="o in officiallist" :key="o.id">
          <div class="cover" @click="listdetail(o.id);to()">
            <img :src="o.coverImgUrl">
            <div class="update-time">{{o.updateFrequency}}</div>
          </div>
          <ul>
            <li v-for="s,i in o.tracks" :key="i">
              <span class="order">{{i+1}}</span>
              <span class="name">{{s.first}}</span>
              <span class="artists">{{s.second}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="recommend">
        <h1>推荐榜</h1>
        <BoarderItemSimple :boards = "recommendlist"/>
      </div>
      <div class="global">
        <h1>全球榜</h1>
        <BoarderItemSimple :boards = "globallist" />
      </div>
      <div class="more">
        <h1>更多榜单</h1>
        <BoarderItemSimple :boards = "morelist" />
      </div>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'

import BoarderItemSimple from '../components/BoarderItemSimple'
export default {
  methods: {
    ...mapActions(["getboard","listdetail"]),
    back(){
            this.$router.go(-1)
    },
    to() {
      this.$router.push({path:'/discover/list/detail'})
    }
  },
  computed: {
    ...mapState(["jxblist","officiallist","recommendlist","globallist","morelist"])
  },
  mounted() {
    this.$nextTick(() => {
      this.getboard()
    })
  },
  components:{
    BoarderItemSimple
  }
};
</script>

<style scoped>
@import url("http://at.alicdn.com/t/font_1324850_o1qneik60zh.css");
h1 {
  font-size: .37037rem;
  color: #333;
  margin-bottom: .444444rem;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.board {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background: #fff;
  padding: 0 0.4rem;
  box-sizing: border-box;
  overflow-y: scroll;
}
.top {
  line-height: 1.388889rem;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: .388889rem;
  margin-bottom:.592593rem;
  padding: 0 0.4rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  z-index:2001;
}
.top h1{
  margin: 0;
}
.board-jxb {
  margin-top: 1.388889rem;
}
.board-jxb .board-item {
  margin-bottom: 1.5rem;
}
.icon-arrowleft {
  margin-right: .518519rem;
}
.board-item {
  display: flex;
  justify-content:left;
  margin-bottom: .444444rem;

}
.cover {
  width:2.851852rem;
  height:2.851852rem;
  margin-right: .296296rem;
  position: relative;
  border-radius: .092593rem;
  overflow: hidden;
}
.cover img {
  width:100%;
}
.cover .update-time {
  position: absolute;
  bottom: .222222rem;
  padding-left: .185185rem;
  font-size: .203704rem;
  color: #fff;
}
.board-item ul {
  margin-top:.2rem;
}
.board-item ul>li {
  width: 5.555556rem;
  margin-bottom: .4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
}

</style>
