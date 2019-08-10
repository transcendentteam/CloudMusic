<template>
  <div class="board-list">
    <div class="board-item-simple" v-for="b in boards" :key="b.id">
      <div class="cover" @click="listdetail(b.id);to()">
        <img :src="b.coverImgUrl">
        <div class="update-time">{{b.updateFrequency}}</div>
      </div>
      <p class="name">{{b.name}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  data() {
    return {
    }
  },
  props:["boards"],
  mounted() {
    // console.log(this.boards)
  },
  methods: {
    ...mapActions(["listdetail"]),
    to(){
        this.$router.push({path:'/discover/list/detail'})
    }
  },
};
</script>

<style scoped>
.board-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.board-item-simple {
  width: 2.851852rem;
}
.board-item-simple .cover{
  width:2.851852rem;
  height:2.851852rem;
  margin-right: .296296rem;
  position: relative;
  border-radius: .092593rem;
  overflow: hidden;
}
.board-item-simple .cover img {
  width:100%;
}

</style>
